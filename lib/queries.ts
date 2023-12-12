import { groq } from "next-sanity";

export const queryMenuBySlug = groq`*[_type == 'menu' && slug.current == $slug][0] {
  title,
  slug,
  "logoUrl": Menulogo.asset->url,
  "backgroundImageUrl": MenuBackground.asset->url,
  items[] {
    title,
    link
  },
  ScrollTitles
}`;

export const queryAboutUs = groq`*[_type == 'AboutUs' && slug.current == $slug][0] {
  title,
  mainText,
  backgroundImage
}`;

export const queryBusinessShowcaseImages = groq`*[_type == 'BusinessShowcaseImage'] {
  image,
  caption,
  alt
}`;

export const queryCompanyInfo = groq`*[_type == 'CompanyInfo' && slug.current == $slug][0] {
  "CompanyName": CompanyDetails.CompanyName,
  "CompanyDescription": CompanyDetails.CompanyDescription,
  "WebUrl": CompanyDetails.url ,
  "StreetAddress": Address.StreetAddress,
  "City": Address.City,
  "State": Address.State,
  "Zipcode": Address.Zipcode,
  "PhoneNumber": ContactInfo.PhoneNumber,
  "Email": ContactInfo.Email,
  logo,
  keywords
}`;

export const queryBannerText = groq`*[_type == 'BannerText' && slug.current == $slug][0] {
  title,
  "CTA_Main": CTA_Main,
  "ctaText_Subtitle": ctaText_Subtitle,
  HeroImages,
  "HeroButton": {
    "btnTXT": Herobutton.btnTXT,
    "PhoneNumber": Herobutton.PhoneNumber
  }
}`;

export const queryServiceCards = groq`*[_type == 'ServiceSectionCard']{
  title,
  cardText,
  backgroundImage,
  logo
}`;

export const queryTestimonials = groq`*[_type == 'testimonialsv2']{
  clientName,
  content,
  clientImage
}`;
