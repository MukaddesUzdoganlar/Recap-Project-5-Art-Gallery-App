import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Image from "next/image";

export default function ArtPieces({ pieces }) {
  return (
    <section>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          />
        ))}
      </ul>
    </section>
  );
}
