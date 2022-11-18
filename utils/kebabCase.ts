import { slug } from "github-slugger";

const kebabCase = (str: any) => slug(str);

export default kebabCase;
