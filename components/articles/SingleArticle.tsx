import Image from "next/image";

export default function SingleArticle({
  author,
  image,
  categories,
  title,
  children,
}: any) {
  return (
    <div className="px-4 py-24">
      <div className="mx-auto max-w-[60%]">
        <div className="flex flex-col items-center justify-center">
          <p className="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-white">
            {categories[0].title}
          </p>
          <h1 className="mb-10 mt-2 block text-center text-6xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h1>
          <br />
          <Image
            className="mx-auto w-full rounded-xl object-cover md:h-48 lg:h-60"
            src={image}
            width={720}
            height={400}
            alt="blog"
          />
          <hr />
          <br />

          <article className="mx-autotext-gray-500 prose-md prose prose-indigo py-24 lg:prose-lg dark:text-white">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
