import React from 'react'
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import FoodDetail from './FoodDetail';
import testImage from './../assets/images/testImage.png';
import testImage2 from './../assets/images/testImage2.png';



const MainParent = styled(Box)({
    '.parent-grid': {
        paddingTop: "30px"
    },
})

const FoodDetailing = () => {
    return (
        <React.Fragment>
            <MainParent>
                <Grid className='parent-grid' container spacing={2}>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage} />
                    </Grid>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage2} />
                    </Grid>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage} />
                    </Grid>
                    <Grid item xs={12} md={3} xl={3}>
                        <FoodDetail image={testImage2} />
                    </Grid>
                </Grid>
            </MainParent>
        </React.Fragment >
    )
}

export default FoodDetailing;