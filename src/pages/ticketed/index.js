import React, { useContext } from "react";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";
import supperVideo from "../../assets/video/supper.mp4";
import NavbarComponent from "../../components/NavbarComponent";
import DownArrow from "../../assets/images/down-arrow.png";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import "../../assets/styles/fontStyle.css";
import UpcomingSupperClubCard from "../../components/UpcomingSupperClubCard";
import exImg from "../../assets/images/supper-ex.png";
import LookLikeCarousel from "../../components/LookLikeCarousel";
import ChefCarousel from "../../components/ChefCarousel";
import DiningExperienceCarousel from "../../components/DiningExperienceCarousel.jsx";
import NeedHelp from "../../components/NeedHelp";
import Footer from "../../components/Footer";
import FooterEnd from "../../components/FooterEndSection";
import BehindScenesCarousel from "../../components/BehindScenesCarousel";
import CmsContext from "../../context/CmsContext";
import * as _ from "lodash";
import SupperClubQuestion from "../../components/SupperClubQuestions";
import SupperClubRatingCarousel from "../../components/SupperClubRatingCarousel";
import TemptedYet from '../../components/TemptedYet';

const SupperClub = () => {
    const { data } = useContext(CmsContext);

    const MainBox = styled(Box)(() => ({
        ".home-banner": {
            marginTop: "25px",
        },
        ".container-fluid": {
            padding: "0px",
            margin: "0px",
            position: "relative",
        },
        ".home-banner-video": {
            width: "100%",
            height: "600px",
            objectFit: "cover",
            display: "block",
        },
        ".video-overlays": {
            position: "relative",
        },
        ".justify-content-center": {
            padding: "0px",
            margin: "0px",
            position: "relative",
        },
        ".arrows": {
            position: "absolute",
            bottom: "28px",
            display: "block",
            left: "0px",
            right: "0px",
            margin: "0 auto",
            "-moz-animation": "bounce 2s infinite",
            "-webkit-animation": "bounce 2s infinite",
            animation: "bounce 2s infinite,",
        },
        ".arrows img": {
            display: "block",
            margin: "0 auto",
            width: "15px",
            height: "8px",
            objectFit: "contain",
        },
        ".home-text": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            lineHeight: "36px",
            textAlign: "center",
            color: "#FBFBFB",
            position: "absolute",
            left: "0px",
            right: "0px",
            bottom: "42px",
        },
        ".down-arrow-op": {
            opacity: "0.38",
        },
        ".upcoming": {
            background: "#C2BAA6",
        },
        ".upcoming-container": {
            padding: "60px 120px"
        },
        ".child-upcoming": {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        ".supper-box": {
            flex: "0 0 auto",
            width: "100%",
            maxWidth: "100%",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
        },
        ".upcoming-supper-header": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "24px",
            letterSpacing: "0.06em",
            color: "#050405",
            textAlign: "center",
            marginBottom: "30px",
        },
        ".Joy-selected": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FBFBFB !important",
            borderRadius: "0px",
            margin: "8px 0px",
            backgroundColor: "#080B0E",
        },
        ".MuiTab-variantPlain": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#080B0E",
            borderRadius: "0px",
            margin: "8px 0px",
            border: "0.5px solid #080B0E",
            flexDirection: "column",
        },
        ".css-qi8np3-JoyTabPanel-root": {
            animationName: "fadeIn",
            animationDuration: "1s",
            animationIterationCount: "1",
        },
        ".tab-sec": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
        },
        "@keyframes fadeIn": {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
        },
        ".tab-box": {
            height: "48px",
        },
        ".css-130r91k-JoyTabList-root": {
            gridGap: "20px !important",
        },
        ".css-1lhe3ax-JoyTabPanel-root": {
            padding: "0px",
        },
        ".cooking-tab": {
            height: "67.8px",
        },
        ".what-we-cooking": {
            background: "#C2BAA6",
        },
        ".cooking-box": {
            padding: "60px 120px",
        },
        ".join-table": {
            background: "rgba(220, 215, 203, 1) !important",
        },
        ".table-box": {
            display: "inline-flex",
            width: "100%",
        },
        ".table-child": {
            flex: "0 0 auto",
            width: " 50%",
            maxWidth: "100%",
        },
        ".table-img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        ".table-child-2": {
            padding: "40px 120px 40px 40px!important",
            placeSelf: " center",
        },
        ".join-table-title": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "30px",
            letterSpacing: "0.06em",
            color: "#080B0E",
            marginBottom: "40px",
        },
        ".table-li": {
            color: "#C6A87D",
            fontSize: "30px",
        },
        ".li-point": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "30px",
            color: "#222222",
        },
        ".li-details": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#222222",
            marginBottom: "16px",
        },
        ".supper-heading": {
            textAlign: "center",
            paddingTop: "80px !important",
            margin: "0px 16px 36px !important",
        },
        ".supper-img": {
            height: "455px !important",
        },
        ".title-box": {
            display: "inline-flex !important",
        },
        ".peek-name": {
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "29px",
            textAlign: "center",
            color: "#C6A87D",
            marginBottom: "0.5rem",
            marginLeft: "5px",
        },
        ".details": {
            fontSize: "20px !important",
            lineHeight: "24px !important",
            padding: "0px !important",
        },
        "@media (min-width: 1px) and (max-width:767px)": {
            ".upcoming-container": {
                padding: "40px 16px",
            },
            ".css-130r91k-JoyTabList-root": {
                overflow: "auto",
            },
            ".cooking-box": {
                padding: "40px 16px",
            },
            ".table-box": {
                padding: "40px 16px",
                display: "grid",
                gridTemplateColumns: "50% 50%",
                width: "auto",
            },
            ".MuiTab-variantPlain": {
                fontSize: "14px",
                lineHeight: "17px",
                width:'35%'
            },
            ".tab-sec": {
                fontSize: "14px",
                lineHeight: "17px",
            },
            ".cooking-tab": {
                height: "auto",
            },
            ".table-child": {
                width: "100%",
            },
            ".table-img": {
                height: "100%",
                objectPosition: "left",
            },
            ".table-child-2": {
                padding: "0px !important",
            },
            ".join-table-title": {
                display: "none",
            },
            ".ul": {
                marginTop: "0px",
            },
            ".table-li": {
                fontSize: "20px",
            },
            ".li-details": {
                fontSize: "14px",
                lineHeight: "20px",
                marginBottom: "8px",
            },
            ".li-point": {
                fontSize: "14px",
                lineHeight: "20px",
            },
        },
        "@media(min-width:600px) and (max-width: 768px)": {
            ".template": {
                backgroundColor: "#FBFBFB !important",
            },
            ".template-title": {
                color: "#080B0E !important",
            },
            '.table-box':{
                display:'block'
            },
            ".table-child": {
                width: "100%",
                maxWidth: "100%",
            },
        },
    }));

    return (
        <React.Fragment>
            {!_.isEmpty(data?.supper_club) && (
                <MainBox>
                    <NavbarComponent heading="Ticketed" />
                    <Box className="home-banner">
                        <Box className="container-fluid">
                            <Box className="justify-content-center">
                                <Box id="video_overlays">
                                    <img
                                        src={data.supper_club.header.image}
                                        className="video home-banner-video"
                                    />
                                </Box>
                                <Box className="arrows">
                                    <Typography className="home-text">
                                        {data.supper_club.header.title}
                                    </Typography>
                                    <img src={DownArrow} alt="down" className="down-arrow-op" />
                                    <img src={DownArrow} alt="down" className="down-arrow" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="upcoming">
                        <Box className="upcoming-container">
                            <Box className="child-upcoming">
                                <Typography className="upcoming-supper-header">
                                    {data.supper_club.upcoming_supper_club.title}
                                </Typography>
                            </Box>
                            <Box>
                                <Tabs
                                    defaultValue={0}
                                    sx={{ "--Tabs-gap": "0px", backgroundColor: "#C2BAA6" }}
                                >
                                    <TabList>
                                        <Tab className="tab-box" value={0}>
                                            Mumbai
                                        </Tab>
                                        <Tab className="tab-box" value={1}>
                                            Delhi
                                        </Tab>
                                        <Tab className="tab-box" value={2}>
                                            Goa
                                        </Tab>
                                        <Tab className="tab-box" value={3}>
                                            Banglore
                                        </Tab>
                                        <Tab className="tab-box" value={4}>
                                            Hyderabad
                                        </Tab>
                                    </TabList>
                                    <TabPanel value={0} sx={{ p: 0 }}>
                                        <Tabs
                                            defaultValue={0}
                                            sx={{ "--Tabs-gap": "0px", backgroundColor: "transparent" }}
                                        >
                                            <TabList>
                                                <Tab className="cooking-tab" value={0}>
                                                    This Week
                                                    <Typography className="tab-sec">2-5 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={1}>
                                                    Next Week
                                                    <Typography className="tab-sec">7-6 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={2}>
                                                    Next Month
                                                    <Typography className="tab-sec">December</Typography>
                                                </Tab>
                                            </TabList>
                                            <TabPanel value={0} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={1} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={2} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={3} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel>
                                    <TabPanel value={1} sx={{ p: 0 }}>
                                        <Tabs
                                            defaultValue={0}
                                            sx={{ "--Tabs-gap": "0px", backgroundColor: "transparent" }}
                                        >
                                            <TabList>
                                                <Tab className="cooking-tab" value={0}>
                                                    This Week
                                                    <Typography className="tab-sec">2-5 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={1}>
                                                    Next Week
                                                    <Typography className="tab-sec">7-6 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={2}>
                                                    Next Month
                                                    <Typography className="tab-sec">December</Typography>
                                                </Tab>
                                            </TabList>
                                            <TabPanel value={0} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={1} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={2} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={3} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel>
                                    <TabPanel value={2} sx={{ p: 0 }}>
                                        <Tabs
                                            defaultValue={0}
                                            sx={{ "--Tabs-gap": "0px", backgroundColor: "transparent" }}
                                        >
                                            <TabList>
                                                <Tab className="cooking-tab" value={0}>
                                                    This Week
                                                    <Typography className="tab-sec">2-5 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={1}>
                                                    Next Week
                                                    <Typography className="tab-sec">7-6 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={2}>
                                                    Next Month
                                                    <Typography className="tab-sec">December</Typography>
                                                </Tab>
                                            </TabList>
                                            <TabPanel value={0} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={1} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={2} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={3} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel>
                                    <TabPanel value={3} sx={{ p: 0 }}>
                                        <Tabs
                                            defaultValue={0}
                                            sx={{ "--Tabs-gap": "0px", backgroundColor: "transparent" }}
                                        >
                                            <TabList>
                                                <Tab className="cooking-tab" value={0}>
                                                    This Week
                                                    <Typography className="tab-sec">2-5 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={1}>
                                                    Next Week
                                                    <Typography className="tab-sec">7-6 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={2}>
                                                    Next Month
                                                    <Typography className="tab-sec">December</Typography>
                                                </Tab>
                                            </TabList>
                                            <TabPanel value={0} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={1} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={2} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={3} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel>
                                    <TabPanel value={4} sx={{ p: 0 }}>
                                        <Tabs
                                            defaultValue={0}
                                            sx={{ "--Tabs-gap": "0px", backgroundColor: "transparent" }}
                                        >
                                            <TabList>
                                                <Tab className="cooking-tab" value={0}>
                                                    This Week
                                                    <Typography className="tab-sec">2-5 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={1}>
                                                    Next Week
                                                    <Typography className="tab-sec">7-6 nov</Typography>
                                                </Tab>
                                                <Tab className="cooking-tab" value={2}>
                                                    Next Month
                                                    <Typography className="tab-sec">December</Typography>
                                                </Tab>
                                            </TabList>
                                            <TabPanel value={0} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={1} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={2} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                            <TabPanel value={3} sx={{ p: 0 }}>
                                                <UpcomingSupperClubCard />
                                            </TabPanel>
                                        </Tabs>
                                    </TabPanel>
                                </Tabs>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="join-table">
                        <Box className="table-box">
                            <Box className="table-child">
                                <img
                                    src={data.supper_club.expect.image}
                                    className="table-img"
                                />
                            </Box>
                            <Box className="table-child-2">
                                <Typography className="join-table-title">
                                    {data.supper_club.expect.title}
                                </Typography>
                                <ul className="ul">
                                    {data.supper_club.expect.content.map((item) => {
                                        return (
                                            <li className="table-li">
                                                <Typography className="li-details">
                                                    <b className="li-point">{item.title}</b> -{" "}
                                                    {item.description}
                                                </Typography>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                    <SupperClubRatingCarousel isFontSize={true} padding={true} />
                    <LookLikeCarousel />
                    <BehindScenesCarousel
                        chefHeading="Behind the Scenes"
                        detailsBox={true}
                        isPadding={true}
                        // slidesPerView={true}
                        isBackground={true}
                    />
                    <DiningExperienceCarousel
                        title="Stay in the know"
                        subTitle="@Chefsaporter"
                    />
                    <SupperClubQuestion isLightTheme={true} />
                    <TemptedYet  title={"Tempted yet?"}
                                 buttonText="Book this Experience"
                                 isTempted={true}/>
                    <NeedHelp
                        title={data.supper_club.home_footer.desktop_title}
                        description={data.supper_club.home_footer.desktop_description}
                        button_call={data.supper_club.home_footer.desktop_button_call}
                        button_email={data.supper_club.home_footer.desktop_button_email}
                    />
                    <Footer />
                    <FooterEnd />
                </MainBox>
            )}
        </React.Fragment>
    );
};
export default SupperClub;
