## My Portfolio CRUD

A portfolio built with Next.js and React, styled with Tailwind CSS, and backed by Supabase.

## Features

- Public homepage lists visible projects only
- Admin dashboard to:
	- Create projects
	- Edit projects
	- Delete projects
	- Toggle visibility (hide/show)
- Supabase database for projects.

## Prerequisites

- Node.js 20+.

## Scripts

- `npm run dev` – start development server
- `npm run build` – build for production
- `npm run start` – start production server
- `npm run lint` – run ESLint

## Database (Supabase)

- `id` (uuid, primary key, default generated)
- `slug` (text, unique, required)
- `title` (text, required)
- `summary` (text, nullable)
- `content` (text, nullable)
- `tags` (text[] array, nullable)
- `cover_url` (text, nullable)
- `is_hidden` (boolean, default false)
- `created_at` (timestamptz, default now())
- `updated_at` (timestamptz, default now())

## Project structure

Key folders/files:

- `app/` – App Router pages
	- `page.tsx` – homepage (shows visible projects)
	- `admin/` – admin dashboard and forms
	- `project/[slug]/page.tsx` – project detail
	- `actions/projects.ts` – server actions for CRUD
- `lib/supabase/` – Supabase libraries
- `components/` – UI components (Navbar, Footer)