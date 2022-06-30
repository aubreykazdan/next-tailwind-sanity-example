import { urlForImage } from "../../lib/sanity";
import Image from "next/image";
import Section from "../section";
import Title from "../title";

export default function EventsList({ events, title }) {
  const turnoverTime = new Date();
  const currentTime = new Date().getHours();
  turnoverTime.setHours(currentTime + 8);

  function DateString({ start, end }) {
    return (
      <div>
        {start === end ? (
          <h4 className="mb-4 text-lg text-gray-500">{start}</h4>
        ) : (
          <h4 className="mb-4 text-lg text-gray-500">
            {start} to {end}
          </h4>
        )}
        <div></div>
      </div>
    );
  }

  return (
    <Section>
      <Title>{title}</Title>
      {events &&
        events
          // .filter((event) => new Date(event.endDate) >= new Date())
          .map((event) => {
            const {
              _id,
              image,
              alt,
              heading,
              subtitle,
              ageLimit,
              startDate,
              endDate,
              location,
            } = event;

            return (
              <div key={_id} className="lg:grid grid-cols-2 my-8">
                {image && (
                  <Image
                    width={1000}
                    height={500}
                    alt={alt}
                    src={urlForImage(image).height(1000).width(2000).url()}
                  />
                )}

                <div className="text-left font-bold p-6 space-y-4">
                  <div className="flex justify-start">
                    <div className="flex flex-col">
                      {startDate && (
                        <DateString
                          start={new Date(startDate).toDateString()}
                          end={new Date(endDate).toDateString()}
                        />
                      )}
                      <h1 className="text-2xl font-bold ">{heading}</h1>
                      <h2 className="text-xl">{subtitle}</h2>
                      <h3>{location}</h3>
                      <p>{ageLimit}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </Section>
  );
}
