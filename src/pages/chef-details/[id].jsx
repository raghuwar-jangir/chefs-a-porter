import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
  Link,
  ImageListItem,
  ImageList,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { navigate } from "gatsby";
import Cookies from "js-cookie";

import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarComponent";
import NeedHelp from "../../components/NeedHelp";
import FooterEnd from "../../components/FooterEndSection";
import party from "../../assets/images/party.png";
import work from "../../assets/images/mdi_bag.png";
import culinary from "../../assets/images/culinary.png";
import chef from "../../assets/images/chef.png";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ReactReadMoreReadLess from "react-read-more-read-less";
import CloseIcon from "@mui/icons-material/Close";
import * as _ from "lodash";
import TemptedYet from "../../components/TemptedYet";
import ImageCarousel from "../../components/ImageCarousel";
import AvlExperienceCarousel from "../../components/AvlExperienceCarousel";
import ImagePopCarousel from "../../components/ImagePopCarousel";
import SupperClubDetailsCarousel from "../../components/SupperClubDetailsCarousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GalleryCarousel from "../../components/GalleryCarousel";
import UsersContext from "../../context/UsersContext";
import "../../assets/styles/fontStyle.css";
import CmsContext from "../../context/CmsContext";

const ChefsDetailTemplate = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isReadMore2, setIsReadMore2] = useState(true);

  const { footerData } = useContext(CmsContext);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const toggleReadMore2 = () => {
    setIsReadMore2(!isReadMore2);
  };

  const getUserId = props.id;
  const { setUserId, userData } = useContext(UsersContext);
  const [showCarousel, setShowCarousel] = useState(false);

  const [title, setTitle] = useState("");
  const handleImageOpen = (title) => {
    setShowCarousel(true);
    setTitle(title);
  };
  const handleImageClose = () => {
    setShowCarousel(false);
  };

  useEffect(() => {
    setUserId(getUserId);
  }, [getUserId]);
  const bread = {
    fontFamily: "Proxima Nova Alt",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "19px",
  };
  const breadcrumbs = [
    <Typography sx={bread} key="1" color="#FBFBFB">
      Private
    </Typography>,
    <Link underline="none" key="2" color="#C6A87D" href="">
      Chef
    </Link>,
  ];

  // const longText = "From Bangalore to the Culinary Institute of America in New York. He has developed his skills and love for the culinary arts. From Bangalore to the Culinary ..."
  const itemData = [{
    img: userData?.picture,
    title: "chef1",
  }];

  const itemData2 = _.map(
    _.get(userData?.details, "gallery_pictures", []),
    (item, index) => {
      return {
        img: item,
        title: index === 0 ? "sGallery" : "chef2",
      };
    }
  );

  const BoxWrapper = styled(Box)(() => ({
    background: "#080B0E",
    ".supper-gallery": {
      marginTop: "40px",
    },
    ".container-fluid": {
      padding: "80px 235px",
    },
    ".container": {
      position: "relative",
      padding: "0px 10px 0px 0px",
    },
    ".carousel-box": {
      display: "none",
    },
    ".chef-name": {
      fontSize: "23px",
      lineHeight: "30px",
      color: "#FBFBFB",
      marginTop: "8px",
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      letterSpacing: "0.06em",
      marginBottom: "8px",
    },
    ".chef-details": {
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      fontWeight: "300",
      color: "#FBFBFB",
      fontSize: "16px",
      lineHeight: "19px",
      letterSpacing: "0.06em",
    },
    "#pills-home": {
      background: "#DCD7CB",
      padding: "0 10px",
    },
    ".about-chef-heading": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "0.06em",
      color: "#080B0E",
      margin: "0px 16px 20px",
      paddingTop: "20px",
    },
    ".about-chef-details": {
      fontFamily: 'Bon Vivant',
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      marginLeft: '10px',
      color: '#080B0E'
    },
    ".field-ans-2": {
      fontWeight: '600',
      fontSize: "16px",
      lineHeight: "19px",
      color: "#080B0E",
      fontFamily: 'ProximaNovaA-Regular',
      marginLeft: '10px'
    },
    ".about-chef-icon": {
      width: "24px",
      height: "24px",
      objectFit: "contain",
      verticleAlign: "middle",
    },
    ".about-container": {
      display: "flex",
      marginBottom: "8px",
      alignItems: "center",
    },
    ".read-more": {
      fontFamily: "Proxima Nova Alt",
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#080B0E",
      padding: "12px 12px 0px 0px",
      marginLeft: "16px",
      paddingBottom: "45px",
    },
    ".all-photos": {
      position: "absolute",
      bottom: "32px",
      right: "29px",
      fontFamily: "ProximaNovaA-Regular",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "19px",
      color: "#080B0E",
      textTransform: "math-auto",
      background: "#FBFBFB",
      boxShadow: "0px 20px 24px rgb(0 0 0 / 6%)",
      borderRadius: "1px",
      padding: "8px 12px",
    },
    ".all-photos:hover": {
      color: "#C6A87D",
      backgroundColor: "#FBFBFB",
    },
    ".all-photos:focus": {
      backgroundColor: "#FBFBFB",
      color: "#C6A87D",
    },
    ".read-more-less--more, .read-more-less--less": {
      all: "unset",
      color: "#080B0E",
      textDecoration: "underline",
      textUnderlineOffset: "3px",
      cursor: "pointer",
      fontWeight: "700",
      float: "left",
      width: "100%",
      fontFamily: "ProximaNovaA-Regular",
      cursor: "pointer",
    },
    ".treat": {
      padding: "40px 20px",
      background: "#101418",
    },
    ".treat-container": {
      padding: " 0px",
      border: "0px",
      background: "transparent",
    },
    ".treat-Box": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ".surprise-title": {
      fontSize: "24px",
      lineHeight: "30px",
      color: "#FBFBFB",
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      letterSpacing: "0.06em",
      marginBottom: "8px",
    },
    ".surpirse-details": {
      fontSize: "15px",
      lineHeight: "24px",
      color: "#FBFBFB",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
    },
    ".surprise-Box": {
      padding: "0px 12px",
      width: "75%",
    },
    ".view-all-gallery": {
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      letterSpacing: "0.06em",
      marginBottom: "8px",
      textAlign: "center",
      textDecoration: "none",
      border: "1px solid #C6A87D",
      padding: "15px 45px",
      display: "block",
    },
    ".view-all": {
      fontSize: "16px",
      lineHeight: "19px",
      color: "#FBFBFB",
      fontFamily: "Proxima Nova Alt",
      fontStyle: "normal",
      letterSpacing: "0.06em",
      marginBottom: "40px",
      textAlign: "center",
      textDecoration: "none",
      border: "1px solid #C6A87D",
      padding: "14px",
      display: "block",
    },
    ".view-all:hover": {
      color: "#C6A87D !important",
    },
    ".book-now": {
      width: "25%",
      padding: "0px 12px",
    },
    ".mobile-show": {
      display: "none",
    },
    ".mobileView-chef": {
      display: "none",
      margin: "5px 0px",
    },
    ".chef-header": {
      fontFamily: "Bon Vivant",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "30px",
      lineHeight: "37px",
      textAlign: "left",
      letterSpacing: "0.06em",
      color: "#FBFBFB",
      padding: "20px 0px",
      marginBottom: "10px",
    },
    ".available-experiences": {
      padding: "5px",
      background: "#101418",
    },
    ".header-club": {
      display: "none",
      padding: "15px",
      backgroundColor: "#080B0E",
    },
    ".header-icon": {
      color: "#FBFBFB",
    },
    ".chef-btn": {
      display: "flex",
      justifyContent: "center",
      width: "auto",
    },
    ".carousel-popup": {
      position: "fixed",
      top: "0px",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1200",
    },
    ".close-button": {
      position: "absolute",
      top: "20px",
      right: "0px",
      fontSize: "24px",
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      cursor: "pointer",
      zIndex: "1200",
    },
    ".main-img": {
      width: "100%",
      // height: "395px",
      height: 'calc(100% - 12px)',
      display: "block",
      objectFit: "cover",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      cursor: "pointer",
    },
    ".gallery-carousel": {
      display: "none",
    },
    ".main-img-1": {
      width: "100%",
      height: "180px",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      objectFit: "cover",
    },
    ".main-img-2": {
      width: "100%",
      height: "190px",
      boxShadow: "0px 8px 16px rgb(0 0 0 / 16%)",
      objectFit: "cover",
      marginBottom: "8px",
    },
    ".child-container": {
      display: "flex",
      flexWrap: "wrap",
    },
    ".restorent-1": {
      position: "relative",
      flex: "0 0 auto",
      width: "100%",
    },
    ".next-grid": {
      maxWidth: "100% !important",
    },
    ".main-2": {
      position: "relative",
      padding: "0px 0px 0px 10px",
    },
    ".container-spacing": {
      display: "grid",
      gridTemplateColumns: "58.33333333% 41.66666667%",
    },
    ".supper-chef-details": {
      paddingTop: "12px",
    },
    ".chef-icon": {
      margin: " 0px 16px 20px",
    },
    ".pop-close-icon": {
      width: "100px",
      height: "40px",
      color: "rgb(160, 160, 160)",
    },
    ".details": {
      marginBottom: "20px",
    },
    "@media(min-width: 1000px) and (max-width: 1024px)": {
      ".swiper-pagination-bullet": {
        width: "145px",
      },
      ".dining-content": {
        padding: "4px 35px !important",
      },
    },
    "@media(min-width: 1px) and (max-width: 768px)": {
      ".treat-Box": {
        display: "block",
        alignItems: "center",
      },
      ".book-now": {
        width: "auto",
      },
      ".surprise-Box": {
        width: "auto",
      },
      ".container-fluid": {
        padding: "0px 0px 0px",
      },
      ".view-all-gallery": {
        marginBottom: "40px",
      },
      ".about-chef-details": {
        fontFamily: 'Bon Vivant',
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "19px",
        marginLeft: '10px',
        color: '#080B0E'
      },
    },
    "@media(min-width: 700px) and (max-width: 768px)": {
      ".bm-burger-bars": {
        background: "#080B0E !important",
      },
    },
    "@media (min-width: 320px) and (max-width:431px)": {
      ".css-5n45bv-MuiPaper-root-MuiMobileStepper-root": {
        paddingLeft: "130px",
        top: "300px !important",
      },
    },
    "@media (min-width: 320px) and (max-width:350px)": {
      ".css-5n45bv-MuiPaper-root-MuiMobileStepper-root": {
        paddingLeft: "105px",
        top: "270px  !important",
      },
    },
    "@media (min-width: 431px) and (max-width:450px)": {
      ".css-5n45bv-MuiPaper-root-MuiMobileStepper-root": {
        paddingLeft: "160px !important",
        top: "330px  !important",
      },
      ".header-icon": {
        padding: "14px 140px 0px 10px",
      },
    },
    "@media (min-width: 1px) and (max-width:431px)": {
      ".supper-chef-details": {
        display: "none",
      },
      ".gallery-carousel": {
        display: "block",
      },
      ".tz-gallery": {
        display: "none",
      },
      ".mobileView-chef": {
        display: "block",
        paddingTop: "15px",
      },
      ".mbl-chef-name": {
        textAlign: "center",
        marginBottom: "0px !important",
      },
      ".chef-header": {
        fontSize: "24px",
        lineHeight: "30px",
        textAlign: "center",
      },
      ".mobile-show": {
        display: "block",
      },
      ".header-club": {
        padding: "0px",
        display: "flex",
      },
      ".view-all-gallery": {
        width: "100%",
      },
      ".container-spacing": {
        display: "none",
      },
    },
    "@media(min-width:600px) and (max-width: 768px)": {
      ".header-club": {
        display: "flex",
        background: "#DCD7CB",
      },
      ".header-icon": {
        color: "#080B0E",
      },
      ".chef-mobile-heading": {
        fontSize: "24px",
        paddingLeft: "280px",
        textAlign: "center",
        color: "#080B0E",
        fontFamily: "Bon Vivant",
      },
      ".template": {
        backgroundColor: "#FBFBFB !important",
      },
      ".template-title": {
        color: "#080B0E !important",
      },
    },
    "@media (min-width: 320px) and (max-width:767px)": {
      ".chef-mobile-heading": {
        padding: "8px 0px !important",
        fontSize: "24px",
        textAlign: "center",
        color: "#FBFBFB",
        fontFamily: "Bon Vivant",
      },
    },
    "@media (min-width: 320px) and (max-width:370px)": {
      ".header-icon": {
        padding: "14px 80px 0px 10px",
      },
    },
    "@media (min-width: 371px) and (max-width:400px)": {
      ".header-icon": {
        padding: "14px 110px 0px 10px",
      },
    },
  }));

  return (
    <React.Fragment>
      <BoxWrapper>
        {!_.isEmpty(userData) && (
          <>
            <Navbar
              to={"/chef-details"}
              heading="Private"
              isColor={true}
              isIcon={true}
            />
            <Box className="supper-gallery chef-ind">
              <Box className="container-fluid">
                <Box className="row supper-chef-details">
                  <Box className="details">
                    <Breadcrumbs
                      separator={
                        <ArrowForwardIosIcon
                          sx={{
                            fontSize: "12px",
                            "-webkit-text-stroke": "0.2px",
                            fontWeight: "unset",
                          }}
                        />
                      }
                      aria-label="breadcrumb"
                      color="white"
                    >
                      {breadcrumbs}
                    </Breadcrumbs>
                    <Typography className="chef-name">
                      {userData.name}
                    </Typography>
                    <span className="chef-details">
                      Cuisine Speciality:
                      <b>
                        {!_.isEmpty(userData?.details?.tags) && (
                          <span>
                            {userData?.details?.tags?.map((item, index) => {
                              return (
                                <span>
                                  {" "}
                                  {item}
                                  {index !==
                                    userData?.details?.tags.length - 1 && (
                                    <span>,</span>
                                  )}
                                </span>
                              );
                            })}
                          </span>
                        )}
                      </b>
                    </span>
                  </Box>
                </Box>
                <Box className="mobileView-chef">
                  <Typography className="chef-name mbl-chef-name">
                    {userData?.name}
                  </Typography>
                </Box>
                <Box className="gallery-carousel">
                  <ImageCarousel pictures={[...itemData2]}/>
                </Box>
                <Box className="mobileView-chef">
                  <Typography className="chef-details mbl-chef-name">
                    Speciality:
                    <b>
                      {!_.isEmpty(userData?.details?.tags) && (
                        <span>
                          {userData?.details?.tags?.map((item, index) => {
                            return (
                              <span>
                                {" "}
                                {item}
                                {index !==
                                  userData?.details?.tags.length - 1 && (
                                  <span>,</span>
                                )}
                              </span>
                            );
                          })}
                        </span>
                      )}
                    </b>
                  </Typography>
                </Box>
                <Box>
                  <Box className="container-spacing">
                    <Box className="container">
                      {itemData.slice(0, 1).map((item) => (
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          onClick={() => {
                            handleImageOpen(item.title);
                          }}
                          className="main-img"
                        />
                      ))}
                      {showCarousel && (
                        <Box className="carousel-popup">
                          <button
                            className="close-button"
                            onClick={handleImageClose}
                          >
                            <CloseIcon className="pop-close-icon" />
                          </button>
                          <Box className="carousel">
                            <ImagePopCarousel title={title} />
                          </Box>
                        </Box>
                      )}
                    </Box>
                    <Box className="main-2">
                      <Box className="child-container">
                        <Box className="restorent-1">
                          {itemData2.slice(0,4).map((item) => (
                            <img
                              src={item.img}
                              alt={item.title}
                              loading="lazy"
                              onClick={() => {
                                handleImageOpen(item.title);
                              }}
                              className="main-img-2"
                            />
                          ))}
                          <Button
                            className="all-photos"
                            onClick={() => {
                              setShowCarousel(true);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Show All Photos
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="row supper-chef-details">
                  <Box className="col-lg-12">
                    <Box className="details">
                      <Box className="supper-tabs">
                        <Box className="tab-content" id="pills-tabContent">
                          <Box
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            <Typography className="about-chef-heading">
                              About the Chef
                            </Typography>
                            <Box className="chef-icon">
                              <Box className="about-container">
                                <img
                                  src={party}
                                  className="about-chef-icon"
                                  alt=""
                                />
                                {/* here */}
                                <Typography className="about-chef-details field-name">
                                  Fun facts:{" "}
                                </Typography>
                                <Typography className="field-ans-2">{userData?.details?.fun_fact}</Typography>
                              </Box>
                              <Box className="about-container">
                                <img
                                  src={work}
                                  className="about-chef-icon"
                                  alt=""
                                />
                                <Typography className="about-chef-details field-name">
                                  Worked at:{" "}
                                </Typography>
                                <Typography className="field-ans-2">{userData?.details?.worked_at}</Typography>
                              </Box>
                              <Box className="about-container">
                                <img
                                  src={culinary}
                                  className="about-chef-icon"
                                  alt=""
                                />
                                <Typography className="about-chef-details field-name">
                                  Culinary School:{" "}
                                </Typography>
                                <Typography className="field-ans-2">{userData?.details?.culinary_school}</Typography>
                              </Box>
                              <Box className="about-container">
                                <img
                                  src={chef}
                                  className="about-chef-icon"
                                  alt=""
                                />
                                <Typography className="about-chef-details field-name">
                                  Trained under:{" "}
                                </Typography>
                                <Typography className="field-ans-2">{userData?.details?.trained_under}</Typography>
                              </Box>
                            </Box>
                            <Box className="read-more">
                              {/* <ReactReadMoreReadLess
                                                                charLimit={100}
                                                                className="read-more-content"
                                                                readMoreClassName="read-more-less--more"
                                                                readLessClassName="read-more-less--less"
                                                                style={{
                                                                    fontFamily: 'Proxima Nova Alt',
                                                                    fontStyle: "normal",
                                                                    // fontWeight: 300,
                                                                    fontSize: "16px",
                                                                    lineHeight: "19px !important",
                                                                    color: "#080B0E",
                                                                }}
                                                            >
                                                                {userData?.details?.intro ? userData?.details?.intro : ''}
                                                            </ReactReadMoreReadLess> */}

                              {isReadMore ? (
                                `${userData?.details?.intro.slice(0, 100)}...`
                              ) : (
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: userData?.details?.intro,
                                  }}
                                  style={{ whiteSpace: "pre-line" }}
                                ></span>
                              )}
                              <span
                                onClick={toggleReadMore}
                                className="read-more-less--more"
                                role="presentation"
                                style={{ textDecoration: "underline" }}
                              >
                                {isReadMore ? "Read more" : "Read less"}
                              </span>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="available-experiences">
                  <Typography className="chef-header">
                    Available Experiences
                  </Typography>
                  <Grid container spacing={2}>
                    {userData?.experinces?.map((item) => {
                      return (
                        <Grid item xl={4} md={4} sm={6} xs={12}>
                          <AvlExperienceCarousel
                            image={item.cover_picture}
                            title={item.title}
                            description={`by ${userData.name}`}
                            onClick={() => {
                              navigate(`/event-details/${item?.id}`);
                              Cookies.set(
                                "eventIdValue",
                                JSON.stringify(item?.id)
                              );
                            }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
                <Box className="mobile-show book-now">
                  <a href="javascript:void(0);" className="view-all">
                    View More
                  </a>
                </Box>
                <Box className="treat">
                  <Box className="treat-container">
                    <Box className="treat-Box">
                      <Box className="surprise-Box">
                        <Typography className="surprise-title">
                          Surprise me
                        </Typography>
                        <Typography className="surpirse-details">
                        Leave it to Chef {userData?.name} to curate a bespoke menu
                        </Typography>
                      </Box>
                      <Box className="book-now">
                        <a href="/event-details" className="view-all">
                          Book Now
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <SupperClubDetailsCarousel
                  changeDetails={{ fontSize: "16px" }}
                  changeFont={{ fontSize: "20px" }}
                  backgroundColor="#DCD7CB"
                />
                {!_.isEmpty(userData?.details?.sliders) && (
                  <>
                    <GalleryCarousel title={"Gallery"} />
                    <Box className="chef-btn book-now">
                      <Link href="/our-chefs" className="view-all-gallery">
                        View More Chef
                      </Link>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
            <NeedHelp
              title={footerData?.footer.footer.common_footer.details.title}
              description={
                footerData?.footer.footer.common_footer.details.description
              }
              button_call={
                footerData?.footer.footer.common_footer.details.button1_text
              }
              button_email={
                footerData?.footer.footer.common_footer.details.button2_text
              }
            />
            <Footer />
            <TemptedYet
              isTempted={true}
              title={"Tempted yet?"}
              buttonText={"Book an Experience"}
            />
            <FooterEnd />
          </>
        )}
      </BoxWrapper>
    </React.Fragment>
  );
};

export default ChefsDetailTemplate;
