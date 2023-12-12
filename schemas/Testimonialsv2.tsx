export const testimonialsv2 = {
  name: "testimonialsv2",
  title: "Testimonials",
  type: "document",
  description:
    "This schema is used for managing testimonials on your website. Each testimonial can contain the client's image, name, and the content of their testimonial.",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "text",
      description:
        "This is the name of the client who gave the testimonial. Be sure to spell it correctly and use the full name as much as possible.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(50, "name  cannot be longer than 50 characters."),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      description:
        "This is the content of the testimonial. It's the positive feedback or endorsement given by the client about your product, service, or company.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(400, "text cannot be longer than 300 characters."),
    },
    {
      name: "clientImage",
      title: "Client Image",
      type: "WebImage",

      description:
        "This is the image of the client who gave the testimonial. It's best to use a clear and friendly picture of the client.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};
