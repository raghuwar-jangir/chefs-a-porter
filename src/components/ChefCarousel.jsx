import React, { useContext } from "react";
import { Box, styled, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import masterChef from "./../assets/images/masterChef.png"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ChefCarousel = () => {
    const images = [
        {
            img: masterChef,
            name: "Chef Karan Thakker",
            details: "Speakeasy, Banglore East",
        },
        {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        },
        {
            img: masterChef,
            name: "Chef Karan Thakker",
            details: "Speakeasy, Banglore East",
        },
        {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        },
        {
            img: masterChef,
            name: "Chef Karan Thakker",
            details: "Speakeasy, Banglore East",
        },
        {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        }, {
            img: masterChef,
            name: "Chef Mako",
            details: "Surburbia, Banglore East",
        },

        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
        // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
    ];
    const BoxWrapper = styled(Box)(() => ({
        // padding: '40px 120px',
        // backgroundColor: '#101418',
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
        ".slide": {
            width: "250px",
            paddingRight: '8px',
        },
        ".chef-name": {
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            color: "#101418"
        },
        ".chef-details": {
            fontWeight: 300,
            fontSize: "12px",
            lineHeight: "15px"
        },
    }))
    function LeftArrow() {
        const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);
        return (
            <div
                style={{ zIndex: "1", margin: "10rem 0px 0px 0px", position: 'absolute' }}
                disabled={isFirstItemVisible}
                onClick={() => scrollPrev()}
                id="left">
                <ChevronLeftIcon />
            </div>
        );
    }

    function RightArrow() {
        const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

        return (
            <div
                style={{ zIndex: "1", margin: "10rem 10px 0px 0px" }}
                disabled={isLastItemVisible}
                onClick={() => scrollNext()}
                id="right"
            >
                <ChevronRightIcon />
            </div>
        );
    }
    return (
        <BoxWrapper >
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
                {images.map((URL, index) => (
                    <Box key={URL} className="slide">
                        <img alt="sample_file" style={{ width: '100%', border: '1px solid', verticalAlign: 'top' }} src={URL.img} key={index} />
                        <Box sx={{ background: '#DCD7CB', padding: '8px' }}>
                            <Typography className="chef-name">{URL.name}</Typography>
                            <Typography className="chef-details">{URL.details}</Typography>
                        </Box>
                    </Box>
                ))}
            </ScrollMenu>
        </BoxWrapper>
    );
}
export default ChefCarousel;
