
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
    console.log('AllData', list)
    return(
        <Box className="available-experiences">
            <Typography className="chef-header">Available Experiences</Typography>
            <Grid container spacing={5}>
                                     {list && list.map((item) => (
                                        <Grid item xl={4} md={4} sm={6} xs={12}>
                                            <AvlExperienceCarousel
                                                image={item?.user?.picture}
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
    )
}

export default InfiniteScrollData