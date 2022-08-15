export default {
  title: "Hi VitePress",
  description: "Just playing around",
  logo: "cat.webp",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
      { text: "Changelog", link: "https://github.com/crazybber" },
    ],
    footer: {
      message: "Released under MIT License.",
      copyright: "Copyright © 2020-present CrazyBBer",
    },

    //side bar
  //   sidebar: [
  //     {
  //       text: "Guide",
  //       items: [
  //         { text: "Introduction", link: "/introduction" },
  //         { text: "Getting Started", link: "/getting-started" },
  //       ],
  //     },
  //   ],
   }, //end theme config
};
