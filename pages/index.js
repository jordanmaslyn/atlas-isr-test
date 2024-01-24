import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { PHASE_PRODUCTION_SERVER } from "next/constants";

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export async function getStaticProps(ctx) {
  console.log(`Next Phase is: ${process.env.NEXT_PHASE}`);
  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_SERVER) {
    await new Promise((r) => setTimeout(r, 60));
  }
  return getWordPressProps({ ctx, revalidate: 5 });
}
