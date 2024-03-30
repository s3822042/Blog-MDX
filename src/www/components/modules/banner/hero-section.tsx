import NextLink from "next/link"

import { ImageContainer } from "@/components/container/image-container"
import { Heading } from "@/components/elements/heading"
import { HeroIllustration } from "@/components/modules/banner/hero-illustration"
import { NewsletterForm } from "@/components/modules/newsletter/newsletter-form"

export function HeroSection() {
  return (
    <div className="container relative mx-auto flex w-full max-w-screen-2xl flex-col items-center px-8 pb-16 pt-20 md:flex-row">
      <div className="mb-8 max-w-lg flex-1 md:mb-0 md:mr-8 md:max-w-full md:text-center">
        <Heading as="h1" size="6xl" className="mb-8 text-left">
          Start here and keep learning!
        </Heading>
        <p className="mb-8 text-left text-base opacity-80 md:mb-6 md:text-lg">
          Stay tuned for informative content that explores different aspects of
          technology, empowering you with new knowledge and insights.
        </p>
        <div className="mt-16">
          <NewsletterForm />
        </div>
      </div>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </div>
  )
}
