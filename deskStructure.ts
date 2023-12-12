import { DocumentBuilder, DocumentNode, StructureBuilder } from "sanity/desk";

// Helper function to create a nested list
// Helper function to create a nested list
const createNestedList = (
  S: StructureBuilder,
  title: string,
  documentTypes: { type: string; title: string }[]
) => {
  // Convert the title to a URL-friendly format (e.g., "Site Information and Setting" becomes "site-information-and-setting")
  const id = title.toLowerCase().split(" ").join("-");

  return S.listItem()
    .title(title)
    .child(
      S.list()
        // Use the URL-friendly ID
        .title(title)
        .items(
          documentTypes.map((docType) =>
            S.documentTypeListItem(docType.type).title(docType.title)
          )
        )
    );
};

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title("Admin Panel")
    .items([
      // Nested list for 'Site Information and Setting' section

      S.listItem()
        .title("Business Information")
        .id("0568623d-f870-4887-923c-bdab5a69b8e3")
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document()
            .schemaType("CompanyInfo")
            .documentId("0568623d-f870-4887-923c-bdab5a69b8e3")
        ),

      // Nested list for 'Content' section

      S.listItem()
        .title("Hero")
        .id("74594898-23d2-4fd0-b344-34c78c4d0124")
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document()
            .schemaType("BannerText")
            .documentId("74594898-23d2-4fd0-b344-34c78c4d0124")
        ),
      S.documentTypeListItem("ServiceSectionCard").title("Services"),
      S.listItem()
        .title("About Us")
        .id("40c528ce-b90a-47c0-bf92-6bdbfd589904")
        .child(
          // Instead of rendering a list of documents, we render a single
          // document, specifying the `documentId` manually to ensure
          // that we're editing the single instance of the document
          S.document()
            .schemaType("AboutUs")
            .documentId("8c4e29c6-3d43-4bd7-8893-cda1c2896376")
        ),
      S.documentTypeListItem("testimonialsv2").title("Testimonials"),
      S.documentTypeListItem("BusinessShowcaseImage").title("Photo Gallery"),
    ]);
