# Public Profiles Table

The built in `auth.users` table is private. To store public user data, create a table (`profiles`) in the `public` schema and attach a [trigger procedure](https://www.postgresql.org/docs/9.2/plpgsql-trigger.html). This will automatically sync the `auth.users` table with `public.profiles`.

Since `public.profiles` is public, ensure that it doesn't contain any private information.

`profiles` is a good place to store:

- Avatar image urls
- Usernames
- User websites

## Example Table Definition for `profiles`

```sql
-- Create a table for Public Profiles
create table public.profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  username text unique,
  avatar_url text,
  website text,
  inserted_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

-- More info on row level policies: https://supabase.io/docs/guides/auth#policy-examples
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );
```

## Trigger Procedure

```sql
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```
