<script lang="ts">
	// import { page } from '$app/stores';
	// console.log($page.path);
</script>

<div class="prose doc-prose max-w-4xl mx-auto p-4">
	<slot />

	<!-- <div class="flex">
		<div class="ml-auto mr-0">
			<a
				href="https://github.com/lawrencecchen/supabase-cheatsheet/tree/main/src/routes{$page.path}"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600">Edit this page on GitHub</a
			>
		</div>
	</div> -->
</div>

<style>
	:global(.doc-prose :is(h1, h2, h3, h4, h5, h6) > a) {
		text-decoration: none !important;
		position: relative;
	}
	:global(.doc-prose :is(h1, h2, h3, h4, h5, h6) > a::after) {
		@apply transition-opacity;
		content: '#';
		position: absolute;
		right: 0px;
		padding-left: 2rem;
		transform: translateX(1em);
		/* left: -30px; */
		@apply text-gray-500;
		@apply opacity-0;
	}
	:global(.doc-prose :is(h1, h2, h3, h4, h5, h6) > a:hover::after) {
		@apply opacity-100;
	}
	:global(a::after:hover) {
		@apply underline;
		color: red;
	}
</style>
