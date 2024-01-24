import { getWordPressProps, WordPressTemplate } from "@faustwp/core";

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export async function getStaticProps(ctx) {
  await new Promise((r) => setTimeout(r, 60));
  return getWordPressProps({ ctx, revalidate: 5 });
}
