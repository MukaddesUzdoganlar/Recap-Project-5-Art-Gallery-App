import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (URL) => fetch(URL).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>Fail Loading...</div>;
  if (isLoading) return <div>Loading...</div>;

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug ? { slug, isFavorite: !piece.isFavorite } : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  //   function handleSubmitComment(slug, text, date){
  //     const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  //  if (artPiece) {
  //   setArtPiecesInfo(
  //     artPiecesInfo.map((piece) =>
  //     piece.slug === slug ? { slug, comment: [...text, date] } : piece
  //   )
  //  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
