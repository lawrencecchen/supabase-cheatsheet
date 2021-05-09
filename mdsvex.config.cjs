module.exports = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		[
			(require('remark-github'),
			{
				// Use your own repository
				repository: 'https://github.com/lawrencecchen/supabase-cheatsheet'
			})
		],
		require('remark-code-frontmatter'),
		// () => async (tree) => {
		// 	const { visit } = await import('unist-util-visit');
		// 	console.log(visit);
		// 	visit(tree, 'code', (node) => {
		// 		if (node.meta) {
		// 			// node.value = [...node.value]
		// 		}
		// 		console.log('Found code node', node);
		// 	});
		// 	return tree;
		// },
		require('remark-abbr')
	],
	rehypePlugins: [
		require('rehype-slug'),
		[
			require('rehype-autolink-headings'),
			{
				behavior: 'wrap'
			}
		]
	]
};
