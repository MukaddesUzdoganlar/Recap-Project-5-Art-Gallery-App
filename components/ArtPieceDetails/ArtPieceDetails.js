import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPieceDetails({ image, title, artist, genre, year }) {
  return (
    <section>
      <Image src={image} alt={title} width={500} height={500}></Image>
      <h1>{title}</h1>
      <h4>Artist : {artist}</h4>
      <p>Year : {year}</p>
      <p>Genre : {genre}</p>
      <Link href="/ArtPieces/artPieces">Back to all art pieces</Link>
    </section>
  );
}
