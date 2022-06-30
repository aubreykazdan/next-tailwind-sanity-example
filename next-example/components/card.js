import Image from "next/image";
import { urlForImage } from "../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";

export default function Card({ asset, alt, heading, excerpt, content }) {
  return (
    <div className="flex flex-col justify-center bg-orange-50 min-h-full m-10 md:m-4 border-2 border-black">
      <div className="flex justify-center">
        {asset && (
          <Image
            className="rounded-full"
            src={urlForImage(asset).width(500).url()}
            alt={alt}
            height={25}
            width={25}
            layout="responsive"
          />
        )}
        <div className="text-left w-2/3">
          {heading && <h3 className="text-xl font-bold">{heading}</h3>}
          {excerpt && <span className="">{excerpt}</span>}
          {content && <BlockContent blocks={content} />}
        </div>
      </div>
    </div>
  );
}
