import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function Slide({ asset, alt }) {
  return (
    <Image
      src={urlForImage(asset).width(2000).url()}
      alt={alt}
      height="50%"
      width="100%"
      layout="responsive"
    />
  );
}
