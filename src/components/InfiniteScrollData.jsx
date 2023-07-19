
import React, {useContext, useState, useEffect, useRef} from "react";
import {Box, styled, Grid, Typography, Select, MenuItem, TextField, TextareaAutosize} from "@mui/material";
import {navigate} from "gatsby";
import AvlExperienceCarousel from "./AvlExperienceCarousel";
import Cookies from 'js-cookie';

const InfiniteScrollData = ({allData, pagelimit=9})=>{    
    const [list, setList] = useState([...allData.slice(0, pagelimit)]);
    const [loadMore, setLoadMore] = useState(false);
    const [hasMore, setHasMore] = useState(allData.length > 10);
    const loadRef = useRef();
    const handleObserver = (entities) => {
        const target = entities?.[0];
        if (target.isIntersecting) {
          setLoadMore(true);
        }
      };
    
    useEffect(() => {
        var options = {
          root: null,
          rootMargin: "20px",
          threshold: 1.0,
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loadRef.current) {
          observer.observe(loadRef.current);
        }
      }, []);
      useEffect(() => {
        if (loadMore && hasMore) {
          const currentLength = list.length;
          const isMore = currentLength < allData.length;
          const nextResults = isMore
            ? allData.slice(currentLength, currentLength + pagelimit)
            : [];
          setList([...list, ...nextResults]);
          setLoadMore(false);
        }
      }, [loadMore, hasMore]);

      useEffect(() => {
        const isMore = list.length < allData.length;
        setHasMore(isMore);
      }, [list]);

      const BoxWarraper = styled(Box)(() => ({
        
        "@media (min-width: 1px) and (max-width:431px)": {
          ".chef-header":{
            marginBottom: '0'
          },
          ".available-experiences-row": {
            width: '100%',
            marginTop: '0',
            marginLeft: '0',
          },
          ".available-experiences-col": {
            padding: '20px 10px 0px !important'
          },
        },
    })) 
    return(
      <BoxWarraper>
        <Box className="available-experiences">
          <Typography className="chef-header">Available Experiences</Typography>
          <Grid container spacing={5} className="available-experiences-row">
            {list && list.map((item) => (
              <Grid item xl={4} md={4} sm={6} xs={12} className="available-experiences-col">
                  <AvlExperienceCarousel
                      image={item?.cover_picture}
                      title={item?.title} description={`by ${item?.user?.name}`}
                      onClick={() => {
                          navigate(`/event-details/${item?.id}`);
                          Cookies.set('eventIdValue', JSON.stringify(item?.id));
                      }}
                  />
              </Grid>
            ))}
            <Box className="btn-outer">
              <div ref={loadRef}>
                {hasMore ? <button className="more_btn">Loading...</button> : <button  className="more_btn">No more results</button>}
              </div>
            </Box>
          </Grid>
        </Box>
      </BoxWarraper>
    )
}

export default InfiniteScrollData