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
    const startTime = Date.now();
    console.log("sleeping... ");
    await new Promise((r) => setTimeout(r, 60000));
    console.log(
      "finished sleeping; revalidating... (" +
        (Date.now() - startTime) / 1000 +
        " seconds later)"
    );
  }

  return getWordPressProps({ ctx, revalidate: 5 });
}
