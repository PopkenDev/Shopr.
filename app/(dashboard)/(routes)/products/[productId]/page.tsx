import { Heading } from "@/components/ui/heading";
import Separator from "@/components/ui/separator";
import ProductForm from "./components/product-form";

const ProductPage = () => {
  return (
    <main>
      <div className="flex justify-between items-center">
        <Heading title="New product" description="Add a new product here" />
      </div>
      <Separator />
      <ProductForm />
    </main>
  );
};

export default ProductPage;
