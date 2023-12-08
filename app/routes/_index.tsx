import { PrefetchPageLinks, useFetcher } from "@remix-run/react";
import type { loader as resourceLoader } from "./resource";

export default function Index() {
  let fetcher = useFetcher<typeof resourceLoader>();

  return (
    <>
      <PrefetchPageLinks page="/resource" />
      <button type="button" onClick={() => fetcher.load("/resource")}>
        Load Data
      </button>
      {fetcher.data && <DisplayData data={fetcher.data} />}
    </>
  );
}

function DisplayData({ data }: { data: { message: string } }) {
  return <p>{data.message}</p>;
}
