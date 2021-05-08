<div class="prose doc-prose max-w-4xl mx-auto p-4">
	<slot />
</div>

<style>
	:global(.doc-prose h1 > a) {
		text-decoration: none !important;
	}
	:global(.doc-prose h1 > a::after) {
		content: '#';
		position: relative;
		right: -10px;
		@apply text-gray-500;
	}
	:global(.doc-prose h2 > a) {
		text-decoration: none !important;
	}
</style>
