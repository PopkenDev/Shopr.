interface HeadingProps {
  title: string;
  description: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold dark:text-white">{title}</h1>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};
