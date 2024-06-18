"use client";

import DataTable from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import Separator from "@/components/ui/separator";

import { RiAddCircleLine } from "@remixicon/react";
import { useRouter } from "next/navigation";

const CategoriesClient = ({ data }: { data: any }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between items-center">
        <Heading
          title={`Categories (${data.length})`}
          description="Here is an overview of all categories in the webshop"
        />
        <button
          onClick={() => router.push("/banners/new")}
          className="text-white text-sm font-semibold bg-teal-800 h-fit py-2 px-4 rounded-md flex items-center gap-x-1"
        >
          Add new
          <RiAddCircleLine className="w-5 h-5" />
        </button>
      </div>
      <Separator />
      <DataTable data={data} />
    </div>
  );
};

export default CategoriesClient;
