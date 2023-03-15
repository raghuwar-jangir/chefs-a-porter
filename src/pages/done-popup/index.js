import React from "react";
import Modal from "@mui/material/Modal";
import {Box} from "@mui/material";
import "../../assets/styles/fontStyle.css";


const DonePopUp = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 358,
        height: 340,
        boxShadow: 24,
        '.modal-content': {
            backgroundColor: '#101418!important',
            boxShadow: '0px 8px 12px rgb(0 0 0 / 16%)',
            padding: '40px 20px',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            backgroundClip: 'paddingBox',
            outline: '0'
        },
        '.modal-body': {
            padding: '0px'
        },
        '.done-popup h5': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '4px',
            marginTop: '0px',
            textAlign: 'center'
        },
        '.done-popup p': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginBottom: '30px',
            marginTop: '0px',
            textAlign: 'center'
        },
        '.done-popup button, .done-popup1 .btn': {
            border: '1px solid #C6A87D',
            background: '#C6A87D',
            padding: '14.5px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            borderRadius: '0px',
            cursor: 'pointer',
            width: '100%',
        },
        '.no': {
            background: '#101418 !important',
            color: '#FBFBFB !important',
            border: '1px solid #C6A87D !important',
        },
        '.done-popup1 h5': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB',
            marginTop: '0px',
            textAlign: 'center'
        },
        '.done-popup1 div': {
            display: 'flex',
            gap: '16px'
        },

        "@media (min-width: 1px) and (max-width:400px)": {
            width: '310px ',
        },
        "@media (min-width: 400px) and (max-width:425px)": {
            width: '358px ',
        },
    };

    return (
        <React.Fragment>
            <button onClick={handleOpen}>Done PopUp</button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div className="modal-content">
                        <div className="modal-body gettouch">
                            <div className="container-fluid">
                                <div className="done-popup">
                                    <h5>Your request has been recived</h5>
                                    <p>Our team will contact you within 24hrs</p>
                                    <button className="btn">Okay</button>
                                </div>
                                <div className="done-popup1">
                                    <h5>Would you like to recieve your invite on Whatsapp?</h5>
                                    <div>
                                        <button type="button" className="btn no">No</button>
                                        <button type="button" className="btn">Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default DonePopUp;
