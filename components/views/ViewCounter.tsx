import type { NextPage } from "next";
import useSWR from "swr";

import fetcher from "utils/helper";

const ViewCounter: NextPage<Slug> = ({ slug, method }) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, (url: string) =>
    fetcher(url, { method }),
  );
  const views = Number(data?.total);

  return (
    <span className="flex items-center justify-end">
      {views.toLocaleString()}
      {" views"}
    </span>
  );
};

export default ViewCounter;
