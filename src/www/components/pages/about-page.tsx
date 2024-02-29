import React from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/elements/icons"

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="mb-auto">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              About me
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8">
              <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                {siteConfig.author.name}
              </h3>
              <div className="text-gray-500 dark:text-gray-400">
                {siteConfig.author.jobTitle}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {siteConfig.author.company}
              </div>
              <div className="flex space-x-3 pt-6">
                <Link
                  href="mailto:paulluanvothanh@gmail.com"
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                >
                  <Icons.mail className="size-8 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
                </Link>
                <Link
                  href={siteConfig.links.github}
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                >
                  <Icons.gitHub className="size-8 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
                </Link>
                <Link
                  href={siteConfig.links.linkedin}
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                >
                  <Icons.linkedin className="size-8 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
                </Link>
                <Link
                  href={siteConfig.links.twitter}
                  className="text-sm text-gray-500 transition hover:text-gray-600"
                >
                  <Icons.twitter className="size-8 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400" />
                </Link>
              </div>
            </div>
            <div className="dark:prose-dark prose max-w-none py-8 xl:col-span-2">
              <p>
                I am Vo Thanh Luan, a highly skilled and knowledgeable
                individual with a strong background in computer science,
                particularly in the field of software engineering. Having earned
                my bachelor degree in this field, I have developed a deep
                understanding of how to design and build robust, scalable, and
                efficient software systems.
              </p>
              <p>
                My key area of interest lies in deep learning, specifically in
                natural language processing (NLP) and computer vision. I am
                constantly seeking opportunities to learn more about these
                cutting-edge technologies and am always looking for ways to
                apply them to real-world problems. I am particularly fascinated
                by the potential of deep learning to transform the way we
                interact with computers and other digital devices. I am
                continually exploring new ways to harness the power of machine
                learning algorithms to enhance the performance of these systems.
              </p>
              <p>
                Additionally, I am intrigued by reinforcement learning, a type
                of machine learning that focuses on training algorithms to make
                decisions based on a reward system. I firmly believe that this
                approach holds great potential for a wide range of applications,
                from gaming to robotics. I am actively searching for ways to
                apply these techniques to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
