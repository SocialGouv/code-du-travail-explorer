import { createElement } from "react";
import unified from "unified";
import markdownParser from "remark-parse";
import remark2rehype from "remark-rehype";
import rehype2react from "rehype-react";
import raw from "rehype-raw";

const Mdx = ({ markdown, components = {} }) => {
  // @lionelb: we wrapped the <Content /> tag with a div to avoid have it wrapped with a paragraph
  const wrappedMarkdown = markdown.replace(
    /(<Content [^>]+><\/Content>)/,
    "<div>$1</div>"
  );
  return unified()
    .use(markdownParser)
    .use(remark2rehype, { allowDangerousHTML: true })
    .use(raw)
    .use(rehype2react, {
      createElement,
      components,
    })
    .processSync(wrappedMarkdown).contents;
};

export default Mdx;
