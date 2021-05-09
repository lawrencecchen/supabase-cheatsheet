const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');
const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',
	dark: 'class',
	purge: {
		content: ['./src/**/*.{html,js,svelte,md,svx,svelte.md,ts}'],
		options: {
			defaultExtractor: (content) => [
				// If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
				...tailwindExtractor(content),
				// Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
				...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
					([_match, group, ..._rest]) => group
				)
			]
		},
		safelist: [/^svelte-[\d\w]+$/]
	},
	theme: {
		extend: {
			// typography: {
			// 	DEFAULT: {
			// 		'h1 > *': {
			// 			textDecoration: 'none'
			// 		}
			// 	}
			// }
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		plugin(function ({ addVariant, e, postcss }) {
			addVariant('firefox', ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: '-moz-document',
					params: 'url-prefix()'
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules((rule) => {
					rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
				});
			});
		})
	]
};
