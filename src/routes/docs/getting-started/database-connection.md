# Database Connection

You can use the [Supabase client library](https://github.com/supabase/supabase-js) or any ORM library to access your database.

## Should I use `@supabase/supabase-js` or another ORM?

While most ORMs (like Prisma, Sequelize, TypeORM, etc.) must be used in a protected server environment, the Supabase client library can be used on both the client and the server.

The Supabase client library talks to your database over a [Postgrest](https://postgrest.org/en/stable/) instance. This combined with PostreSQL's [Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) enables safe database access directly from the client.

You will be able to write most queries using [modifiers](https://supabase.io/docs/reference/javascript/using-modifiers) and [filters](https://supabase.io/docs/reference/javascript/using-filters). For advanced queries, you can write SQL views and stored procedures, and query it through the client library.

## Using `@supabase/supabase-js`

```js
npm install @supabase/supabase-js
```

Inside `supabase.js`

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://[YOUR-SUPABASE-ID].supabase.co';
const supabaseKey = 'anon-public-key';
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

> Do not commit `.env` into version control.

You can find your credentials in the Supabase dashboard under Settings -> Database:
https://app.supabase.io/project/[YOUR-PROJECT-ID]/settings/database
![alt text](/screenshots/connection-info.png)

## Forgot Your Database Password?

```sql
alter user postgres with password 'YOUR_NEW_PASSWORD';
```

## Related:

- Other ORMs: https://www.prisma.io/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries
