import React from "react";
import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import chefIcon from "./../assets/images/chefIcon.png";
import sidual from "./../assets/images/sidual.png";
import tag from './../assets/images/tag.png';
// import CalenderIcon from "./../Assets/img/CalenderIcon.png"
// import BillIcon from "./../Assets/img/BillIcon.png"



const BoxWrapper = styled(Box)(() => ({
    ".card-sub-box-2": {
        padding: "20px 16px",
        background: '#fff',
        boxShadow: "0px 16.3378px 20.4223px rgba(0, 0, 0, 0.06)"
    },
    '.main-title': {
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "24px",
        paddingBottom: '16px'
    },
    '.card-img': {
        width: '100%'
    },
    '.comman-card-text': {
        display: "flex",
        alignItems: "center",
        fontSize: '16px',
        fontWeight: 300,
        paddingBottom: "13px"
    },
    '.icon': {
        paddingRight: '15px'
    },
    '.payment-text': {
        fontWeight: 500,
        paddingRight: '8px',
        display: "flex",
        alignItems: "center !important",
    }

}))
const FoodDetail = ({ image }) => {
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="card-main-box">
                    <Box className="card-sub-box-1">
                        <img
                            className="card-img"
                            src={image}
                            alt="food-details"
                        />
                    </Box>
                    <Box className="card-sub-box-2">
                        <Typography className="main-title"> The Big Fat Parsi Blowout</Typography>
                        <Typography className="comman-card-text"> <img src={chefIcon} alt="img" className="icon" /> bChef Anna Miocher</Typography>
                        <Typography className="comman-card-text"> <img src={sidual} alt="img" className="icon" /> April 9 | 7.30 PM - 10 PM</Typography>
                        <Typography className="comman-card-text"> <img src={tag} alt="img" className="icon" /> <span className="payment-text">₹2500</span>per diner</Typography>
                    </Box>
                </Box>
            </BoxWrapper>
        </React.Fragment>
    )
}
export default FoodDetail;