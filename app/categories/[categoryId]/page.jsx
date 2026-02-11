import { categories } from "@/Data";
import CategoryClient from "./CategoryClient";

// ✅ Dynamic metadata for each category
export async function generateMetadata({ params }) {
  const { categoryId } = params;

  // find the matching category
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category could not be found.",
    };
  }

  return {
    title: category.metaTitle || category.name,
    description: category.metaDescription || `Explore ${category.name} products.`,
    openGraph: {
      title: category.metaTitle || category.name,
      description: category.metaDescription || `Explore ${category.name} products.`,
      images:
        category.products?.[0]?.image?.[0]?.src
          ? [category.products[0].image[0].src]
          : [],
    },
  };
}

// ✅ Render client component
export default function Page({ params }) {
  return <CategoryClient params={params} />;
}
