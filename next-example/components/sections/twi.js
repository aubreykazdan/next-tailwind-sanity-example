import Title from "../title";
import BlockContent from "@sanity/block-content-to-react";
import Section from "../section";
import Slide from "../slide";

export default function Text({ heading, content, tagline, image, alt }) {
  return (
    <Section className="mb-10">
      <div className="flex flex-col items-center text-center">
        <Title>{heading}</Title>
        {tagline && <span className="pt-4">{tagline}</span>}
        {content && <BlockContent blocks={content} />}
      </div>
      {image && <Slide asset={image} alt={alt} />}
    </Section>
  );
}
