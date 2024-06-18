import { RiMore2Fill } from "@remixicon/react";

// interface DataTableProps<T> {
//   data: T[];
// }

const products = [
  {
    name: "Probleem'n",
    size: "80x80",
    category: "Eikenhout",
    price: "9.99",
  },
  {
    name: "Probleem'n",
    size: "80x80",
    category: "Eikenhout",
    price: "9.99",
  },
  {
    name: "Probleem'n",
    size: "80x80",
    category: "Eikenhout",
    price: "9.99",
  },
  {
    name: "Probleem'n",
    size: "80x80",
    category: "Eikenhout",
    price: "9.99",
  },
  // More people...
];

const labels = ["Category", "Description"];

const DataTable = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="sm:flex sm:items-center"></div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-white/50">
                <thead>
                  <tr>
                    {labels.map((label) => (
                      <th
                        key={label}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold dark:text-white"
                      >
                        {label}
                      </th>
                    ))}

                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {data.map((data: any) => (
                    <tr key={data.name}>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium dark:text-white sm:pl-4">
                        {data.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 pl-4 text-sm dark:text-white">
                        {data.description}
                      </td>

                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button>
                          <RiMore2Fill className="w-5 h-5 text-white" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
