export type Project = {
  id: string;
  title: string;
  slug: string;
  summary: string | null;
  content: string | null;
  tags: string[] | null;
  cover_url: string | null;
  is_hidden: boolean;
  created_at: string;
};
