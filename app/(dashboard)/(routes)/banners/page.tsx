import prismadb from "@/lib/prismadb";
import CategoriesClient from "./components/client";

const ProductsPage = async () => {
  const categories = await prismadb.category.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main>
      <CategoriesClient data={categories} />
    </main>
  );
};

export default ProductsPage;
