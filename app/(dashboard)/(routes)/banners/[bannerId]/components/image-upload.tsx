"use client";

import Button from "@/components/ui/button";
import { RiDeleteBinFill, RiImageAddFill } from "@remixicon/react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [resource, setResource] = useState();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  console.log(resource);

  return (
    <div>
      {resource == "undefined" && (
        <Image src={resource} width={200} height={200} alt="Uploaded image" />
      )}

      <CldUploadWidget
        uploadPreset="hcyfy51l"
        onSuccess={(result, { widget }) => {
          setResource(result?.info?.secure_url);
          widget.close();
        }}
      >
        {({ open }) => {
          function handleOnClick() {
            setResource(undefined);
            open();
          }
          return (
            <Button
              onClick={handleOnClick}
              variant="default"
              size="sm"
              type="button"
            >
              <RiImageAddFill />
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;
