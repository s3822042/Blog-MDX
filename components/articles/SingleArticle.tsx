import Image from "next/image";

import Comment from "../comments/Comments";

export default function SingleArticle({
  id,
  image,
  categories,
  title,
  children,
}: any) {
  return (
    <div className="px-4 py-24">
      <div className="mx-auto max-w-[60%]">
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-base font-semibold uppercase tracking-wide text-indigo-600 dark:text-white">
            {categories[0].title}
          </p>
          <h1 className="mb-10 mt-2 text-center text-6xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h1>
          <div className="relative mb-10">
            <Image
              className="rounded-xl object-cover"
              src={image}
              width={720}
              height={400}
              alt="blog"
            />
          </div>
          <hr className="my-10 w-16 border-t border-indigo-600 dark:border-white" />
          <article className="prose-md prose prose-indigo mx-auto text-gray-500 lg:prose-lg dark:text-white">
            {children}
          </article>
        </div>
        <div className="mx-12">
          <hr className="mx-6 my-10 w-full border-t border-indigo-600 dark:border-white" />
          <Comment postId={id} />
        </div>
      </div>
    </div>
  );
}
