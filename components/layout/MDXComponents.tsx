import Image from "next/image";
import Link from "next/link";

import Pre from "components/Pre";

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  a: CustomLink,
  pre: Pre,
  h2: (props: any) => <h2 {...props} className="dark:text-white" />,
};

export default MDXComponents;
