import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <Image src={image} width={150} height={200} alt={title} />
      <article>
        <h2>{title}</h2>
        <p>Painted by: {artist}</p>
      </article>
    </li>
  );
}
