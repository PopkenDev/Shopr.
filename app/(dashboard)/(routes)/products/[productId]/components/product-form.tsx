import FormInput from "@/components/ui/form-input";
import FormLabel from "@/components/ui/form-label";

const productFormInputs = [
  {
    label: "Product name",
    placeholder: "Product name",
    type: "text",
    name: "productName",
    input: "input",
  },
  {
    label: "Category",
    placeholder: "Choose a category",
    type: "N/A",
    name: "category",
    input: "select",
    options: ["Cat. 1", "Cat. 2", "Cat. 3"],
  },
  {
    label: "Size",
    placeholder: "Size",
    type: "N/A",
    name: "productName",
    input: "select",
    options: ["Size. 1", "Size. 2", "Size. 3"],
  },
];

const ProductForm = () => {
  return (
    <form className="mt-8">
      <div className="grid grid-cols-3 gap-8">
        {productFormInputs.map((input) => (
          <div className="flex flex-col">
            <FormLabel label={input.label} name={input.name} />
            {input.input === "input" && (
              <FormInput
                placeholder={input.placeholder}
                type={input.type}
                name={input.name}
              />
            )}
            {input.input === "select" && (
              <select
                name=""
                id=""
                className="w-[252px] h-8 bg-[#222] text-white text-sm px-2 py-1 rounded-md outline-none light-shadow"
              >
                {input.options?.map((option) => (
                  <option value={option} className="bg-orange-500 rounded-md">
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default ProductForm;
