import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, styled } from '@mui/material';

const BoxWrapper = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: '30px 16px',
    backgroundColor: '#101418',

    '.booking-title': {
        fontSize: '20px',
        lineHeight: '24x',
        fontWeight: '600',
        color: '#FBFBFB',
        textAlign: 'center'
    }
    ,
    '.main-parent': {
        paddingTop: '16px',
    }
},
);

const BackButton = styled(Button)({
    borderRadius: '0',
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '400',
    color: '#FBFBFB',
    backgroundColor: '#101418',
    border: '1px solid #C6A87D',
    padding: '16px',
    textTransform: 'capitalize'
})

const StayButton = styled(Button)({
    borderRadius: '0',
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '400',
    color: '#080B0E',
    backgroundColor: '#C6A87D',
    border: '1px solid #C6A87D',
    padding: '16px',
    textTransform: 'capitalize'
})

const BookingpopUp = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Button onClick={handleOpen}> Open </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <BoxWrapper>
                    <Typography className='booking-title' id="keep-mounted-modal-title">
                        Are you sure you want to cancel your booking?
                    </Typography>
                    <Grid container spacing={1} className='main-parent'>
                        <Grid item xs={6}>
                            <BackButton
                                fullWidth
                                disableElevation
                                disableFocusRipple
                                variant="contained"
                            >
                                Go back
                            </BackButton>
                        </Grid>
                        <Grid item xs={6}>
                            <StayButton
                                fullWidth
                                disableFocusRipple
                                disableElevation
                                variant="contained"
                            >
                                Stay on page
                            </StayButton>
                        </Grid>
                    </Grid>
                </BoxWrapper>
            </Modal>
        </React.Fragment >
    );
}

export default BookingpopUp;