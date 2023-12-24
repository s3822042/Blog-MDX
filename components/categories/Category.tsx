import Link from "next/link";

import { slugify } from "utils/helper";

const Category = ({ text }: any) => {
  const formattedText = slugify(text);
  return (
    <Link href={`/category/${formattedText}`} legacyBehavior>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text.split(" ").join("-")}
      </a>
    </Link>
  );
};

export default Category;
