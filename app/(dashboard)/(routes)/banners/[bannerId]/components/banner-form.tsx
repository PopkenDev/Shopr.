"use client";

import { useState } from "react";
import axios from "axios";

import FormInput from "@/components/ui/form-input";
import FormLabel from "@/components/ui/form-label";
import { RiAddCircleLine } from "@remixicon/react";
import { Banner } from "@prisma/client";
import ImageUpload from "./image-upload";
import Button from "@/components/ui/button";

const bannerFormInputs = [
  {
    label: "Banner label",
    placeholder: "Banner label",
    type: "text",
    name: "bannerLabel",
  },
];

interface BannerFormProps {
  initialData: Banner | null;
}

const BannerForm: React.FC<BannerFormProps> = ({ initialData }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    bannerLabel: "",
    imageUrl: "",
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();

    setFormData({
      bannerLabel: e.target.bannerLabel.value,
      imageUrl: e.target.imageUrl.value,
    });

    try {
      await axios.post("/api/banners", { formData });

      window.location.assign("/banners");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (url: string) => {
    console.log(url);
  };

  return (
    <form onSubmit={onSubmit} className="mt-8">
      <div className="mb-8">
        <FormLabel label="Banner image" name="imageUrl" />
        <ImageUpload
          value={[]}
          disabled={loading}
          onChange={(url) => handleChange(url)}
          onRemove={() => ""}
        />
      </div>
      <div className="grid grid-cols-3 gap-8 mb-8">
        {bannerFormInputs.map((input) => (
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
      <Button variant="primary" size="sm" type="submit">
        <RiAddCircleLine className="w-5 h-5" />
        {initialData ? "Edit banner" : "Add banner"}
      </Button>
    </form>
  );
};

export default BannerForm;
