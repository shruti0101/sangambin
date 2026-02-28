import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "0k708dpm",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
