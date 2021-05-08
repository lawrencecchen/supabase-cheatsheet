# Connect to Supabase

## Using @supabase/supabase-js

Environment variables

```
VITE_SUPABASE_URL=https://aqusbozlvdddsopbopcf.supabase.co
VITE_SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNzQwNTAwNSwiZXhwIjoxOTMyOTgxMDA1fQ.7_AUM36q-2bWA-9VZOjHcMmJfbo22Qgxt9O3i5a2C1c
```

```ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_URL as string,
	import.meta.env.VITE_SUPABASE_KEY as string
);

export default supabase;
```
