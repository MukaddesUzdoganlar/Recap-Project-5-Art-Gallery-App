import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite
    )
  );

  return <ArtPieces pieces={favorites} onToggleFavorite={onToggleFavorite} />;
}
