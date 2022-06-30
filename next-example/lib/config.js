export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2qljgzuz",
  apiVersion: "v1",
  token: process.env.SANITY_API_TOKEN,
};
