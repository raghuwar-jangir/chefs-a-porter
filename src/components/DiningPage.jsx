import { Box, Stack, styled, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'gatsby';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import diningPicture from './../assets/images/diningPicture.png'
import DiningProgress from './DiningProgress';


const MainContentBox = styled(Box)({
    backgroundColor: '#101418',
    padding: '32px 0px',
    '.dining-title': {
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '29px',
        padding: '8px 16px',
        color: '#FBFBFB'
    },
    '.dining-content': {
        padding: '16px 18px',
    }
})

const DiningPage = () => {
    return (
        <React.Fragment>
            <MainContentBox>
                <Typography className="dining-title">
                    What We Cook For
                </Typography>
                <Link className='dining-more' to='/'>
                    Know more <KeyboardArrowRightIcon fontSize='small' />
                </Link>
                <img src={diningPicture} alt='' width={'100%'} />
                <Stack className='dining-content' direction="row" spacing={2}>
                    <DiningProgress title='Conscious Dining' />
                    <DiningProgress title='Championing Chefs' />
                    <DiningProgress title='Community' />
                </Stack>
            </MainContentBox>
        </React.Fragment>
    )
}

export default DiningPage;