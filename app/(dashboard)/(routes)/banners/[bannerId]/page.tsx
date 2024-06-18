import { Heading } from "@/components/ui/heading";
import Separator from "@/components/ui/separator";
import BannerForm from "./components/banner-form";
import prismadb from "@/lib/prismadb";

const ProductPage = async ({ params }: { params: { bannerId: string } }) => {
  const banner = await prismadb.banner.findUnique({
    where: {
      id: params.bannerId,
    },
  });

  const title = !banner ? "New banner" : "Edit banner";
  const description = !banner
    ? "Add a new banner here"
    : "Edit the banner here";

  return (
    <main>
      <div className="flex justify-between items-center">
        <Heading title={title} description={description} />
      </div>
      <Separator />
      <BannerForm />
    </main>
  );
};

export default ProductPage;
