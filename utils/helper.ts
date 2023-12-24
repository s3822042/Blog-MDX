const SITE_URL = "https://ciara-blog.netlify.app/";

const show_per_page = 10;

export function slugify(title: any) {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export default async function fetcher<JSON = any>(
  url: RequestInfo,
  options?: RequestInit,
): Promise<JSON> {
  const res = await fetch(url, options);
  return res.json();
}

export function pageCount(number: number) {
  return Math.ceil(number / show_per_page);
}
