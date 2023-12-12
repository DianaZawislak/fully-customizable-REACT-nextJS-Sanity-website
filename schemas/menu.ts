export const menu = {
  name: "menu",
  title: "Menu",
  type: "object",
  description: "This schema is used to generate the navigation bar of the website. Fill in these fields to define how the menu looks and behaves.",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This is the main title of your menu. Typically, it's not displayed on the website, but it's used for identifying the menu in the Sanity Studio.",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "This is a URL-friendly version of the menu title. It's used in the website's address to lead to this menu.",
      options: {
        source: "title",
        maxLength: 200,
     
        slugify: (input: string) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "Menulogo",
      title: " Menu Logo",
      type: "image",
      options: { hotspot: true },
      description: "This is the logo that will appear on the menu. It's best to use an image that's clear and recognizable, even at small sizes.",
    },
    {
      name: "MenuBackground",
      title: " Menu Background Image",
      type: "image",
      options: { hotspot: true },
      description: "This is the background image for the menu. It's not always necessary, but it can help to visually separate the menu from the rest of the page.",
    },
    {
      name: "items",
      title: "External Links",
      type: "array",
      of: [{ type: "menuItem" }],
      description: "These are links to other pages or external sites that you want to include in the menu. For each item, you'll need to provide a title (which will be displayed on the menu) and a link (the URL of the page you're linking to).",
    },
    {
      name: "ScrollTitles",
      title: "Scroll Section Titles",
      type: "array",
      of: [{ type: "string" }],
      defaultValue: ["Home", "Service", "About Us"],
      description: "These are the titles of the different sections of the page that you can scroll to by clicking on a menu item. When a visitor clicks on one of these items in the menu, they'll be automatically scrolled to that section of the page. If left empty, the default values will be Home, Services, and About Us.",
    },
  ],
};

export const menuItem = { 
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  description: "Each menu item represents a single link in your menu. The title will be displayed on the menu, and the link should point to the destination page.",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "This is the text that will be displayed on the menu for this item. It should be short and descriptive.",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "This is the URL that the menu item will link to. It can be a page on your site or a page on an external site.",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
