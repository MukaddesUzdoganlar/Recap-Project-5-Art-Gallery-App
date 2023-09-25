import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetail({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const piece = pieces.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      slug={piece.slug}
      artist={piece.artist}
      title={piece.name}
      year={piece.year}
      genre={piece.genre}
      image={piece.imageSource}
    />
  );
}
