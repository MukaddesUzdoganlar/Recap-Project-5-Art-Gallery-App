import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Image from "next/image";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <section>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            slug={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            isFavorite={
              artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                ?.isFavorite
            }
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </ul>
    </section>
  );
}
