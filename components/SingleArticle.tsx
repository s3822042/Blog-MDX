import Image from "next/image";

export default function SingleArticle({
  author,
  image,
  category,
  title,
  children,
}: any) {
  return (
    <div className="px-4 py-24">
      <div className="max-w-[60%] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase dark:text-white">
            {category}
          </p>
          <h1 className="block mt-2 mb-10 text-6xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h1>
          <br />
          <Image
            className="object-cover w-full mx-auto lg:h-60 md:h-48 rounded-xl"
            src={image}
            width={720}
            height={400}
            alt="blog"
          />
          <hr />
          <br />

          <article className="py-24 prose mx-autotext-gray-500 prose-md prose-indigo lg:prose-lg dark:text-white">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
