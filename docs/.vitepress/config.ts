import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Supabase Cheatsheet",
  description: "Cheatsheets for anyone starting with Supabase + PostgreSQL",
  themeConfig: {
    repo: "lawrencecchen/supabase-cheatsheet",
    docsDir: "docs",
    docsBranch: "main",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",
    lastUpdated: "Last Updated",
    sidebar: {
      "/guide/": getGuideSidebar(),
      // '/config/': getConfigSidebar(),
      "/": getGuideSidebar(),
    },
    // nav: [{ text: "Guide", link: "/", activeMatch: "^/$|^/guide/" }],
  },
});

function getGuideSidebar() {
  return [
    {
      text: "Basics",
      children: [
        { text: "What is Supabase?", link: "/" },
        {
          text: "Database Connection",
          link: "/guide/basic/database-connection",
        },
        {
          text: "SQL/Supabase in X Minutes",
          link: "/guide/basic/sql/sql-supabase-in-x-minutes",
        },
        {
          text: "In Depth SQL",
          link: "/guide/basic/sql/in-depth-sql",
          children: [
            { text: "psql intro", link: "/guide/basic/sql/psql" },
            { text: "psql commands", link: "/guide/basic/sql/psql-commands" },
            {
              text: "Data Definition Language (DDL)",
              link: "/guide/basic/sql/data-definition-language",
            },
          ],
        },
      ],
    },
    {
      text: "Advanced",
      children: [
        {
          text: "Row Level Security",
          link: "/guide/advanced/row-level-security",
        },
      ],
    },
    {
      text: "Frameworks",
      children: [
        {
          text: "Next.js",
          link: "/guide/frameworks/next-js",
        },
        {
          text: "Remix.run",
          link: "/guide/frameworks/remix-run",
        },
        {
          text: "SvelteKit",
          link: "/guide/frameworks/sveltekit",
        },
        {
          text: "Solid Start",
          link: "/guide/frameworks/solid-start",
        },
      ],
    },
    {
      text: "Awesome Supabase",
      link: "/guide/awesome-supabase",
    },
  ];
}
