import { ImgHTMLAttributes } from "react";

export const Image = ({
  src,
  alt,
  className,
  onClick,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const fallbackSrc = "../images/default-fallback-image.png";
    if (e.currentTarget.src !== fallbackSrc) {
      e.currentTarget.src = fallbackSrc;
    } else {
      console.error(
        "Failed to load fallback image as well:",
        e.currentTarget.src
      );
    }
  };

  return (
    <img
      onClick={onClick}
      src={src}
      loading="lazy"
      alt={alt}
      className={className}
      style={{ animation: "skeleton-loading 1s linear infinite alternate" }}
      onError={handleError}
      {...rest}
    />
  );
};
