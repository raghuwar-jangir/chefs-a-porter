import {Box, styled, Typography} from "@mui/material";
import React, {useContext, useState} from "react";
import party from '../assets/images/party.png';
import work from '../assets/images/mdi_bag.png';
import culinary from '../assets/images/culinary.png';
import chef from '../assets/images/cheflogo.png';
import dish from '../assets/images/meal.png';
import glass from '../assets/images/wine-glass.png';
import star from '../assets/images/chef-star.png';
import ReactReadMoreReadLess from "react-read-more-read-less";
import UsersContext from "../context/UsersContext";
import * as _ from "lodash";


const CardChefComponent = ({bgColor}) => {

    const {userData} = useContext(UsersContext);
    const longText = ' From Bangalore to the Culinary Institute of America in New York. He has developed his skills and love for the culinary arts. From Bangalore to the Culinary...';
    const longText2 = 'Host connections at your place and leave the dinner table to us. Select your chef and let them curate an experience worth enjoying...';
    const BoxWrapper = styled(Box)(() => ({
        paddingBottom: '4%',
        ".sub-box-card": {
            display: 'flex',
            alignItems: "center",
            paddingBottom: "8px",
            marginLeft: '16px'
        },
        ".heading": {
            fontFamily: 'Bon Vivant',
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "30px",
            margin: '40px 16px 20px',
            letterSpacing: '0.06em',
            color: '#080B0E'
        },
        ".field-name": {
            fontFamily: 'Bon Vivant',
            fontWeight: '100',
            fontSize: "20px",
            lineHeight: "24px",
            marginLeft: '10px',
            color: '#080B0E'
        },
        ".field-ans": {
            fontWeight: '600',
            fontSize: "20px",
            lineHeight: "24px",
            color: "#080B0E",
            fontFamily: 'ProximaNovaA-Regular',
            marginLeft: '10px'
        },
        ".details": {
            fontFamily: 'Proxima Nova Alt',
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#080B0E",
            padding: '12px 0px 0px 0px',
            marginLeft: '16px'
        },
        '.logo': {
            width: '24px',
            height: '24px',
            objectFit: 'contain',
        },
        '.read-more-less--more': {
            display: 'block',
            fontFamily: 'ProximaNovaA-Regular',
            fontWeight: 700
        },
        '.read-more-less--less': {
            display: 'block',
            fontFamily: 'ProximaNovaA-Regular',
            fontWeight: 700
        },
        "@media (min-width: 1px) and (max-width:768px)": {
            '.details': {
                padding: '12px 16px 0px 0px'
            },
            '.heading': {
                fontSize: "20px",
                lineHeight: "25px",
            },
            '.logo': {
                width: '20px',
                height: '20px'
            },
            '.field-name': {
                fontSize: "16px",
                lineHeight: "19px",
            },
            '.field-ans': {
                fontSize: "16px",
                lineHeight: "19px",
            }
        },
    }))
    return (
        <React.Fragment>
            <BoxWrapper>
                {!_.isEmpty(userData) &&
                    <>
                        <Typography className="heading">About the Chef</Typography>
                        <Box className="sub-box-card">
                            <img className="logo" src={party}/>
                            <Typography className="field-name">Fun facts:</Typography>
                            <Typography className="field-ans">{userData?.chef?.details?.fun_fact}</Typography>
                        </Box>
                        <Box className="sub-box-card">
                            {/* <WorkIcon /> */}
                            <img className="logo" src={work}/>
                            <Typography className="field-name">Worked at:</Typography>
                            <Typography className="field-ans">{userData?.chef?.details?.worked_at}</Typography>
                        </Box>
                        <Box className="sub-box-card">
                            <img className="logo" src={culinary}/>
                            <Typography className="field-name">Culinary School:</Typography>
                            <Typography className="field-ans">{userData?.chef?.details?.culinary_school}</Typography>
                        </Box>
                        <Box className="sub-box-card">
                            <img className="logo" src={chef}/>
                            <Typography className="field-name">Trained under:</Typography>
                            <Typography className="field-ans">{userData?.chef?.details?.trained_under}</Typography>
                        </Box>
                        <Typography className="details">
                            <ReactReadMoreReadLess
                                readMoreStyle={{textDecoration: "underline"}}
                                readLessStyle={{textDecoration: "underline"}}
                                charLimit={125}
                                readMoreText={"Read more"}
                                readLessText={"Read less"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {/*{longText}*/}
                                {userData?.chef?.details?.intro}
                            </ReactReadMoreReadLess>
                        </Typography>
                        <Typography className="heading">What to expect</Typography>
                        <Box className="sub-box-card">
                            <img className="logo" src={dish}/>
                            <Typography className="field-name">Course:</Typography>
                            <Typography className="field-ans">{userData?.course}</Typography>
                        </Box><Box className="sub-box-card">
                        <img className="logo" src={glass}/>
                        <Typography className="field-name">Drinks:</Typography>
                        <Typography className="field-ans">{userData?.drinks}</Typography>
                    </Box><Box className="sub-box-card">
                        <img className="logo" src={star}/>
                        <Typography className="field-name">Meal Highlight:</Typography>
                        <Typography className="field-ans">{userData?.mealhighlight}</Typography>
                    </Box>
                        <Typography className="details">
                            <ReactReadMoreReadLess
                                readMoreStyle={{textDecoration: "underline", fontWeight: 'bold'}}
                                readLessStyle={{textDecoration: "underline", fontWeight: 'bold'}}
                                charLimit={125}
                                readMoreText={"Read more"}
                                readLessText={"Read less"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                                {longText2}
                            </ReactReadMoreReadLess>
                        </Typography>
                    </>
                }
            </BoxWrapper>
        </React.Fragment>
    )
}
export default CardChefComponent
