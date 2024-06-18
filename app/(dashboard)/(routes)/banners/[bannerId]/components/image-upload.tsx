"use client";

import Button from "@/components/ui/button";
import { RiDeleteBinFill, RiImageAddFill } from "@remixicon/react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

const ImageUpload = () => {
  const [resource, setResource] = useState();

  const handleUpload = (result: any) => {
    setResource(result.info.secure_url);
  };
  console.log(resource);

  return (
    <div>
      {resource && (
        <Image
          src={resource || ""}
          width={200}
          height={200}
          alt="Upload image"
          className="rounded-md mb-4"
        />
      )}
      <CldUploadWidget
        uploadPreset="hcyfy51l"
        onSuccess={(result) => {
          handleUpload(result);
        }}
      >
        {({ open }) => {
          return (
            <Button
              variant="default"
              size="sm"
              type="button"
              onClick={() => open()}
            >
              <RiImageAddFill className="h-5 w-5" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
