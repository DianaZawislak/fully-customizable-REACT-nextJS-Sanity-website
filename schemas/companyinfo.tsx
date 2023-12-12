export const CompanyInfo = {
  name: "CompanyInfo",
  title: "Company Information",
  type: "document",
  description:
    "This section allows you to input the main information about your company.",
  initialValue: { slug: "companyInfo" },

  fields: [
    {
      name: "CompanyDetails",
      title: "Company Details",
      type: "object",
      description: "Enter the main details about your company.",
      fields: [
        {
          name: "CompanyName",
          title: "Business Name",
          type: "string",
          description:
            "Enter the name of your business. This is a required field.",
          validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
          name: "CompanyDescription",
          title: "Business Description",
          type: "text",
          description:
            "Please Describe your business. This is a required field.",
          validation: (Rule: {
            required: () => {
              (): any;
              new (): any;
              max: { (arg0: number, arg1: string): any; new (): any };
            };
          }) =>
            Rule.required().max(
              165,
              "Description cannot be longer than 165 characters."
            ),
        },

        {
          name: "url",
          title: "Site Web Address",
          type: "url",
          description: ` Please enter a full Url starting with 'http://' or 'https://'`,
          validation: (Rule: {
            [x: string]: any;
            uri: (arg0: { allowRelative: boolean; scheme: string[] }) => any;
          }) =>
            Rule.required().uri({
              allowRelative: true,
              scheme: ["http", "https"],
            }),
        },
      ],
    },
    {
      name: "Address",
      title: "Business Address",
      type: "object",
      description: "This is where you put your business location details.",
      fields: [
        {
          name: "StreetAddress",
          title: "Street Address",
          type: "string",
          description: "Enter the street address of your business.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "City",
          title: "City",
          type: "string",
          description: "Enter the city where your business is located.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "State",
          title: "State",
          type: "string",
          description: "Enter the state where your business is located.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "Zipcode",
          title: "Zip Code",
          type: "number",
          description: "Enter the postal code for your business.",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "ContactInfo",
      title: "Contact Information",
      type: "object",
      description: "Enter your business contact details.",
      fields: [
        {
          name: "PhoneNumber",
          title: "Phone Number",
          type: "string",
          description:
            "Enter your business phone number. Make sure it's valid.",
          validation: (Rule: any) =>
            Rule.required().custom((number: string) => {
              const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
              return pattern.test(number)
                ? true
                : "Please enter a valid phone number";
            }),
        },
        {
          name: "Email",
          title: "Business Email",
          type: "string",
          description:
            "Enter your business email address. It must be a valid email.",
          validation: (Rule: any) =>
            Rule.required().custom((email: string) => {
              const pattern = /^\S+@\S+\.\S+$/;
              return pattern.test(email) ? true : "Please enter a valid email";
            }),
        },
      ],
    },
    {
      name: "logo",
      title: "Logo",
      type: "WebImage",

      description:
        "Upload your company's logo. If your logo contains text, ensure it's clear and legible.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description:
        "A list of keywords to describe your business. Useful for SEO.",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",

      hidden: false,
      description: "This field is automatically generated from the title",
    },
  ],
  preview: {
    select: {
      title: "CompanyDetails.CompanyName",
    },
  },
};
