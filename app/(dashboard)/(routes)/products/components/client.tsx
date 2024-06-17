"use client";

import { Heading } from "@/components/ui/heading";
import Separator from "@/components/ui/separator";

import { RiAddCircleLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

const ProductClient = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading
          title="Products(0)"
          description="Here is an overview of all products in the webshop"
        />
        <button
          onClick={() => router.push("/products/new")}
          className="text-white text-sm font-semibold bg-teal-800 h-fit py-2 px-4 rounded-md flex items-center gap-x-1"
        >
          Add new
          <RiAddCircleLine className="w-5 h-5" />
        </button>
      </div>
      <Separator />
    </div>
  );
};

export default ProductClient;
