# Using Supabase auth with Svelte

Store Supabase's authentication state in a Svelte [readable store](https://svelte.dev/tutorial/readable-stores).

`lib/stores/auth.ts`

```ts
import supabase from '$lib/utils/supabase';
import type { AuthSession, AuthUser } from '@supabase/supabase-js';
import type { Readable } from 'svelte/store';
import { derived, readable } from 'svelte/store';

export const auth = readable<AuthSession>(null, (set) => {
	const session = supabase.auth.session();

	if (session) {
		set(session);
	}

	const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
		set(session);
	});

	return () => {
		authListener.unsubscribe();
	};
});

export const user = derived<Readable<AuthSession>, AuthUser>(auth, ($auth) => $auth?.user);
```

## Accessing Authentication State

It's just a Svelte store. Don't forget the `$` signs.

```html
<script lang="ts">
	import { auth, user } from '$lib/stores/auth';

	$: console.log($auth, $user);
</script>
```
