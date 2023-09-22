import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/ArtPieces/spotlight">Spotlight</Link>
        </li>
        <li>
          <Link href="/ArtPieces/artPieces">Pieces</Link>
        </li>
        <li>
          <Link href="/ArtPieces/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}
