import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) return <div>Fail Loading...</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} data={data} />
        <p>Art</p>
      </Layout>
    </>
  );
}
