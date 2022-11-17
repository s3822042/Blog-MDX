import dynamic from "next/dynamic";
import { siteMetadata } from "utils/constant";

const GiscusComponent = dynamic(
  () => {
    return import("components/comments/Giscus");
  },
  { ssr: false }
);

const Comments = ({ frontMatter }: any) => {
  const comment = siteMetadata?.comment;
  if (!comment || Object.keys(comment).length === 0) return <></>;
  return (
    <div id="comment">
      {siteMetadata.comment && siteMetadata.comment.provider === "giscus" && (
        <GiscusComponent />
      )}
    </div>
  );
};

export default Comments;
