# Learn SQL/Supabase in X Minutes

## [Supabase Setup](https://supabase.com/docs/reference/javascript/installing)

### Bash

```bash
npm install @supabase/supabase-js
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<!-- or -->
<script src="https://unpkg.com/@supabase/supabase-js"></script>
```

### [Client Initialization](https://supabase.com/docs/reference/javascript/initializing)

```js
// supabase.js
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://xyzcompany.supabase.co",
  "public-anon-key"
);

// another-file.js
import { supabase } from "./supabase.js";
const { data, error } = await supabase.from("...");
```

## [DDL (Data definition language)](https://www.postgresql.org/docs/current/ddl.html)

DDL determines your database's structure. These commands aren't present in client libraries (like `@supabase/supabase-js`). You'll also typically use the default database/schema that Supabase provides.

```sql
-- Comments start with two hyphens. End each command with a semicolon.
-- SQL keywords are case insensitive.
-- Double quotes are used to indicate identifiers such as tables, column names,
-- and roles. Single quotes indicate string literals. If an identifier is not
-- ambiguous, double quotes are not required.

create database "my_database";
drop database my_database;
-- Supabase by default gives you a database named `postgres`.
-- You likely won't need to use this command as you will be primarily working
-- in the default `postgres` database.

-- List available databases.
show databases;

-- In Supabase, the stuff you make is in the `public` schema. There's also an
-- `auth` schema and `storage` schema. PostgREST exposes everything in the
-- `public` schema as a public API.
create schema myschema;

-- Create table `posts` with columns `id`, `author`, and `content`
create table posts (
    id integer,
    author text,
    content text
);

-- Common data types:
-- integer
-- serial (auto-incrementing integer)
-- boolean
-- date
-- time
-- uuid
-- json
-- jsonb
-- ... https://www.postgresql.org/docs/14/datatype.html

-- DROP deletes the table skeleton as well as the data within.
drop table posts;

-- TRUNCATE deletes all the data the table, but keeps the table itself.
truncate table posts;
```

## [DML (Data manipulation language)](https://www.postgresql.org/docs/current/dml.html)

Now it is time to fill the tables with data. You'll need to insert, update, and delete table data to make a CRUD app.

```sql
insert into posts values (1, 'Ant', 'Hello, world!');
insert into posts values (2, 'awalias', 'Helloo, world!');
-- const { data, error } = await supabase.from("posts").insert([
--   { id: 1, author: "Ant", content: "Hello, world!" },
--   { id: 2, author: "awalias", content: "Hello, world!" },
-- ]);

select * from posts; -- select all from posts
-- const { data, error } = await supabase.from('posts').select('*');
-- Output:
-- | "id" | "author"  | "content"        |
-- |------|-----------|------------------|
-- | 1    | "Ant"     | "Hello, world!"  |
-- | 2    | "awalias" | "Helloo, world!" |

select author, content from posts;
-- const { data, error } = await supabase.from('posts').select('author, content');
-- Output:
-- | "author"  | "content"        |
-- |-----------|------------------|
-- | "Ant"     | "Hello, world!"  |
-- | "awalias" | "Helloo, world!" |

select * from posts where id = 2;
-- const { data, error } = await supabase
--   .from("posts")
--   .select("*")
--   .match({ id: 2 });
-- Output:
-- | "id" | "author"  | "content"        |
-- |------|-----------|------------------|
-- | 2    | "awalias" | "Helloo, world!" |

update posts set content = 'Hello, world!', author = 'Paul' where id = 2 returning content; -- omit `returning` to not return anything.
-- const { data, error } = await supabase
--   .from('posts')
--   .update({ content: 'Hello, world!', author: 'Paul' })
--   .match({ id: 2 });
-- Output:
-- 'Hello, world!'

select * from posts;
-- const { data, error } = await supabase.from('posts').select('*');
-- Output:
-- | "id" | "author"  | "content"        |
-- |------|-----------|------------------|
-- | 1    | "Ant"     | "Hello, world!"  |
-- | 2    | "awalias" | "Hello, world!"  |

delete from posts where id = 1 returning *;
-- const { data, error } = await supabase
--   .from("posts")
--   .delete({ returning: "representation" })
--   .match({ id: 1 });
-- Output:
-- | "id" | "author"  | "content"        |
-- |------|-----------|------------------|
-- | 1    | "Ant"     | "Hello, world!"  |
-- | 2    | "awalias" | "Hello, world!" |
```

## Relational Stuff

```sql

```

## Resources

- Postgres DDL Docs: https://www.postgresql.org/docs/current/ddl.html
- Postgres DML Docs: https://www.postgresql.org/docs/current/dml.html
- Inspired by https://learnxinyminutes.com/docs/sql/
