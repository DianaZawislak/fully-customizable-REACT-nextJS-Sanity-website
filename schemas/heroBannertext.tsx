import { defineField, defineType } from "sanity";

export const BannerText = {
  name: "BannerText",
  title: "Hero Banner",
  type: "document",
  initialValue: { slug: "homepage" },
  description:
    " This is the 'Hero Banner' component. Think of it as the large banner you usually see at the top of a website. It's designed to catch your attention with important information.",
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      hidden: false,

      description: "This field is automatically generated from the title", // Added description
    },
    {
      name: "CTA_Main",
      title: "Hero Title Text",
      type: "text",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(
          50,
          "This text cannot be longer than 50 characters."
        ),
      description: `This is where you put the main phrases or sentences that encourage visitors to take some action, like "Learn more" or "Join us today". This could be multiple lines of text.`,
    },

    {
      name: "ctaText_Subtitle",
      title: "Hero Content Text",
      type: "text",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number, arg1: string): any; new (): any };
        };
      }) =>
        Rule.required().max(
          80,
          "This text cannot be longer than 80 characters."
        ),

      description:
        "This is for any additional phrases or sentences that provide more information about the call to action. This could also be multiple lines of text.",
    },
    {
      name: "HeroImages",
      title: "Hero Banner Image",
      type: "WebImage",
      description:
        "Upload the image that you want to display in the hero section of your website. Ensure the image is high quality and represents the theme or message you wish to convey.",
    },

    {
      name: "Herobutton",
      title: "Hero Button",
      type: "object",
      fields: [
        {
          name: "btnTXT",
          title: "Button Text",
          type: "string",
          description: `This is the text that will appear on the button. For example, "Sign up" or "Contact us".`,
          validation: (Rule: {
            required: () => {
              (): any;
              new (): any;
              max: { (arg0: number, arg1: string): any; new (): any };
            };
          }) =>
            Rule.required().max(
              20,
              "button text cannot be longer than 20 characters."
            ),
        },

        {
          name: "PhoneNumber",
          title: "Phone Number",
          type: "string",
          description:
            "The phone number that will be used when the button is clicked",
          validation: (Rule: {
            required: () => {
              (): any;
              new (): any;
              custom: {
                (
                  arg0: (
                    number: string
                  ) => true | "Please enter a valid phone number"
                ): any;
                new (): any;
              };
            };
          }) =>
            Rule.required().custom((number: string) => {
              const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
              return pattern.test(number)
                ? true
                : "Please enter a valid phone number";
            }),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "backgroundImage",
    },
  },
};
