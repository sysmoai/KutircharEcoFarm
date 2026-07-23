import logoIconWebp from "../../imports/image.webp";
import logoIconPng from "../../imports/image.png";

interface LogoPictureProps {
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  webpSrc?: string;
  pngSrc?: string;
}

export function LogoPicture({
  alt,
  className,
  style,
  webpSrc = logoIconWebp,
  pngSrc = logoIconPng,
}: LogoPictureProps) {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={pngSrc}
        alt={alt}
        className={className}
        style={style}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}