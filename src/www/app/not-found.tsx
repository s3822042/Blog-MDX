import Link from "next/link"

export default function NotFoundPage() {
  return (
    <>
      <div className="md:mt-24 md:space-x-6 flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="leading-9 md:px-6 text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 leading-normal text-xl font-bold md:text-2xl">
            Sorry we could not find this page.
          </p>
          <p className="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/">
            <button className="focus:shadow-outline-blue px-4 py-2 leading-5 inline rounded-lg border border-transparent bg-blue-600 text-sm font-medium text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
