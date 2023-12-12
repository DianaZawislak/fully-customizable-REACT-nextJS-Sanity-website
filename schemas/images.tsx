export const WebImage = {
  name: "WebImage",
  title: "Image",
  type: "object",
  description: "image",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule: { required: () => any }) => Rule.required(),
      description: "The image to be displayed.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",

      description: "The caption for the image.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(
          60,
          "caption text cannot be longer than 60 characters."
        ),
    },
    {
      name: "alt",
      title: "Alt Text",
      type: "string",

      description: "The alternative text for the image.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(
          60,
          "alt text cannot be longer than 60 characters."
        ),
    },
  ],
  preview: {
    select: {
      title: "caption",
      subtitle: "alt",
    },
    description: "Preview the caption and alt text of the image.",
  },
};
