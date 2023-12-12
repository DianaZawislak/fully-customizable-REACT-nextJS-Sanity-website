export const ServiceCard = {
  name: "ServiceSectionCard",
  title: "Service Section Cards",
  type: "document",
  description:
    "This represents a 'Service Section Card'. Such cards showcase the different services offered by your business on the website. To make these cards visible on your site, ensure you add them to the multi-card section.",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Enter the main title or headline for this service card. This is a required field.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(30, "Title cannot be longer than 30 characters."),
    },

    {
      name: "cardText",
      title: "Card Text",
      type: "string",
      description:
        "Main text for the service card. This can be a brief description or other relevant information about the service. This is a required field.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(
          100,

          "Card Text cannot be longer than 100 characters."
        ),
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "WebImage",
      description:
        "Upload an image for the background of this service card. If not provided, a default background will be used.",
    },

    {
      name: "logo",
      title: "Logo",
      type: "WebImage",
      description:
        "If you want to display a logo on this service card, you can upload it here.",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection: { title?: any }) {
      return {
        title: selection.title,
      };
    },
  },
};
