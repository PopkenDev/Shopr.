"use client";

import { useState } from "react";
import axios from "axios";

import FormInput from "@/components/ui/form-input";
import FormLabel from "@/components/ui/form-label";
import { RiAddCircleLine } from "@remixicon/react";

const productFormInputs = [
  {
    label: "Category name",
    placeholder: "Category name",
    type: "text",
    name: "categoryName",
  },
  {
    label: "Category description",
    placeholder: "Describe your category",
    type: "text",
    name: "categoryDescription",
  },
];

const CategoryForm = () => {
  const [formData, setFormData] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();

    setFormData({
      categoryName: e.target.categoryName.value,
      categoryDescription: e.target.categoryDescription.value,
    });

    try {
      await axios.post("/api/categories", { formData });

      window.location.assign("/categories");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8">
      <div className="grid grid-cols-3 gap-8 mb-8">
        {productFormInputs.map((input) => (
          <div key={input.name} className="flex flex-col">
            <FormLabel label={input.label} name={input.name} />
            <FormInput
              placeholder={input.placeholder}
              type={input.type}
              name={input.name}
            />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="text-white text-sm font-semibold bg-teal-800 hover:bg-teal-900 h-fit py-2 px-4 rounded-md flex items-center gap-x-1 transition"
      >
        <RiAddCircleLine className="w-5 h-5" />
        Add category
      </button>
    </form>
  );
};

export default CategoryForm;
