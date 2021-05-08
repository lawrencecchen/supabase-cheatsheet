<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Supabase Cookbook</title>
</svelte:head>

<div class="flex flex-col lg:items-center pt-20 px-5 text-gray-800">
	<h1 class="text-5xl lg:text-center lg:leading-tight font-bold max-w-prose prose-lg">
		Supabase Cheatsheet
	</h1>
	<div class="mt-10 text-gray-800 text-sm space-y-2">
		<p>Cheatsheets & copy-paste recipes to quickly get started with Supabase and PostgreSQL.</p>
		<p>⚠️ This is a VERY new project - contributions are welcome!</p>
	</div>
</div>
<div class="prose max-w-prose mx-auto p-4 mt-5">
	<h2><a href="/docs/getting-started">Getting Started</a></h2>

	<h2 class="a" href="/docs/sql">SQL Basics</h2>
	<ul>
		<li><a href="/docs/sql/data-modeling">Data Modeling</a></li>
	</ul>

	<h2>Auth</h2>
	<ul>
		<li><a href="/docs/auth/">Authentication</a></li>
		<li><a href="/docs/auth/svelte">Usage with Svelte</a></li>
	</ul>
</div>
