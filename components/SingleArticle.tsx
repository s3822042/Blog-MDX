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
          <article className="max-w-2xl px-6 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
            <div className="pt-12 border-t dark:border-gray-700">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <Image
                  src={author.image}
                  alt="author"
                  width={725}
                  height={725}
                  style={{
                    width: "96px",
                    height: "96px",
                  }}
                  className="self-center flex-shrink-0 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold">{author.name}</h4>
                  <p className="dark:text-gray-400">
                    Bs. in Computer Science, majoring in Software Engineering.
                    Interest topics: Deep Learning in NLP and Computer Vision.
                    Reinforcement Learning.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
