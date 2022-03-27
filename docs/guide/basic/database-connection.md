# Database Connection

You can use the [Supabase client library](https://github.com/supabase/supabase-js) or any ORM library to access your database.

## `@supabase/supabase-js` vs other ORMs?

While most ORMs (like Prisma, Sequelize, TypeORM, etc.) must be used in a protected server environment, the Supabase client library can be used on both the client and the server. Using the Supabase client library allows you to take full advantage of the built in PostgREST API, as well as the other seamless interfaces for auth, realtime, and storage.

The Supabase client library talks to your database over a [PostgREST](https://postgrest.org/en/stable/) API. This combined with PostreSQL's [Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) enables safe database access directly from the client. The anonymous API key (named `supabaseKey` in the example below) can be safely exposed in user-accessible frontend code, **as long row level security policies are written.**

### Drawbacks

Postgrest supports most queries using [modifiers](https://supabase.io/docs/reference/javascript/using-modifiers) and [filters](https://supabase.io/docs/reference/javascript/using-filters). For advanced queries, you can write SQL views and stored procedures that can be queried directly from the client library. Currently, [views do not apply the row level security (RLS) of underlying tables](https://stackoverflow.com/questions/33858030/why-isnt-row-level-security-enabled-for-postgres-views). As a workaround, you can write RLS rules directly on the view, but you won't be able to filter based on `current_user`. [PostgreSQL 15 will support security invoker views.](https://www.depesz.com/2022/03/22/waiting-for-postgresql-15-add-support-for-security-invoker-views/) Read more about [`SECURITY DEFINER` / `SECURITY INVOKER~](/security-definer-invoker).

## Using `@supabase/supabase-js`

```js
npm install @supabase/supabase-js
```

Inside `supabase.js`

```js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://[YOUR-SUPABASE-ID].supabase.co";
const supabaseKey = "anon-public-key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
```

_More info: https://supabase.io/docs/reference/javascript/initializing_

## Using Prisma

Inside `schema.prisma`

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Inside `.env`

```
DATABASE_URL=postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:6543/postgres
```

_Do not commit `.env` into version control._

You can find your credentials in the Supabase dashboard under Settings -> Database:
https://app.supabase.io/project/[YOUR-PROJECT-ID]/settings/database
![alt text](./connection-info.png)

## Reset database password

Run this command in the SQL Editor.

```sql
alter user postgres with password 'YOUR_NEW_PASSWORD';
```

## Related

- Other ORMs: https://www.prisma.io/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries
