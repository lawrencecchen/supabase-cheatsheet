```sql
---
filename: hohoho.sql
---
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
```

```
Code block without frontmatter
```
