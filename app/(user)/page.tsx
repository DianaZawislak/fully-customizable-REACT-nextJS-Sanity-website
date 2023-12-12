import { client } from "../../lib/sanity.client";
import {
  queryAboutUs,
  queryServiceCards,
  queryBusinessShowcaseImages,
  queryTestimonials,
  queryBannerText,
} from "../../lib/queries";
import handleError, { isNullOrUndefinedOrEmpty } from "../../lib/utils";
import MainPage from "../../components/pageContent";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const slug = "homepage";
  const fetchedData = await Promise.allSettled([
    client.fetch(queryAboutUs, { slug: "about-us" }),
    client.fetch(queryServiceCards),
    client.fetch(queryBusinessShowcaseImages),
    client.fetch(queryTestimonials),
    client.fetch(queryBannerText, { slug: slug }),
  ]);

  const [AboutUs, Services, ImageGallery, testimonials, heroBanner] =
    handleError(fetchedData)[0];

  const contentData = {
    Service: Services,
    AboutUsData: AboutUs,
    ImageGallery: ImageGallery,
    testimonials: testimonials,
    heroBanner: heroBanner,
  };

  const allDataIsPresent =
    isNullOrUndefinedOrEmpty(AboutUs) &&
    isNullOrUndefinedOrEmpty(Services) &&
    isNullOrUndefinedOrEmpty(ImageGallery) &&
    isNullOrUndefinedOrEmpty(testimonials) &&
    isNullOrUndefinedOrEmpty(heroBanner);

  return (
    <div className="relative">
      {Services.length > 0 ? (
        <MainPage content={contentData} />
      ) : (
        <div
          className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">
            {" "}
            You have to fill out the required data on Sanity.
          </span>
        </div>
      )}
    </div>
  );
}
