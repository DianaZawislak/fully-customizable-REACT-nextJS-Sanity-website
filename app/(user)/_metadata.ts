// pages/_metadata.ts
import { Metadata, ResolvingMetadata } from "next";
import { client } from "../../lib/sanity.client";
import urlFor from "../../lib/urlFor";
import { groq } from "next-sanity";
type Props = {
  params: {
    slug: string;
  };
};

export default function createMetadata(seo: companyInformation): Metadata {
  const imageUrl = urlFor(seo.logo.image)
    .width(100)
    .height(100)
    .auto("format")
    .url();

  return {
    title: seo?.CompanyName || "Default Title",
    description: seo?.CompanyDescription || "Default Description",
    keywords: seo?.keywords || "default,keywords",

    openGraph: {
      title: seo?.CompanyName || "Default Title",
      type: "website",

      url: seo?.WebUrl || "https://tree-thing.vercel.app",
      description: seo.CompanyDescription || "Default Description",
      siteName: seo.CompanyDescription || "Default Site Name",
      images: imageUrl,
    },
    twitter: {
      card: "summary",
      description: seo?.CompanyDescription || "Default Description",
      title: seo.CompanyName,
      images: imageUrl,
    },
  };
}
