import React from "react";
import EventsDetailsComponent from "../components/EventsDetailsComponent";

const EventsTemplate = (props) => { 
  console.log('props', props)
  const { id } = props.pageContext
  const eventId = id
  return (
    <React.Fragment>
      {eventId && <EventsDetailsComponent eventId={eventId}/>}
    </React.Fragment>
  );
};

export default EventsTemplate;