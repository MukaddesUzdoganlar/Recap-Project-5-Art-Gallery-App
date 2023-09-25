import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import CommentForm from "../CommentForm/CommentForm";

const StyledBackButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
  border-radius: 6px;
  color: #3d3d3d;
  background: #fff;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  text-decoration: none;

  &:hover {
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1),
      0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
    outline: 0;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 0.5rem;
`;

export default function ArtPieceDetails({ image, title, artist, genre, year }) {
  return (
    <StyledSection>
      <Image src={image} alt={title} width={500} height={500}></Image>
      <h1>{title}</h1>
      <h4>Artist : {artist}</h4>
      <p>Year : {year}</p>
      <p>Genre : {genre}</p>
      <StyledBackButton href="/ArtPieces/artPieces">
        ⬅️ to all art pieces
      </StyledBackButton>
      <CommentForm />
    </StyledSection>
  );
}
