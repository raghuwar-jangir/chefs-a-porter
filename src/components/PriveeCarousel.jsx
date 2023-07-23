import React, { useContext, useLayoutEffect, useState } from 'react';
import { Box, Button, Grid, Hidden, styled, Typography } from '@mui/material';
import { Link } from 'gatsby';
import '../assets/styles/fontStyle.css';
import CmsContext from '../context/CmsContext';
import * as _ from 'lodash';
import PriveeCarouselDesktop from './PriveeCarousel/desktop';
import PriveeCarouselMobile from './PriveeCarousel/mobile';

const MainParent = styled(Box)({
  '.continue-browsing-box': {
    background: '#080B0E',
    padding: '80px 120px',
    color: '#fff',
  },
  '.main-heading': {
    fontSize: '24px',
    lineHeight: '24px',
    fontFamily: 'Bon Vivant',
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: '0.06em',
    color: '#FBFBFB',
  },
  '.more-button': {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  '.parent-view-button': {
    width: '16.66666667%',
    textAlign: 'end',
    marginTop: '20px',
    marginTop: 'none',
    display: 'contents',
  },
  '.view-more': {
    fontFamily: 'ProximaNovaA-Regular',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'right',
    color: '#C6A87D',
    width: '100%',
    padding: '0px',
    border: '0px',
    background: 'none',
    textTransform: 'math-auto',
  },
  '.btn-view': {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
    position: 'relative',
  },
  '.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:hover': {
    background: 'none',
  },
  '.name-box': {
    padding: '16px 20px',
    background: '#101418',
    position: 'relative',
    bottom: '12%',
  },
  '.lguFiu': {
    height: '466.641px !important',
  },
  '.chef-title': {
    display: 'flex',
    placeContent: 'flex-start',
    fontSize: '20px',
    lineHeight: '25px',
    marginBottom: '6px',
    fontFamily: 'Bon Vivant ',
    fontWeight: 700,
  },
  '.chef-details': {
    textAlign: 'left',
    fontSize: '16px',
    lineHeight: '19px',
    fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: 250,
    letterSpacing: '0.02em',
    color: 'rgba(198, 168, 125, 0.8)',
    position: 'relative',
    paddingTop: '6px',
  },
  '.line': {
    position: 'relative',
    width: '1px',
    height: '100%',
    margin: '0 5px',
  },
  '.rebook-title': {
    fontFamily: 'Proxima Nova Alt',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px',
    textAlign: 'right',
    letterSpacing: '0.02em',
    color: '#C6A87D',
    padding: '5px 20px 5px 0px',
  },
  '.rebook-img': {
    objectFit: 'contain',
    marginRight: '4px',
    width: '12px',
    height: '16px',
    paddingTop: '5px',
  },
  '.rebook': {
    position: 'absolute',
    background: '#101418',
    display: 'flex',
    placeContent: 'flex-end',
    top: '0px',
    width: '100%',
  },
  '.link': {
    textDecoration: 'none',
    color: '#C6A87D',
  },
  '.img': {
    height: '426px',
    objectPosition: 'top',
    objectFit: 'cover',
    width: '100%',
  },
  '@media(min-width: 431px) and (max-width: 768px)': {
    '.continue-browsing-box': {
      padding: '40px 10px',
    },
    '.img': {
      height: '553px',
    },
    '.main-heading': {
      fontSize: '20px',
      lineHeight: '25px',
    },
    '.heading-details': {
      fontSize: '14px',
      lineHeight: '17px',
      padding: '9px 0px 20px 0px',
    },
    '.chef-title': {
      placeContent: 'flex-start',
      fontSize: '14px',
      marginBottom: '0px',
      lineHeight: '17px',
    },
    '.chef-details': {
      textAlign: 'left',
      fontSize: '14px',
      lineHeight: '17px',
    },
    '.name-box': {
      padding: '16px 8px',
    },
    '.rebook-title': {
      fontSize: '12px',
      lineHeight: '15px',
    },
  },
  '@media(min-width: 1px) and (max-width: 431px)': {
    '.img': {
      height: '553px',
    },
    '.continue-browsing-box': {
      padding: '40px 10px',
    },
    '.main-heading': {
      fontSize: '24px',
      lineHeight: '30px',
      letterSpacing: '0.06em',
    },
    '.heading-details': {
      fontSize: '14px',
      lineHeight: '17px',
      padding: '9px 0px 15px 0px',
    },
    '.chef-title': {
      placeContent: 'flex-start',
      fontSize: '20px',
      lineHeight: '17px',
      marginBottom: '10px',
    },
    '.chef-details': {
      textAlign: 'left',
      fontSize: '16px',
      lineHeight: '15px',
    },
    '.name-box': {
      padding: '16px 8px',
      marginBottom: '20px'
    },
    '.rebook-title': {
      fontSize: '12px',
      lineHeight: '15px',
    },
    '.swiper-button-next': {
      display: 'none',
    },
    '.swiper-button-prev': {
      display: 'none',
    },
    '.swiper': {
      height: '1180px',
    },
    '.view-more': {
      border: '0.5px solid #C6A87D',
      width: '100%',
      fontSize: '16px',
      lineHeight: '19px',
      fontWeight: 600,
      color: 'white',
      fontFamily: 'ProximaNovaA-Regular',
      padding: '10px',
      textTransform: 'math-auto',
      borderRadius: '1px',
      marginTop: '15px',
    },
  },
});

const PriveeCarousel = (props, { title, subTitle, isButtonShow = true }) => {
  const { data } = useContext(CmsContext);

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return (
    <React.Fragment>
      {!_.isEmpty(data?.home) && (
        <MainParent>
          <Box className="continue-browsing-box">
            <Box className="btn-view">
              <Box>
                <Typography className="main-heading mt-0">
                  {data.home.chefs_private_dining.title}
                </Typography>
              </Box>
              {size[0] > 430 && (
                <Box className="more-button">
                  <Button fullWidth className="view-more" variant="contained">
                    <Link className="link" to="/our-chefs">
                      View All
                    </Link>
                  </Button>
                </Box>
              )}
            </Box>
            {size[0] > 430 ? <PriveeCarouselDesktop /> : <PriveeCarouselMobile />}
            {size[0] <= 430 && (
              <Box className="more-button">
                <Button fullWidth className="view-more" variant="contained">
                  View More Chefs
                </Button>
              </Box>
            )}
          </Box>
        </MainParent>
      )}
    </React.Fragment>
  );
};
export default PriveeCarousel;
