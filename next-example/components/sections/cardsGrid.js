import Title from "../title";
import Card from "../card";
import Section from "../section";

export default function CardsGrid({ heading, cards }) {
  return (
    <Section fullHeight>
      <Title>{heading}</Title>
      <div className="grid gap-6 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        {cards
          ? cards.map((card) => {
              {
                return (
                  <Card
                    key={card._key}
                    asset={card.asset}
                    alt={card.alt}
                    heading={card.heading}
                    content={card.content}
                  />
                );
              }
            })
          : null}
      </div>
    </Section>
  );
}
