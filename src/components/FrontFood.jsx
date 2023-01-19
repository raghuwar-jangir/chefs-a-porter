import React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';
import frontImage from './../assets/images/frontFood.jpg'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { MobileView, isMobile } from 'react-device-detect';
import frontImage2 from './../assets/images/frontFoodImg.png'


const FoodMainBox = styled(Box)({
    position: 'relative',
    '.home-stack': {
        position: 'absolute',
        bottom: '0px',
        width: '100%',
        padding: '17.6px',
        display: 'flex',
        alignItems: 'center',
        // width: '100%',
        justifyContent: 'center',
        background: 'rgba(8, 11, 14, 0.8)',
    },
    '.food-title': {
        color: '#FBFBFB',
        fontWeight: '300',
        fontStyle: 'italic',
        lineHeight: '17px'
    }
})

const FrontFood = () => {
    return (
        <React.Fragment>
            {/* <MobileView> */}
            <FoodMainBox>
                {isMobile ?
                    (
                        <Box >
                            <img src={frontImage} alt='front' width={'100%'} style={{ verticalAlign: 'top' }} />
                        </Box>
                    )
                    : (
                        <Box id="img2">
                            <img src={frontImage2} width={'100%'} height={'970px'} alt='front' style={{ verticalAlign: 'top' }} />
                        </Box>
                    )
                }
                <Stack
                    className='home-stack'
                    direction="row"
                    divider={<FiberManualRecordIcon sx={{ fontSize: '6px', color: '#C6A87D' }} />}
                    spacing={2}
                    gap={'16px'}
                >
                    <Typography className='food-title'>People</Typography>
                    <Typography className='food-title'> Food </Typography>
                    <Typography className='food-title'> Experience </Typography>
                </Stack >
            </FoodMainBox >
            {/* </MobileView> */}

        </React.Fragment >
    )
}

export default FrontFood;