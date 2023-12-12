
export const serviceHeaderContent = {
  name: "ServiceHeaderContent",
  title: "Service Header Content",
  description: "This schema defines the content for the header section of the business service portion of the website. It includes the title, header, and description of the service header.",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden:true,
      validation: (Rule: any) => Rule.required(),
      description: "This is the primary title for the header section of the business service. It's prominently displayed to highlight the main theme.", 
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      hidden:true,
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: string) => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200)
      },
      description: "Automatically generated from the title, this slug provides a URL-friendly identifier for web pages within the business service section.", 
    },

    {
      name: "header",
      title: "Header",
      type: "string",
      description: "This subheading offers further insights or details about the services, supplementing the primary title.", 
    },

    {
      name: "SectionDescription",
      title: "Section Description",
      type: "string",
      description: "This brief description provides an overview of the services being offered. It helps visitors quickly gauge the scope and nature of the services in this section.", 
    },
    

  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection: { title?: any; }) {
      return {
        title: selection.title,
      };
    },
  },
};