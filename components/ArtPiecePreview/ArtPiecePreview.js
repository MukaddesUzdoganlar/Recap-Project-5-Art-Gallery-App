import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <li>
      <Image src={image} width={150} height={200} alt={title} />
      <article>
        <h2>{title}</h2>
        <p>Painted by: {artist}</p>
        <Link href={`/ArtPieces/art-pieces/${slug}`}>Show details</Link>
      </article>
    </li>
  );
}
