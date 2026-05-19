create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role text not null default 'user',
  created_at timestamptz default now()
);

create table affiliate_offers (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  network text not null,
  title text not null,
  category text not null,
  destination_url text not null,
  cloaked_url text not null,
  rating numeric(2,1) default 4.0,
  pros text[] default '{}',
  cons text[] default '{}',
  badge text,
  active boolean default true
);
