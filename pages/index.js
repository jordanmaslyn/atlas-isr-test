import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { PHASE_PRODUCTION_BUILD } from "next/constants";

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export async function getStaticProps(ctx) {
  if (
    process.env.ATLAS_METADATA_ENV_NAME !== undefined &&
    process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD
  ) {
    console.log("sleeping... " + Date.now());
    await new Promise((r) => setTimeout(r, 60));
    console.log("finished sleeping; revalidating... " + Date.now());
  }

  return getWordPressProps({ ctx, revalidate: 5 });
}
