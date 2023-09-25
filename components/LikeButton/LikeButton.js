import { useState } from "react";
import PropTypes from "prop-types";

LikeButton.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default function LikeButton({ size = 48, color = "#ff82a2" }) {
  const [liked, setLiked] = useState(false);

  const buttonStyle = {
    width: `${size}px`,
    heigth: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  function handleLiked() {
    setLiked((prev) => !prev);
  }

  return (
    <span style={buttonStyle} onClick={handleLiked}>
      {liked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          stroke={color}
          viewBox="0 0 24 24"
        >
          <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          stroke={color}
          viewBox="0 0 24 24"
        >
          <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
        </svg>
      )}
    </span>
  );
}
