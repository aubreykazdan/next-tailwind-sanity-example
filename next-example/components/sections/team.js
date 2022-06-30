import Card from "../card";
import Title from "../title";
import Tagline from "../tagline";
import Section from "../section";
import BlockContent from "@sanity/block-content-to-react";

export default function Team({ heading, excerpt, cards }) {
  return (
    <Section className="text-left">
      <div className="md:flex my-10 container mx-auto">
        <div className="md:w-4/5">
          <Title>{heading}</Title>
          <div className="text-xl font-extralight w-4/5">
            <BlockContent blocks={excerpt} />
          </div>
          <Tagline children="" />
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 md:ml-6">
          {cards &&
            cards.map((card) => {
              {
                return (
                  <Card
                    key={card._key}
                    asset={card.asset}
                    alt={card.alt}
                    heading={card.heading}
                    excerpt={card.excerpt}
                    content={card.content}
                  />
                );
              }
            })}
        </div>
      </div>
    </Section>
  );
}
