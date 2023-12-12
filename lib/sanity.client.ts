import { createClient } from "next-sanity";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-11";
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ypheoxe4"; // Replace 'defaultProjectIdValue' with your desired default value //process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
export const dataset = "production";

export const useCdn = false;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
