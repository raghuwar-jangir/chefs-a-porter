import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dinner from "./../assets/images/dinner1.png"
import { MobileView } from "react-device-detect";
const GalleryCarousel = () => {
    const images = [
        dinner,
        dinner,
        dinner,
        dinner,
        dinner,
    ];
    const BoxWrapper = styled(Box)(() => ({
        ".BoxWrapper": {
            padding: '40px 120px',
        },
        backgroundColor: '#101418',
        ".carousel .thumb": {
            border: '0px',
        },
        ".carousel .thumbs": {
            padding: "0px"
        },
        ".carousel .thumb.selected, .carousel .thumb:hover": {
            border: '1px solid #fff'
        },
        ".carousel.carousel-slider .control-arrow": {
            display: "none"
        },
        ".carousel .thumbs-wrapper": {
            margin: "0px"
        },
        ".sub-div": {
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
        },
        ".heading": {
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "37px",
            color: "#FBFBFB",
            paddingBottom: "20px",
            width: '80%'
        },
        ".gallery-btn": {
            border: '1px solid #fff',
            width: '100%',
            fontSize: "16px",
            fontWeight: 400,
            borderRadius: "0px",
            color: "#fff",
            textTransform: "capitalize",
            height: "55px",
            marginTop: '20px'
        },

        '@media(min-width: 1px) and (max-width: 425px)': {
            ".BoxWrapper": {
                padding: '40px 16px',
            },
            ".heading": {
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "29px",
            },
        }

    }))

    return (
        <BoxWrapper >
            <Box className="BoxWrapper">
                <Box className="sub-div">
                    <Typography className="heading">
                        See what our supper clubs
                        look like</Typography>
                </Box>
                <Carousel
                    showArrows
                    renderIndicator={false}
                    swipeable
                >
                    {images.map((URL, index) => (
                        <div key={URL} className="slide">
                            <img alt="sample_file" style={{ width: '100%' }} src={URL} key={index} />
                        </div>
                    ))}

                </Carousel>
                <MobileView>
                    <Button className="gallery-btn">
                        View Gallery
                    </Button>
                </MobileView>
            </Box>
        </BoxWrapper >
    );
}
export default GalleryCarousel;
