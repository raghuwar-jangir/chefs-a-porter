import React, {useContext, useState, useEffect, useRef, useMemo, useCallback} from 'react';
import {Box, Typography} from '@mui/material';
import {styled} from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import '../assets/styles/searchBar.css'
import "../assets/styles/fontStyle.css"
import UsersContext from "../context/UsersContext";
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import {Grid, ImageListItem,} from "@mui/material";
import * as _ from 'lodash'
import Cookies from "js-cookie";

const MainContentBox = styled(Box)({
    position: 'relative',
    cursor: 'pointer',
    '.addons-parent': {
        padding: '12px 8px',
        width: 'auto',
        height: 'auto',
        backgroundColor: '#101418',
    },
    '.partner': {
        border: '0px',
        background: '#DCD7CB',
        margin: '40px 20px',
    },
    '.addons-img': {
        height: '240px',
        objectFit: 'cover',
        width: '100%',
        position: 'relative'
    },
    '.sub-box': {
        position: 'absolute',
        backgroundColor: '#101418',
        width: '100%',
        top: '0px', left: '0px'
    },
    '.top-box': {
        fontFamily: 'Proxima Nova',
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '15px',
        padding: '1px 12px',
        textAlign: 'right',
        letterSpacing: '0.02em',
        color: '#C6A87D',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center'
    },
    '.title': {
        fontFamily: 'Bon Vivant',
        fontStyle: 'normal',
        // fontWeight: 700,
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.06em',
        color: '#FBFBFB',
    },
    '.trending-icon': {
        width: '16px',
        height: '16px',
        paddingRight: '5px'
    },
    '.addons-box': {
        display: 'flex',
        alignitems: 'center',
        justifyContent: 'space-between'
    },
    '.checkBox': {
        height: '16px',
        width: '16px',
        cursor:'pointer'
    },
    "@media (min-width: 1px) and (max-width:425px)": {
        '.addons-parent': {
            padding: '6px',
            width: 'auto',
            height: 'auto',
            backgroundColor: '#101418',
        },
        '.title': {
            fontFamily: 'Bon Vivant',
            fontStyle: 'normal',
            // fontWeight: 700,
            fontSize: '12px',
            lineHeight: '20px',
            letterSpacing: '0.06em',
            color: '#FBFBFB',
        },
        '.sub-box': {
            width: '100%',
        },
        '.top-box': {
            fontFamily: 'Proxima Nova',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '15px',
            padding: '1px 12px',
            textAlign: 'right',
            letterSpacing: '0.02em',
            color: '#C6A87D',
        }
    }

})

const AddonsCard = (props) => {

    const {
        addOnsData,
        setAddonsId,
        addonsId,
        setIsUpdateBooking
    } = useContext(UsersContext);
    console.log('addOnsData',addOnsData)
    const handleCheckboxChange = useCallback((event) => {
        const {id, checked} = event.target;
        if (checked) {
            setAddonsId([...addonsId, {id}]);
        } else {
            setAddonsId(addonsId.filter((item) => item.id !== id));
        }
        setIsUpdateBooking(true)
    }, [addonsId]);

    const selectedAddonsId = addonsId.map((item) => item.id);

    return (
        <React.Fragment>
            <MainContentBox>
                <Grid container className="addon-grid" rowSpacing={2}
                      columnSpacing={2}>
                    {
                        addOnsData.map((item, index) => {
                            return (
                                <Grid item xl={4} md={4} sm={6} xs={6} key={index}>
                                    {item?.link ? (
                                        <a href={item?.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt="saffImage" style={{verticalAlign: 'top'}} width={'100%'}
                                        className='addons-img'/></a>
                                    ) : (
                                        <img src={item.image} alt="saffImage" style={{verticalAlign: 'top'}} width={'100%'}
                                         className='addons-img'/>
                                    )}
                                    
                                    <Box className='addons-parent'>
                                        <div className="addons-box">
                                            <Typography className='title'>
                                                {item.name}
                                            </Typography>
                                            {/* <input type={"checkbox"}
                                                   checked={selectedAddonsId.includes(item.id)}
                                                   value={item.id}
                                                   id={item.id}
                                                   className="checkBox" onChange={handleCheckboxChange}/> */}
                                        </div>
                                        {
                                            props.isLabelShow &&
                                            <Box className='sub-box'>
                                                <Box className='top-box'>
                                                    <ElectricBoltIcon className="trending-icon"/> Trending
                                                </Box>
                                            </Box>
                                        }
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </MainContentBox>
        </React.Fragment>
    )
}

export default AddonsCard;