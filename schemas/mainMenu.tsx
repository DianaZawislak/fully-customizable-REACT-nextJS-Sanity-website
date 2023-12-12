export const Navmenu = {
    name: "Navmenu",
    title: "Menu",
    type: "document",
    description: "This schema is used to generate the navigation bar of the website. Fill in these fields to define how the menu looks and behaves.",
    fields: [
      
      {
        name: "MenuBackground",
        title: "Menu Background Image",
        type: "WebImage",
        description: "This is the background image for the menu. It can help to visually separate the menu from the rest of the page.",
      },
      {
        name: "footerBackgroundImage",
        title: "Footer Background Image",
        type: "WebImage",
        description: "This is the background image for the footer. It can provide a distinct visual separation between the content and the footer.",
      },
      {
        name: "items",
        title: "External Links",
        type: "array",
        of: [{ type: "menuItem" }],
        description: "Links to other pages or external sites to include in the menu. Provide a title (for display) and a link (the URL).",
      },
      {
        name: "ScrollTitles",
        title: "Scroll Section Titles",
        type: "array",
        of: [{ type: "string" }],
        defaultValue: ["Home", "Service", "About Us"],
        description: "Titles of page sections for scrolling. If left empty, the defaults are Home, Services, and About Us.",
      },
    ],
  };
  
  