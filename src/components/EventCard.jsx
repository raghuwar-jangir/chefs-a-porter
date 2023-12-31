import React, {useContext, useState} from "react";
import {
    Box,
    styled,
    Typography,
} from "@mui/material";
import gMeal from '../assets/images/meal-gold.png';
import gStar from '../assets/images/star-gold.png';
import gGlass from '../assets/images/wine-glass-gold.png';
import party from '../assets/images/party.png';
import work from '../assets/images/mdi_bag.png';
import culinary from '../assets/images/culinary.png';
import chef from '../assets/images/cheflogo.png';
import ReactReadMoreReadLess from "react-read-more-read-less";
import '../assets/styles/fontStyle.css';
import UsersContext from "../context/UsersContext";
import * as _ from "lodash";


const EventCard = () => {
    const [isReadMore, setIsReadMore] = useState(true);
    const [isReadMore2, setIsReadMore2] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const toggleReadMore2 = () => {
        setIsReadMore2(!isReadMore2);
    };

    const {userData} = useContext(UsersContext);

    // const longText = ' From Bangalore to the Culinary Institute of America in New York. He has developed his skills and love for the culinary arts. From Bangalore to the Culinary...';
    const longText2 = 'Host connections at your place and leave the dinner table to us. Select your chef and let them curate an experience worth enjoying...';
    const MainBox = styled(Box)(() => ({
        ".heading": {
            fontFamily: 'Bon Vivant',
            fontWeight: '700',
            fontSize: "24px",
            lineHeight: "30px",
            margin: '40px 16px 20px',
            letterSpacing: '0.06em',
            color: '#FBFBFB'
        },
        ".heading-2": {
            fontFamily: 'Bon Vivant',
            fontWeight: '700',
            fontSize: "24px",
            lineHeight: "30px",
            margin: '40px 16px 20px',
    paddingTop: '40px',
            letterSpacing: '0.06em',
            color: '#080B0E'
        },
        ".sub-box-card": {
            display: 'flex',
            alignItems: "center",
            paddingBottom: "8px",
            marginLeft: '16px'
        },
        '.logo': {
            width: '24px',
            height: '24px',
            objectFit: 'contain',
        },
        ".field-name": {
            fontFamily: 'Proxima Nova Alt',
            fontWeight: '100',
            fontSize: "16px",
            lineHeight: "19px",
            marginLeft: '10px',
            color: '#FBFBFB',
            whiteSpace: 'nowrap'
        },
        ".field-name-2": {
            fontFamily: 'Bon Vivant',
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            marginLeft: '10px',
            color: '#080B0E'
        },
        ".field-ans": {
            fontWeight: '600',
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FBFBFB",
            fontFamily: 'ProximaNovaA-Regular',
            marginLeft: '10px'
        },
        ".field-ans-2": {
            fontWeight: '600',
            fontSize: "16px",
            lineHeight: "19px",
            color: "#080B0E",
            fontFamily: 'ProximaNovaA-Regular',
            marginLeft: '10px'
        },
        '.details': {
            color: "#FBFBFB",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: '300',
            margin: '0 16px',
            display: ' block',
            fontFamily: 'Proxima Nova Alt'
        },
        '.details-2': {
            color: "#080B0E",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: '300',
            margin: '0 16px',
            display: ' block',
            fontFamily: 'Proxima Nova Alt',
            paddingBottom: '40px'
        },
        '.read-more-less--more': {
            display: 'block',
            color: "#C6A87D",
            fontWeight: '700 !important',
            fontFamily: 'ProximaNovaA-Regular',
            cursor: "pointer"
        },
        '.read-more-less--less': {
            display: 'block',
            color: "#C6A87D",
            fontWeight: '700 !important',
            fontFamily: 'ProximaNovaA-Regular',
            cursor: "pointer"
        },
        '.read-more-less--more-2': {
            display: 'block',
            color: "#080B0E",
            fontWeight: '700 !important',
            fontFamily: 'ProximaNovaA-Regular',
            cursor: "pointer"
        },
        '.read-more-less--less-2': {
            display: 'block',
            color: "#080B0E",
            fontWeight: '700 !important',
            fontFamily: 'ProximaNovaA-Regular',
            cursor: "pointer"
        },
        '.what-details': {
            paddingBottom: '20px'
        },
        '.about-box': {
            backgroundColor: '#DCD7CB',
            padding: "0 20px"
        },
        "@media (min-width: 1px) and (max-width:431px)": {
            '.heading': {
                fontSize: '20px',
                lineHeight: '25px',
                margin: '40px 16px 22.5px'
            },
            '.heading-2': {
                fontSize: '20px',
                lineHeight: '25px',
            }
        }
    }))
    return (
        <React.Fragment>
            {
                !_.isEmpty(userData) &&
                <MainBox>
                    <Typography className="heading">What to expect</Typography>
                    <Box className='what-details'>
                        <Box className="sub-box-card">
                            <img className="logo" src={gMeal}/>
                            <Typography className="field-name">Course:</Typography>
                            <Typography className="field-ans">{userData.course}</Typography>
                        </Box><Box className="sub-box-card">
                        <img className="logo" src={gGlass}/>
                        <Typography className="field-name">Drinks:</Typography>
                        <Typography className="field-ans">{userData.drinks}</Typography>
                    </Box><Box className="sub-box-card">
                        <img className="logo" src={gStar}/>
                        <Typography className="field-name">Meal Highlight:</Typography>
                        <Typography className="field-ans">{userData.meal_highlight}</Typography>
                    </Box>
                    </Box>
                    <Typography className="details">
                        {/* {
                            !_.isEmpty(userData?.desc) &&
                            <ReactReadMoreReadLess
                                readMoreStyle={{textDecoration: "underline"}}
                                readLessStyle={{textDecoration: "underline"}}
                                charLimit={100}
                                readMoreText={"Read more"}
                                readLessText={"Read less"}
                                readMoreClassName="read-more-less--more"
                                readLessClassName="read-more-less--less"
                            >
                               
                                {userData?.desc}
                            </ReactReadMoreReadLess>
                        } */}
                        {!_.isEmpty(userData?.desc) && (
                            <>
                            {isReadMore ? `${userData.desc.slice(0, 100)}...` : <span dangerouslySetInnerHTML={{ __html: userData.desc }} style={{ whiteSpace: 'pre-line'}} ></span>}
                            <span onClick={toggleReadMore} className="read-more-less--more" role="presentation" style={{ textDecoration: 'underline' }}>
                              {isReadMore ? "Read more" : "Read less"}
                            </span>
                            </>
                        )}
                       

                    </Typography>
                    <Box className='about-box'>
                        <Typography className="heading-2">About the Chef</Typography>
                        {/* here */}
                        <Box className='what-details'>
                            <Box className="sub-box-card">
                                <img className="logo" src={party}/>
                                <Typography className="field-name-2">Fun facts:</Typography>
                                <Typography className="field-ans-2">{userData?.user?.details?.fun_fact}</Typography>
                            </Box>
                            <Box className="sub-box-card">
                                <img className="logo" src={work}/>
                                <Typography className="field-name-2">Worked at:</Typography>
                                <Typography className="field-ans-2">{userData?.user?.details?.worked_at}</Typography>
                            </Box>
                            <Box className="sub-box-card">
                                <img className="logo" src={culinary}/>
                                <Typography className="field-name-2">Culinary School:</Typography>
                                <Typography
                                    className="field-ans-2">{userData?.user?.details?.culinary_school}</Typography>
                            </Box>
                            <Box className="sub-box-card">
                                <img className="logo" src={chef}/>
                                <Typography className="field-name-2">Trained under:</Typography>
                                <Typography
                                    className="field-ans-2">{userData?.user?.details?.trained_under}</Typography>
                            </Box>
                        </Box>
                        <Typography className="details-2">
                            {/* {
                                !_.isEmpty(userData?.user?.details?.intro) &&
                                <ReactReadMoreReadLess
                                    readMoreStyle={{textDecoration: "underline"}}
                                    readLessStyle={{textDecoration: "underline"}}
                                    charLimit={100}
                                    readMoreText={"Read more"}
                                    readLessText={"Read less"}
                                    readMoreClassName="read-more-less--more-2"
                                    readLessClassName="read-more-less--less-2"
                                >
                                    {userData?.user?.details?.intro}
                                </ReactReadMoreReadLess>
                            } */}
                            {!_.isEmpty(userData?.user?.details?.intro) && (
                            <>
                            {isReadMore2 ? `${userData?.user?.details?.intro.slice(0, 100)}...` : <span dangerouslySetInnerHTML={{ __html: userData?.user?.details?.intro }} style={{ whiteSpace: 'pre-line'}} ></span>}
                            <span onClick={toggleReadMore2} className="read-more-less--more-2" role="presentation" style={{ textDecoration: 'underline' }}>
                              {isReadMore2 ? "Read more" : "Read less"}
                            </span>
                            </>
                        )}

                        </Typography>
                    </Box>
                </MainBox>
            }
        </React.Fragment>
    )
}

export default EventCard;