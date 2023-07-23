import React, { useContext } from "react";
import { Box, styled } from "@mui/material";

import "../../assets/styles/fontStyle.css";
import CmsContext from "../../context/CmsContext";
import _ from "lodash";
import ItemCard from "./itemCard";

const MainParent = styled(Box)({
  padding: "35px 120px 80px",
  ".parent-view-button": {
    textAlign: "center",
    // marginTop: '20px',
    marginTop: "40px",
  },
  ".view-more": {
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "29px",
    width: "30%",
    color: "#FBFBFB",
    background: "#080B0E",
    border: "1px solid #DCD7CB",
    padding: "12px",
  },
  ".parent-grid": {
    paddingTop: "30px",
  },
  ".supper-info": {
    padding: "20px 16px 10px 16px",
    background: "#FFFFFF",
    boxShadow: "0px 16.3378px 20.4223px rgb(0 0 0 / 6%)",
    position: "relative",
  },
  ".super-title": {
    fontFamily: "Proxima Nova Alt Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "24px",
    color: "#050405",
    marginBottom: "0px",
    letterSpacing: "0.01em",
  },
  ".super-chef-details": {
    paddingTop: "20px",
  },
  ".chef-tag": {
    display: "flex",
    paddingBottom: "13px",
    fontFamily: "ProximaNovaA-Regular",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#222222",
  },
  ".img-tag": {
    width: "18px !important",
    height: "18px",
    objectFit: "contain",
    marginRight: "20px",
  },
  ".tag-detail": {
    margin: "0",
    fontFamily: "ProximaNovaA-Regular",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.00938em",
  },
  ".swiper-slide": {
    width: "395.25px",
  },
  ".test-img": {
    height: "284px",
    width: "100%",
    objectFit: "cover",
  },
  ".trending": {
    position: "absolute",
    background: "#101418",
    display: "flex",
    placeContent: "flex-end",
    top: "0px",
    width: "100%",
  },
  ".trending-img": {
    objectFit: "contain",
    marginRight: "4px",
    width: "12px",
    height: "16px",
    paddingTop: "5px",
  },
  ".trending-title": {
    fontFamily: "Proxima Nova Alt",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "16px",
    lineHeight: "19px",
    textAlign: "right",
    letterSpacing: "0.02em",
    color: "#C6A87D",
    padding: "5px 20px 5px 0px",
  },
  "@media(min-width: 431px) and (max-width: 768px)": {
    padding: "35px 10px 15px",
    ".test-img": {
      height: "358px",
    },
    ".trending": {
      display: "none",
    },
    ".tag-detail": {
      fontSize: "15px",
    },
  },
  "@media(min-width: 374px) and (max-width: 431px)": {
    padding: "35px 10px 15px",
    ".test-img": {
      height: "358px",
      display: "block",
      width: "100%",
    },
    ".swiper": {
      height: "1090px",
    },
    ".swiper-button-prev": {
      display: "none",
    },
    ".swiper-button-next": {
      display: "none",
    },
    ".swiper-slide": {
      width: "405.25px",
    },
    ".trending": {
      display: "none",
    },
  },
  "@media(min-width: 319px) and (max-width: 375px)": {
    padding: "35px 10px 15px",
    ".swiper-slide": {
      width: "355.25px",
    },
    ".trending": {
      display: "none",
    },
  },
  "@media(min-width: 1px) and (max-width: 320px)": {
    padding: "35px 10px 15px",
    ".swiper-slide": {
      width: "301.25px",
    },
    ".swiper": {
      height: "1100px",
    },
    ".swiper-button-prev": {
      display: "none",
    },
    ".swiper-button-next": {
      display: "none",
    },
    ".trending": {
      display: "none",
    },
    ".test-img": {
      height: "358px",
    },
  },
});

const FoodCarouselMobile = (isButtonShow) => {
  const { data } = useContext(CmsContext);

  return (
    <React.Fragment>
      {!_.isEmpty(data?.home) && data.home.upcoming_supper_clubs.supper_clubs.length > 0 && (
        <MainParent>
          {data.home.upcoming_supper_clubs.supper_clubs[0] && (<ItemCard item={data.home.upcoming_supper_clubs.supper_clubs[0]} />)}
          {data.home.upcoming_supper_clubs.supper_clubs[1] && (<ItemCard item={data.home.upcoming_supper_clubs.supper_clubs[1]} />)}
        </MainParent>
      )}
    </React.Fragment>
  );
};
export default FoodCarouselMobile;
