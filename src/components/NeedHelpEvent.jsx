import {Box, Button, TextareaAutosize, styled, TextField, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import {DatePickerInput} from "rc-datepicker";
import 'rc-datepicker/lib/style.css';
import Modal from '@mui/material/Modal';
import moment from "moment";
import * as _ from "lodash";
import {Formik, Form} from "formik";

const NeedHelpEvent = ({isColor}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const BoxWrapper = styled(Box)(() => ({
        padding: '60px 32px 100px 32px',
        background: `${isColor ? '#101418' : '#FBFBFB'}`,
        borderTop: '0.5px solid #080B0E',

        ".btn": {
            border: 'none !important',
            background: "#C6A87D",
            fontSize: "16px",
            fontWeight: 400,
            width:'100%',
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "capitalize",
            fontFamily: 'ProximaNovaA-Regular',
            padding:'10px'
        },
        ".btn-2": {
            border:'0.25px solid #FBFBFB',
            background: "#080B0E",
            fontSize: "16px",
            width:'100%',
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            textTransform: "capitalize",
            fontFamily: 'ProximaNovaA-Regular',
            padding:'10px'
        },
        ".btn-2:focus": {
            color: "#C6A87D",
            background: "#080B0E",
        },
        ".main-heading": {
            fontWeight: 700,
            fontSize: '20px',
            fontStyle: 'normal',
            fontFamily: 'Bon Vivant',
            lineHeight: "25px",
            letterSpacing: "0.06em",
            color: '#FBFBFB',
            paddingBottom: "8px",
            paddingTop: '0px!important',
            textAlign: 'left'
        },
        ".details": {
            fontWeight: 300,
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontSize: "16px !important",
            lineHeight: "24px",
            color: '#FBFBFB',
            textAlign: 'left',
            marginBottom:'1rem'
        },
        '.need-parent':{
            position:'relative'
        },
        '.need-help-box':{
            display:'block'
        },
        '.need-help-child-box':{
            display:'grid',
            gridTemplate:'repeat(1, 1fr) / repeat(2, 1fr)',
            position:'absolute',
            gap:'8px',
            width:'100%'
        },
        "@media (min-width: 768px) and (max-width:2560px)": {
            display:'none'
        }
    }))
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 398,
        boxShadow: 24,
        '.modal-content': {
            backgroundColor: '#DCD7CB !important',
            boxShadow: '0px 8px 12px rgb(0 0 0 / 16%)',
            padding: '40px 30px 20px',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            backgroundClip: 'paddingBox',
            outline: '0'
        },
        '.form-control': {
            backgroundColor: 'transparent',
            border: '0px',
            borderBottom: '0.25px solid #080B0E',
            borderRadius: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#222222',
            width: '100%'
        },
        '.form-control:focus-visible': {
            outline:'0px'
        },
        '.modal-header': {
            padding: '0px',
            marginBottom: '30px',
            borderBottom: 'none',
            position: 'relative',
            justifyContent: 'flex-start',
        },
        '.modal-header button': {
            padding: '0px',
            border: '0px',
            position: 'absolute',
            right: '0px',
            bottom: '8px',
            background: 'transparent',
            cursor: 'pointer'
        },
        '.schedule-label': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#080B0E',
            marginBottom: '8px',
            display: 'block',
        },
        '.schedule-heading': {
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '30px',
            color: '#080B0E',
            marginBottom: '8px',
            marginTop: '0px',
            display: 'block',
            textAlign: 'center'
        },
        '.mb-3': {
            marginBottom: '1rem'
        },
        ".btn-primary": {
            border: 'none !important',
            background: "#080B0E",
            width: '100% !important',
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB",
            textTransform: "capitalize",
            fontFamily: 'Proxima Nova',
            height: "40px !important",
            marginTop: "0px",
        },
        '.react-datepicker-component .react-datepicker-input input': {
            paddingLeft: '5px',
            color: '#080B0E',
        },
        '.icon-rc-datepicker': {
            color: '#080B0E !important',
        },
        '.react-datepicker-component .react-datepicker-input.is-open':{
            background: 'transparent',
            border: '0px',
            borderRadius: '0px',
        },
        '.react-datepicker-component .react-datepicker-input': {
            background: 'transparent',
            border: '0px',
            borderRadius: '0px',
        },
        '.react-datepicker-component .react-datepicker-input:hover': {
            background: 'transparent',
            border: '0px',
            borderRadius: '0px'
        },
        '.react-datepicker-component .react-datepicker-input.has-value input': {
            color: '#080B0E !important',
        },
    }
    return (
        <React.Fragment>
            <BoxWrapper>
                <Box className="need-parent">
                <Box className='need-help-box'>
                    <Box>
                        <Typography className="main-heading">Need Help?</Typography>
                        <Typography className="details">We respond within 24 business hours.</Typography>
                    </Box>
                    <Box className='need-help-child-box'>
                        <Box>
                            <Button
                                type="submit"
                                className="btn" onClick={handleOpen}>Schedule a Call</Button></Box>
                        <Button
                            type="submit"
                            className="btn-2">Email us</Button>
                    </Box>
                </Box>
                </Box>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Box className="modal-content">
                            <Box className="modal-header">
                                <Typography id="exampleModalLabel" className='schedule-heading modal-title'>Schedule a
                                    call</Typography>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                        onClick={handleClose}>
                                    <CloseIcon/>
                                </button>
                            </Box>
                            <Box className="container-fluid">
                                <Formik
                                    initialValues={{
                                        day: new Date(),
                                        time: new Date().getHours() + ':' + new Date().getMinutes(),
                                        contactNumber: '',
                                        queryMessage: '',
                                    }}
                                    onSubmit={(values) => {
                                        console.log(values.date)
                                        const experienceData = {
                                            ...values,
                                            day: moment(_.get(values, 'day')).format("ddd,DD MMM "),
                                        }
                                        console.log("value===>", values)
                                        console.log("experienceData===>", experienceData)
                                    }}
                                >
                                    {({values, handleChange, handleSubmit, setFieldValue}) => (
                                        <Form onSubmit={handleSubmit}>
                                            <Box className="row">
                                                <Box className="mb-3">
                                                    <label className="schedule-label">Day</label>
                                                    <DatePickerInput
                                                        name="day"
                                                        value={values.day}
                                                        displayFormat="ddd,DD MMM"
                                                        returnFormat="ddd,DD MMM"
                                                        className="form-control"
                                                        onChange={(dateString) => setFieldValue('day', dateString)}
                                                        defaultValue={values.day}
                                                    />
                                                </Box>
                                                <Box className="mb-3  ">
                                                    <label className="schedule-label">Time</label>
                                                    <Box
                                                        className="input-group">
                                                        <TextField type="time" name="time"
                                                                   value={values.time}
                                                                   onChange={handleChange}
                                                                   defaultValue={values.time}
                                                                   className="form-control"
                                                                   autoComplete="off"
                                                                   variant="standard"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       autoCapitalize: true,
                                                                   }}/>
                                                    </Box>

                                                </Box>
                                                <Box className="mb-3">
                                                    <label className="schedule-label">Contact
                                                        Number</label>
                                                    <Box className="form-group">
                                                        <TextField type="tel" name="contactNumber"
                                                                   className="form-control"
                                                                   placeholder="10 digit number"
                                                                   value={values.contactNumber}
                                                                   onChange={handleChange}
                                                                   autoComplete="off"
                                                                   variant="standard"
                                                                   InputProps={{
                                                                       disableUnderline: true,
                                                                       startAdornment: <InputAdornment
                                                                           position="start">91+</InputAdornment>
                                                                   }}/>
                                                    </Box>
                                                </Box>
                                                <Box className="mb-3">
                                                    <label className="schedule-label">Write your query below</label>
                                                    <TextareaAutosize
                                                        name="queryMessage"
                                                        value={values.queryMessage}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                        maxRows={2}
                                                        maxLength={500}
                                                        placeholder="Eg. Menu, Decor, Cancellation  "
                                                    />
                                                </Box>
                                            </Box>
                                            <Box>
                                                <button className="btn btn-primary" type="submit"
                                                        style={{width: '100% !important'}}>Apply
                                                </button>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Box>
                    </Box>
                </Modal>

            </BoxWrapper>

        </React.Fragment>
    )
}
export default NeedHelpEvent;
