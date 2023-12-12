export const AboutUs = {
  name: "AboutUs",
  title: "About Us",
  description:
    "This document type defines the content for the About Us section of the webpage, including the title, main text, and background image.",
  type: "document",
  initialValue: { slug: "about-us" },

  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "This field is automatically generated from the title and used for creating URL-friendly identifiers. It is hidden in the UI.",
      hidden: false,
    },
    {
      description:
        "This field is for entering the main text of the About Us section. Use it to share the story behind your business, introducing who you are and detailing your journey and values. This rich text field allows for diverse content including formatted text and links.",
      name: "mainText",
      title: "Card Text Content",
      type: "blockContent",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(
          500,
          "Card Text cannot be longer than 500 characters."
        ),
    },
    {
      description:
        "Upload a background image for the About Us section. This image will appear behind the text content, providing visual interest and context for the section.",
      name: "backgroundImage",
      title: "Background Image",
      type: "WebImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "backgroundImage",
    },
    prepare(selection: any) {
      return {
        title: selection.slug,
        media: selection.backgroundImage,
      };
    },
  },
};
