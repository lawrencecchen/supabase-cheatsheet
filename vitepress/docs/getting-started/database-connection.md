# Database Connection

You can use the [Supabase client library](https://github.com/supabase/supabase-js) or any ORM library to access your database.

## Should I use `@supabase/supabase-js` or another ORM?

While most ORMs (like Prisma, Sequelize, TypeORM, etc.) must be used in a protected server environment, the Supabase client library can be used on both the client and the server. It is recommended that you use the Supabase client library to take full advantage of the built in REST interface for auth, realtime, and storage capabilities.

The Supabase client library talks to your database over a [PostgREST](https://postgrest.org/en/stable/) instance. This combined with PostreSQL's [Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html) enables safe database access directly from the client.

You will be able to write most queries using [modifiers](https://supabase.io/docs/reference/javascript/using-modifiers) and [filters](https://supabase.io/docs/reference/javascript/using-filters). For advanced queries, you can write SQL views and stored procedures that can be queried from the client library.

## Using `@supabase/supabase-js`

```js
npm install @supabase/supabase-js
```

Inside `supabase.js`

```js
---
filename: supabase.js
---
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
---
filename: schema.prisma
---
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Inside `.env`

```
---
filename: .env
---
DATABASE_URL=postgres://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-ID].supabase.co:6543/postgres
```

_Do not commit `.env` into version control._

You can find your credentials in the Supabase dashboard under Settings -> Database:
https://app.supabase.io/project/[YOUR-PROJECT-ID]/settings/database
![alt text](/screenshots/connection-info.png)

## Forgot Your Database Password?

Run this command in the SQL Editor.

```sql
alter user postgres with password 'YOUR_NEW_PASSWORD';
```

## Related:

- Other ORMs: https://www.prisma.io/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries
