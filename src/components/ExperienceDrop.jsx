import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BoxWrapper = styled(Box)({
    '.choose-seat':{
        display: 'flex',
        placeContent: 'space-between',
        marginBottom: '25px'
    },
    '.choose-seat-text':{
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '19px',
        color: '#080B0E',
        marginBottom: '0px'
    },
    '.regular-seat':{
        display: 'flex',
        placeContent: 'space-between',
        marginBottom: '30px',
        padding:'0px 0.5rem'
    },
    '.r-seat-text':{
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#080B0E',
        marginBottom: '8px'
    },
    '.r-seat-rate':{
        fontFamily: 'ProximaNovaA-Regular',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '17px',
        color: '#080B0E'
    },
    '.r-seat-money':{
        fontWeight:700
    },
    '.input-div':{
        placeContent: 'flex-start',
        justifyContent: 'flex-end',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: '100%'
    },
    ".left-btn": {
        width: '24px',
        height: '24px',
        borderRadius: '0px',
        color: '#222222',
        border: '0.25px solid #222222',
        backgroundColor:'transparent',
        marginRight:'5px'
    },
    ".right-btn": {
        width: '24px',
        height: '24px',
        borderRadius: '0px',
        color: '#FBFBFB',
        border: '0.25px solid #222222',
        backgroundColor:'#222222',
        marginLeft:'5px'
    },
    '.s-left':{
        fontFamily: 'Proxima Nova Alt',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '12px',
        lineHeight: '15px',
        color: '#080B0E',
        display: 'block',
        textAlign: 'right',
        marginTop: '8px'
    },
    '.seat-hr':{
        margin:'20px 0px',
        color: 'inherit',
        border: '0',
        borderTop: '1px solid',
        opacity: '0.25'
    },
    '.no-seat':{
        background: '#BDBDBD',
        padding: '8px 0px',
        textAlign:'center',
        marginTop:'10px'
    },
});
const ExperienceDrop = ({toggleClose}) => {
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [numberOfTabels, setNumberOfTabels] = useState(1);
    const disabledStyle = {
        opacity: 0.5,
    };
   
  const handleDecrement = () => {
    if (numberOfSeats > 0) {
      setNumberOfSeats(numberOfSeats - 1);
    }
  };

  const handleIncrement = () => {
    if (numberOfSeats < 4) {
      setNumberOfSeats(numberOfSeats + 1);
    }
  };

  const handleSeatIncreament = () => {
    if (numberOfTabels < 1) {
      setNumberOfTabels(numberOfTabels + 1);
    }
  };
  const handleSeatDecrement = () => {
    if (numberOfTabels > 0) {
      setNumberOfTabels(numberOfTabels - 1);
    }
  };
  return (
    <React.Fragment>
      <BoxWrapper>
        <Box>
          <Box className="choose-seat">
            <div className="choose-seat-text">Choose Seating option</div>
            <KeyboardArrowDownIcon className="seat-down" onClick={toggleClose}/>
          </Box>
          <Box className="regular-seat">
            <div className="r-seat">
              <div className="r-seat-text">Regular Seating</div>
              <span className="r-seat-rate">
                <b className="r-seat-money">₹ 2,500</b>/ diner
              </span>
            </div>
            <div>
              <div className="input-div">
                <RemoveIcon
                  className="left-btn"
                  onClick={handleDecrement}
                  style={numberOfSeats === 0 ? disabledStyle : {}}
                  disabled={numberOfSeats === 0}
                />
                <Typography className="number-ans">{numberOfSeats}</Typography>
                <AddIcon
                  style={numberOfSeats === 4 ? disabledStyle : {}}
                  className="right-btn"
                  onClick={handleIncrement}
                  disabled={numberOfSeats === 4}
                />
              </div>
              <span className="s-left">4 seats left</span>
            </div>
          </Box>
          <hr className="seat-hr" />
          <Box className="regular-seat">
            <div className="r-seat">
              <div className="r-seat-text">Chefs Table</div>
              <span className="r-seat-rate">
                <b className="r-seat-money">₹ 4,500</b>/ diner
              </span>
                        </div>
                        <div>
                            <div className="input-div">
                                <RemoveIcon
                                    className="left-btn"
                                    onClick={handleSeatDecrement}
                                    style={numberOfTabels === 0 ? disabledStyle : {}}
                                    disabled={numberOfTabels === 0}
                                />
                                <Typography className="number-ans">{numberOfTabels}</Typography>
                                <AddIcon
                                    className="right-btn"
                                    onClick={handleSeatIncreament}
                                    style={numberOfTabels === 1 ? disabledStyle : {}}
                                    disabled={numberOfTabels === 1}
                                />
                            </div>
                            <span className="s-left">seats full</span>
                        </div>
                    </Box>
                </Box>{" "}
            </BoxWrapper>{" "}
        </React.Fragment>
    );
};
export default ExperienceDrop;
