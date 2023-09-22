import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import Image from "next/image";

export default function ArtPieces({ artPieces }) {
  console.log(artPieces[0].name);
  return (
    <section>
      <h1>Art Pieces</h1>
      <ul>
        {artPieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            img={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
        ))}
      </ul>
    </section>
  );
}
