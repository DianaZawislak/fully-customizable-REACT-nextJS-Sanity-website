export const BusinessShowcaseImage = {
    name: 'BusinessShowcaseImage',
    title: 'Business Showcase Image',
    type: 'document',
    description: "Upload an image to showcase a sample of your business's offerings on the website.",
    fields: [
      {
        name: "image",
        title: "Image",
        type: "image",
        validation: (Rule: { required: () => any; }) => Rule.required(),
        description: "The image to be displayed.",
      },
      {
        name: "caption",
        title: "Caption",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
        description: "The caption for the image.",
      },
      {
        name: "alt",
        title: "Alt Text",
        type: "string",
        validation: (Rule: { required: () => any; }) => Rule.required(),
        description: "The alternative text for the image.",
      },
    ],
    preview: {
      select: {
        title: 'caption',
        subtitle: 'alt',
      },
      description: "Preview the caption and alt text of the image." 
    },
  };