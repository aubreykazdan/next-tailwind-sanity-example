import TimelineEvent from "../timelineEvent";
import Title from "../title";

export default function Timeline({ heading, events }) {
  return (
    <section className="container mx-auto">
      <div className="text-center">
        <Title>{heading}</Title>
      </div>
      <div className="max-w-2xl mx-auto space-y-10">
        {events
          ? events.map((event) => {
              {
                return (
                  <TimelineEvent
                    key={event._key}
                    title={event.title}
                    date={event.date}
                    content={event.content}
                    completed={event.completed}
                  />
                );
              }
            })
          : null}
      </div>
    </section>
  );
}
