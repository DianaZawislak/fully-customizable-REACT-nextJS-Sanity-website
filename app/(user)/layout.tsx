//import Footer from "../../components/Footer";
import "./globals.css";
import { client } from "../../lib/sanity.client";
import React from "react";
import dynamic from "next/dynamic";
import { queryMenuBySlug, queryCompanyInfo } from "../../lib/queries";
import createMetadata from "./_metadata";
import handleError, { isNullOrUndefinedOrEmpty } from "../../lib/utils";
import { NextResponse } from "next/server";
import urlFor from "../../lib/urlFor";
export const revalidate = 0;
const DynamicNavbar = dynamic(() => import("../../components/Navbar"), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import("../../components/Footer"), {
  loading: () => <p>Loading...</p>,
});

const PrivacyDraw = dynamic(() => import("../../components/PrivacyDraw"), {
  loading: () => <p>Loading...</p>,
});
export async function generateMetadata() {
  const slug = "companyInfo";
  const postData: companyInformation = await client.fetch(queryCompanyInfo, {
    slug: slug,
  });
  if (isNullOrUndefinedOrEmpty(postData)) {
    const metadata = createMetadata(postData);
    return metadata;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const slug = "homepage";

  const fetchedData = await Promise.allSettled([
    client.fetch(queryCompanyInfo, { slug: "companyInfo" }),
  ]);
  const [companyinfo] = handleError(fetchedData)[0];

  return (
    <html lang="en">
      <body className="bg-white">
        <div className="mx-auto max-w-9xl">
          <PrivacyDraw />
          {isNullOrUndefinedOrEmpty(companyinfo) && (
            <DynamicNavbar companyinfo={companyinfo} />
          )}
          {children}
          {isNullOrUndefinedOrEmpty(companyinfo) && (
            <DynamicFooter data={companyinfo} />
          )}
        </div>
      </body>
    </html>
  );
}
