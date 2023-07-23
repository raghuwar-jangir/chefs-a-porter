import { Box, Typography, styled } from '@mui/material';
import React from 'react'
import reebok from '../../assets/images/rebook.png';

const ItemCard = ({item}) => { 
    return <>
    <img className="img" src={item.picture} />
    {item.details.is_featured && (
        <Box className="rebook">
        <img className="rebook-img" src={reebok} />
        <Typography className="rebook-title">Rebook</Typography>
        </Box>
    )}
    <Box className="name-box">
        <Typography className="chef-title">
        {item.name}
        </Typography>
        <Box className="chef-details">
        {item.details.tags.map((tagsItem, index) => {
            return (
            <span>
                {tagsItem}
                {index !== item.details.tags.length - 1 && (
                <span className="line">|</span>
                )}
            </span>
            );
        })}
        </Box>
    </Box></>
 }

export default ItemCard;