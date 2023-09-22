import Image from "next/image";

export default function ArtPiecePreview({ img, name, artist }) {
  return (
    <li>
      <Image src={img} width={150} height={200} alt={name} />
      <article>
        <h2>{name}</h2>
        <p>Painted by: {artist}</p>
      </article>
    </li>
  );
}
