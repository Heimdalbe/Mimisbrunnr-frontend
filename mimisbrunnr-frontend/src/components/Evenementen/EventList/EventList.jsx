import EventCard from "../EventCard/EventCard";
import "./EventList.css";

// TODO: hintende animatie dat je naar rechts kan swipen?

const EventList = ({ events, limit }) => {

  return (
    <div className={"carousel-wrapper" + (limit ? " carousel-mobile" : "")}>
      <div className="carousel">
        {events?.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            banner={event.banner}
            start={event.start}
            end={event.end}
            name={event.name}
            category={event.category}
          />
        ))}
        <div className="carousel-end-spacer" />
      </div>
    </div>
  );
};

export default EventList;
