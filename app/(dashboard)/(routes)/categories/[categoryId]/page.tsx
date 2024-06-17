import { Heading } from "@/components/ui/heading";
import Separator from "@/components/ui/separator";
import CategoryForm from "./components/category-form";

const ProductPage = () => {
  return (
    <main>
      <div className="flex justify-between items-center">
        <Heading title="New category" description="Add a new category here" />
      </div>
      <Separator />
      <CategoryForm />
    </main>
  );
};

export default ProductPage;
