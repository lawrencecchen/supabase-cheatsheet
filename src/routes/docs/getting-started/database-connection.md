# Database Connection

You can use the [Supabase client library](https://github.com/supabase/supabase-js) or any ORM library to access your database.

While the Supabase client library can be used on both the client and the server, other ORMs can only be used in a protected server environment.

## Using `@supabase/supabase-js`

```js
npm install @supabase/supabase-js
```

Inside `supabase.js`

```js
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://[PROJECT_ID].supabase.co', 'public-anon-key');

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

Forgot your database password?

```sql
alter user postgres with password 'YOUR_NEW_PASSWORD';
```
