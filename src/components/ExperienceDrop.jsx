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
    const [numberOfDenner, setNumberOfDenner] = useState(1);
    const [numberOfSeat, setNumberOfSeat] = useState(1);
    const [seat, setSeat] = useState(1);
    const disabledStyle = {
        opacity: 0.5,
    };
    const handleForDecrement = () => {
        if (seat > 0) {
            setSeat(seat - 1);
        }
    };

    const handleForIncrement = () => {
        if (seat < 4) {
            setSeat(seat + 1);
        }
    };
    const handleDecrement = () => {
        if (numberOfDenner > 0) {
            setNumberOfDenner(numberOfDenner - 1);
        }
    };

    const handleIncrement = () => {
        if (numberOfDenner < 4) {
            setNumberOfDenner(numberOfDenner + 1);
        }
    };

    const handleSeatIncreament = () => {
        if (numberOfSeat < 1) {
            setNumberOfSeat(numberOfSeat + 1);
        }
    };
    const handleSeatDecrement = () => {
        if (numberOfSeat > 0) {
            setNumberOfSeat(numberOfSeat - 1);
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
                                    style={numberOfDenner === 0 ? disabledStyle : {}}
                                    disabled={numberOfDenner === 0}
                                />
                                <Typography className="number-ans">{numberOfDenner}</Typography>
                                <AddIcon
                                    style={numberOfDenner === 4 ? disabledStyle : {}}
                                    className="right-btn"
                                    onClick={handleIncrement}
                                    disabled={numberOfDenner === 4}
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
                                    style={numberOfSeat === 0 ? disabledStyle : {}}
                                    disabled={numberOfSeat === 0}
                                />
                                <Typography className="number-ans">{numberOfSeat}</Typography>
                                <AddIcon
                                    className="right-btn"
                                    onClick={handleSeatIncreament}
                                    style={numberOfSeat === 1 ? disabledStyle : {}}
                                    disabled={numberOfSeat === 1}
                                />
                            </div>
                            <span className="s-left">seats full</span>
                        </div>
                    </Box>
                    <hr className="seat-hr" />
                    <Box>
                        <Box className='regular-seat'>
                            <div className="r-seat">
                                <div className="r-seat-text">No of Seats</div>
                                <span className="r-seat-rate"><b className='r-seat-money'>₹ 2,500</b>/ diner</span>
                            </div>
                            <div>
                                <div className="input-div">
                                    <RemoveIcon
                                        className="left-btn"
                                        onClick={handleForDecrement}
                                        style={seat === 0 ? disabledStyle : {}}
                                        disabled={seat === 0}
                                    />
                                    <Typography className="number-ans">{seat}</Typography>
                                    <AddIcon
                                        style={seat === 4 ? disabledStyle : {}}
                                        className="right-btn"
                                        onClick={handleForIncrement}
                                        disabled={seat === 4}
                                    />
                                </div>
                                <span className="s-left">4 seats left</span>
                            </div>
                        </Box>
                    </Box>
                </Box>{" "}
            </BoxWrapper>{" "}
        </React.Fragment>
    );
};
export default ExperienceDrop;
