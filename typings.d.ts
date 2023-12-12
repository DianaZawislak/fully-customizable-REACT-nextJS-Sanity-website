type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
interface Post extends Base {
  slug: Slug;
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  title: string; // the original title property in Post
  description: string; // the original description property in Post
  seo: SEO; // SEO fields are now contained in this separate property
}
interface AboutUs {
  mainText: Block;
  backgroundImage: GalleryImage;
}
interface companyInformation extends Base {
  title: string;
  slug: Slug;
  Address: Address;
  WebUrl: string;
  CompanyName: string;
  CompanyDescription: string;
  PhoneNumber: string;
  StreetAddress: string;
  City: string;
  State: string;
  Zipcode: number;
  Email: string;
  keywords: string[];
  logo: WebImage;
}
interface ServiceCard {
  title: string;
  cardText: string;
  backgroundImage: WebImage | null;
  logo: WebImage;
}
interface WebImage extends Base {
  image: Image;
  caption: string;
  alt: string;
}
interface ContactInfo {
  PhoneNumber: string;
  Email: string;
}

interface CompanyDetails extends Base {
  CompanyName: string;
  CompanyDescription: string;
}
interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}
interface Banner extends Base {
  title: string;
  slug: Slug;
  CTA_Main: string;
  HeroImages: WebImage;
  ctaText_Subtitle: string;
  HeroButton: {
    btnTXT: string;
    PhoneNumber: string;
  };
}
interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}

interface MenuItem {
  title: string;
  link: string;
}

interface Menu extends Base {
  title: string;
  slug: Slug;
  logoUrl: string;
  backgroundImageUrl: string;
  items: MenuItem[];
  ScrollTitles: string[];
}

interface OpenGraph_SEO {
  title: string;
  type:
    | "article"
    | "website"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";
  url: string;
  siteName: string;
  image: {
    url: string;
    alt: string;
  };
}

interface Twitter_SEO {
  card: "summary" | "summary_large_image" | "app";
  site: string;
  creator: string;
  images: {
    url: string;
    alt: string;
  };
}

interface SEO {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  image: Image; // Or a more specific type if you have one
  twitterCard: string;
  metaRobots: string[];
  openGraph: OpenGraph;
  twitter: Twitter;
}

interface Hero extends Base {
  title: string;
  slug: Slug;
  CTA_Main: string[];
  backgroundImageUrl: string;
  ctaText_Subtitle: string[];
  logo: Image;
  Herobutton: {
    btnTXT: string;
    PhoneNumber: string;
  };
}

interface FooterItem {
  title: string;
  link: string;
}

interface Section extends Base {
  title: string;
  items: FooterItem[];
}

interface HeroCardArray extends Base {
  title: string;
  slug: Slug;
  cards: HeroCard[];
}

interface HeroCard extends Base {
  title: string;
  backgroundImage: Image;
  logo: Image;
  cardText: string;
  ctaBtnTxt: string;
  ModalText: Block[];
}

interface PageContent extends Base {
  title: string;
  slug: Slug;
  hero: Hero;
  Menulogo: Image;
  MenuBackground: Image;
  mainContent: Content[];
  portableTextContent: PortableTextCard[];
  ImageGallery: GalleryImages;
}

interface contentList extends Base {
  title: string;
  slug: Slug;
  header: string;
  SectionDescription: string;
  contentList: HeroCardArray[];
}

interface Rule {
  required: () => Rule;
}
interface FooterV2 extends Base {
  title: string;
  slug: Slug;
  Address: Address;
  CompanyName: string;
  PhoneNumber: string;
  backgroundImageUrl: string;
  Email: string;
  logoUrl: string;
}

interface Address {
  StreetAddress: string;
  City: string;
  State: string;
  Zipcode: number;
}

interface PortableTextCard extends Base {
  title: string;
  slug: Slug;
  mainText: Block[];
  backgroundImageUrl: string;
  logo: Image;
  ctaBtnTxt: string;
}
interface GalleryImages extends Base {
  title: string;
  slug: string;
  ImageArray: GalleryImage[];
}

interface GalleryImage {
  image: Image;
  caption: string;
  alt: string;
}

interface Card extends Base {
  title: string;
  backgroundImageUrl: Image;
  logoUrl: Image;
  cardText: string;
}

interface MultiCardContent extends Base {
  title: string;
  slug: Slug;
  header: string;
  SectionDescription: string;
  type: "sm" | "md" | "lg";
  cards: Card[];
}

interface Address {
  StreetAddress: string;
  City: string;
  State: string;
  Zipcode: number;
}

interface BusinessInfo extends Base {
  slug: Slug;
  Address: Address;
  CompanyName: string;
  PhoneNumber: string;
  Email: string;
  logo: Image;
}

interface Footer extends Base {
  title: string;
  slug: Slug;
  logo: string;
  backgroundImageUrl: string;
  businessDetails: BusinessInfo;
}

interface Testimonials extends Base {
  name: string;
  slug: Slug;
  clientImage: WebImage;
  content: Content;
}
interface SingleleTextCard extends Base {
  title: string;
  slug: Slug;
  mainText: Block;
  backgroundImageUrl: Image;
  logoUrl: Image;
}
interface testimonialCard extends Base {
  clientName: string;
  clientImage: WebImage;
  content: string;
}
