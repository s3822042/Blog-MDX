const SITE_URL = "http://localhost:3000";

const show_per_page = 10;

export function slugify(title: any) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

export function pageCount(number: number) {
  return Math.ceil(number / show_per_page);
}
