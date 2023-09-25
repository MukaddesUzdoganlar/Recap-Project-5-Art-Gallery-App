import Image from "next/image";

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default function Spotlight({ pieces }) {
  const randomElement = getRandomElement(pieces);
  const randomImageUrl = randomElement.imageSource;

  return (
    <>
      <Image
        src={randomImageUrl}
        width={500}
        height={500}
        alt={randomElement.name}
      />
      <p>{randomElement.artist}</p>
    </>
  );
}
