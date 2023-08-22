import { Box, Button, styled, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import Privee from '../../components/PriveeOurChefs';
import Footer from '../../components/Footer';
import FoodCard from '../../components/FoodCard';
import Navbar from '../../components/NavbarComponent';
import NeedHelp from '../../components/NeedHelp';
import FooterEnd from '../../components/FooterEndSection';
import CmsContext from '../../context/CmsContext';
import * as _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import configuration from '../../configuration';
import axios from 'axios';

const OurChefsPage = () => {
  const { data } = useContext(CmsContext);

  const [page, setPage] = useState(1);
  const [chefs, setChefs] = useState([]);
  const [hasMoreChefs, setHasMoreChefs] = useState(false)

  const BoxWrapper = styled(Box)(() => ({
    background: '#080B0E',
    '.main-parent-box': {
      position: 'relative',
    },
    '.main-heading': {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '0.06em',
      textAlign: 'center',
      color: '#FBFBFB',
      padding: '120px 0px 0px 0px',
      fontFamily: 'Bon Vivant',
    },
    '.chef-content': {
      padding: '40px 120px',
    },
    '.footer-shadow': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      bottom: 0,
      padding: '120px 0px',
      textAlign: 'center',
      background:
        'linear-gradient(180deg,rgba(8, 11, 14, 0)-97.92%,rgba(8,11,14,0.6)45.9%)',
    },
    '.parent-view-button': {
      textAlign: 'center',
      padding: '0px 16px 0px 16px',
      marginTop: '40px',
    },
    '.view-more': {
      fontFamily: 'Proxima Nova Alt',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '19px',
      width: '100%',
      color: '#FBFBFB',
      background: 'transparent',
      border: '0.5px solid #C6A87D',
      padding: '10px',
      borderRadius: '1px',
      textTransform: 'math-auto',
    },
    '@media (min-width: 767px) and (max-width:2560px)': {
      '.parent-view-button': {
        display: 'none',
      },
    },
    '@media (min-width: 768px) and (max-width:990px)': {
      '.chef-content': {
        padding: '40px 0px',
      },
      '.main-heading': {
        padding: '82px 0px 0px 0px',
      },
    },
    '@media (min-width: 1px) and (max-width:767px)': {
      '.chef-content': {
        padding: '40px 0px',
      },
      '.main-heading': {
        display: 'none',
      },
      '.footer-shadow': {
        display: 'none',
      },
    },
  }));

  useEffect(() => {
    fetchChefs();
  }, [])

  const fetchChefs = async () => { 
    
    const response = await axios.get(configuration.API_BASEURL + `/users/chefs?page=${page}`);
    console.log(response, 'respo')
    setChefs((prev) => ([...prev, ...response.data.results]));
    setHasMoreChefs(page < response.data.totalPages)
    let x = page+1;
    setPage(x);
  }

  return (
    <React.Fragment>
      <BoxWrapper>
        {!_.isEmpty(data?.our_chefs) && (
          <>
            <Navbar heading="Our Chefs" />
            <Box className="main-parent-box">
              <Typography className="main-heading">
                {data.our_chefs.our_chefs.title}
              </Typography>
              <Box className="chef-content">
                {chefs.length > 0 && (<>
                  <InfiniteScroll
                    dataLength={chefs.length}
                    next={fetchChefs}
                    hasMore={hasMoreChefs} // Replace with a condition based on your data source
                    loader={<p>Loading...</p>}
                    endMessage={<p>No more data to load.</p>}
                  >
                    <Privee chefs={chefs}/>
                  </InfiniteScroll>
                  <Box className="parent-view-button">
                      <Button fullWidth className="view-more" variant="contained">
                        View All Chefs
                      </Button>
                  </Box>
                </>)}
              </Box>
              {/*<Box className="footer-shadow">*/}
              {/*</Box>*/}
            </Box>
            <NeedHelp
              title={data.our_chefs.footer.common_footer.details.title}
              description={data.our_chefs.footer.common_footer.details.description}
              button_call={data.our_chefs.footer.common_footer.details.button1_text}
              button_email={data.our_chefs.footer.common_footer.details.button2_text}
            />
            <FoodCard />
            <Footer />
            <FooterEnd />
          </>
        )}
      </BoxWrapper>
    </React.Fragment>
  );
};
export default OurChefsPage;
