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
    boxShadow: 24,
    padding: '16px',
    backgroundColor: '#101418',
    '.navigation-title': {
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: '600'
    },
});
const SubmitButton = styled(Button)({
    borderRadius: '0',
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '400',
    color: '#FBFBFB',
    backgroundColor: '#101418',
    border: '1px solid #C6A87D',
    padding: '16px',
    marginTop: '16px',
    textTransform: 'capitalize',
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



const NavigationPopUp = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <React.Fragment>
            <Button onClick={handleOpen}> navigation </Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <BoxWrapper>
                    <Typography className='navigation-title' id="keep-mounted-modal-title">
                        Allow “Chefs-a-Porter” to access this device’s location?
                    </Typography>
                    <Box>
                        <SubmitButton
                            fullWidth
                            disableElevation
                            disableFocusRipple
                            variant="contained"
                        >
                            Only this time
                        </SubmitButton>
                        <StayButton
                            fullWidth
                            disableFocusRipple
                            disableElevation
                            variant="contained"
                        >
                            Stay on page
                        </StayButton>
                    </Box>
                </BoxWrapper>
            </Modal>
        </React.Fragment>
    )
}

export default NavigationPopUp;