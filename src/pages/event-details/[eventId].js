import React from "react";
import EventsDetailsComponent from "../../components/EventsDetailsComponent";

const EventDetails = (props) => {
    const { eventId } = props;
    
  return (
    <React.Fragment>
      {eventId && <EventsDetailsComponent eventId={eventId}/>}
    </React.Fragment>
  );
};

export default EventDetails;