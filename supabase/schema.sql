-- IEEE NKSS SAC Website — Supabase schema (Phase 4)
-- Run in the Supabase SQL editor, or via `supabase db push`.

create extension if not exists "uuid-ossp";

-- ── Branches ────────────────────────────────────────────────
create table if not exists branches (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  institution text not null,
  district text not null,
  counselor text,
  members integer default 0,
  created_at timestamptz default now()
);

-- ── Committees ──────────────────────────────────────────────
create table if not exists committees (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  category text check (category in ('Technical', 'Non-Technical')) not null,
  mandate text,
  created_at timestamptz default now()
);

-- ── Members (team + committee members) ─────────────────────
create table if not exists members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null,
  institution text,
  photo_url text,
  linkedin_url text,
  group_name text check (group_name in ('Advisory Committee', 'Executive Committee', 'Esteemed Members')),
  committee_id uuid references committees(id) on delete set null,
  created_at timestamptz default now()
);

-- ── Events ──────────────────────────────────────────────────
create table if not exists events (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  branch_id uuid references branches(id) on delete set null,
  event_type text check (event_type in ('Workshop', 'Hackathon', 'Conference', 'Webinar', 'Meetup')) not null,
  event_date timestamptz not null,
  status text check (status in ('open', 'closing', 'closed')) default 'open',
  cover_url text,
  summary text,
  created_at timestamptz default now()
);

-- ── Gallery ─────────────────────────────────────────────────
create table if not exists gallery_items (
  id uuid primary key default uuid_generate_v4(),
  image_url text not null,
  event_id uuid references events(id) on delete set null,
  event_label text,
  year text not null,
  created_at timestamptz default now()
);

-- ── Resources ───────────────────────────────────────────────
create table if not exists resources (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text check (category in ('Guides', 'Templates', 'Branding', 'Forms')) not null,
  file_type text check (file_type in ('PDF', 'DOCX', 'PPTX', 'ZIP')) not null,
  file_url text not null,
  size_kb integer,
  downloads integer default 0,
  created_at timestamptz default now()
);

-- ── Announcements ───────────────────────────────────────────
create table if not exists announcements (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  body text not null,
  category text check (category in ('Event', 'General', 'Urgent')) default 'General',
  pinned boolean default false,
  created_at timestamptz default now()
);

-- ── Contact submissions ─────────────────────────────────────
create table if not exists contact_submissions (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);

-- ── Newsletter subscribers ──────────────────────────────────
create table if not exists newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  created_at timestamptz default now()
);

-- ── Row Level Security ───────────────────────────────────────
-- Public content is readable by anyone; writes require an authenticated
-- admin session (Supabase Auth). Admin role is checked via the
-- `is_admin` claim set on the user's app_metadata (set manually per-user
-- in the Supabase dashboard, or via a service-role script).

alter table branches enable row level security;
alter table committees enable row level security;
alter table members enable row level security;
alter table events enable row level security;
alter table gallery_items enable row level security;
alter table resources enable row level security;
alter table announcements enable row level security;
alter table contact_submissions enable row level security;
alter table newsletter_subscribers enable row level security;

create policy "Public read" on branches for select using (true);
create policy "Public read" on committees for select using (true);
create policy "Public read" on members for select using (true);
create policy "Public read" on events for select using (true);
create policy "Public read" on gallery_items for select using (true);
create policy "Public read" on resources for select using (true);
create policy "Public read" on announcements for select using (true);

create policy "Admin write" on branches for all using (auth.jwt() ->> 'is_admin' = 'true');
create policy "Admin write" on committees for all using (auth.jwt() ->> 'is_admin' = 'true');
create policy "Admin write" on members for all using (auth.jwt() ->> 'is_admin' = 'true');
create policy "Admin write" on events for all using (auth.jwt() ->> 'is_admin' = 'true');
create policy "Admin write" on gallery_items for all using (auth.jwt() ->> 'is_admin' = 'true');
create policy "Admin write" on resources for all using (auth.jwt() ->> 'is_admin' = 'true');
create policy "Admin write" on announcements for all using (auth.jwt() ->> 'is_admin' = 'true');

-- Contact/newsletter: anyone can insert (submit), only admins can read
create policy "Anyone can submit contact form" on contact_submissions for insert with check (true);
create policy "Admin read contact" on contact_submissions for select using (auth.jwt() ->> 'is_admin' = 'true');

create policy "Anyone can subscribe" on newsletter_subscribers for insert with check (true);
create policy "Admin read subscribers" on newsletter_subscribers for select using (auth.jwt() ->> 'is_admin' = 'true');
