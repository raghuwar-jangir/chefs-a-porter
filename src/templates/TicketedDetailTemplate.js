import React from "react";
import TickedDetailsComponents from "../components/TickedDetailsComponents";

const TicketedDetailTemplate = (props) => { 
  const { id } = props.pageContext
  

  return (
    <React.Fragment>
      {id && <TickedDetailsComponents id={id}/>}
    </React.Fragment>
  );
};

export default TicketedDetailTemplate;