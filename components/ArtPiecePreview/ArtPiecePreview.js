import Image from "next/image";
import Link from "next/link";
import LikeButton from "../LikeButton/FavoriteButton";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <li>
      <Image src={image} width={150} height={200} alt={title} />

      <article>
        <h2>{title}</h2>
        <LikeButton
          size={30}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          slug={slug}
        />
        <p>Painted by: {artist}</p>
        <Link href={`/ArtPieces/art-pieces/${slug}`}>Show details</Link>
      </article>
    </li>
  );
}
