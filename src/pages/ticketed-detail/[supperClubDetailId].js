import React from "react";
import TickedDetailsComponents from "../../components/TickedDetailsComponents";


const SupperClubDetail = (props) => {
    const getSupperClubDetailId = props?.params?.supperClubDetailId;

    return (
        <React.Fragment>
          {getSupperClubDetailId && <TickedDetailsComponents id={getSupperClubDetailId}/>}
        </React.Fragment>
      );

 
};
export default SupperClubDetail;
