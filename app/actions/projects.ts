"use server";

import { createServer } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const DEFAULT_COVER_URL = "https://placehold.co/600x400?text=Placeholder+Image";

// Helper to generate slug from title
function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with dashes
        .replace(/(^-|-$)/g, ""); // Remove leading/trailing dashes
}

export type Project = {
    id: string;
    slug: string;
    title: string;
    summary: string | null;
    content: string | null;
    tags: string[] | null;
    cover_url: string | null;
    is_hidden: boolean;
    created_at: string;
    updated_at: string;
};

// GET ALL (for admin - includes hidden projects)
export async function getAllProjects(): Promise<Project[]> {
    const supabase = await createServer();

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Fetch error:", error);
        throw new Error(`Failed to fetch projects: ${error.message}`);
    }

    return data || [];
}

// CREATE
export async function createProject(formData: FormData) {
    const supabase = await createServer();

    // Extract form data
    const title = formData.get("title") as string;
    const summary = formData.get("summary") as string;
    const content = formData.get("content") as string;
    const tagsInput = formData.get("tags") as string;
    const cover_url = formData.get("cover_url") as string;
    const is_hidden = formData.get("is_hidden") === "on";

    // Convert comma-separated tags to array
    const tags = tagsInput
        ? tagsInput
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];

    const slug = generateSlug(title);
    const sanitizedCoverUrl =
        cover_url && cover_url.trim() !== "" ? cover_url : DEFAULT_COVER_URL;

    // Insert into database
    const { error } = await supabase.from("projects").insert({
        title,
        slug,
        summary: summary || null,
        content: content || null,
        tags: tags.length > 0 ? tags : null,
        cover_url: sanitizedCoverUrl,
        is_hidden,
    });

    if (error) {
        console.error("Create error:", error);
        throw new Error(`Failed to create project: ${error.message}`);
    }

    // Refresh the pages that show projects
    revalidatePath("/");
    revalidatePath("/admin");

    // Redirect back to admin page
    redirect("/admin");
}

// UPDATE
export async function updateProject(id: string, formData: FormData) {
    const supabase = await createServer();

    const title = formData.get("title") as string;
    const summary = formData.get("summary") as string;
    const content = formData.get("content") as string;
    const tagsInput = formData.get("tags") as string;
    const cover_url = formData.get("cover_url") as string;
    const is_hidden = formData.get("is_hidden") === "on";

    const tags = tagsInput
        ? tagsInput
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];

    const slug = generateSlug(title);
    const sanitizedCoverUrl =
        cover_url && cover_url.trim() !== "" ? cover_url : DEFAULT_COVER_URL;

    const { error } = await supabase
        .from("projects")
        .update({
            title,
            slug,
            summary: summary || null,
            content: content || null,
            tags: tags.length > 0 ? tags : null,
            cover_url: sanitizedCoverUrl,
            is_hidden,
        })
        .eq("id", id);

    if (error) {
        console.error("Update error:", error);
        throw new Error(`Failed to update project: ${error.message}`);
    }

    revalidatePath("/");
    revalidatePath("/admin");
    revalidatePath(`/project/${slug}`);
    redirect("/admin");
}

// GET ONE (needed for edit form)
export async function getProject(id: string): Promise<Project | null> {
    const supabase = await createServer();

    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error("Fetch error:", error);
        return null;
    }

    return data;
}

// DELETE
export async function deleteProject(id: string) {
    const supabase = await createServer();

    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
        console.error("Delete error:", error);
        throw new Error(`Failed to delete project: ${error.message}`);
    }

    revalidatePath("/");
    revalidatePath("/admin");
}

// TOGGLE HIDDEN
export async function toggleHidden(id: string, currentState: boolean) {
    const supabase = await createServer();

    const { error } = await supabase
        .from("projects")
        .update({ is_hidden: !currentState })
        .eq("id", id);

    if (error) {
        console.error("Toggle hidden error:", error);
        throw new Error(`Failed to toggle visibility: ${error.message}`);
    }

    revalidatePath("/");
    revalidatePath("/admin");
}