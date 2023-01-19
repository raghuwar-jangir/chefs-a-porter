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
    padding: '40px 16px',
    backgroundColor: '#DCD7CB',
    '.request-title': {
        fontSize: '20px',
        lineHeight: '24px',
        fontWeight: '600'
    },
    '.request-description': {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: '400',
        paddingTop: "4px"
    }
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



const RequestPopUp = () => {

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
                    <Typography className='request-title' id="keep-mounted-modal-title">
                        Your request has been recived
                    </Typography>
                    <Typography className='request-description' id="keep-mounted-modal-description">
                        Our team will contact you within 24hrs
                    </Typography>
                    <Box>
                        <SubmitButton
                            fullWidth
                            disableElevation
                            disableFocusRipple
                            variant="contained"
                        >
                            Okay
                        </SubmitButton>
                    </Box>
                </BoxWrapper>
            </Modal>
        </React.Fragment>
    )
}

export default RequestPopUp;