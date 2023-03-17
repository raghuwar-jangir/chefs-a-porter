import {Box, Button, TextareaAutosize, styled, TextField, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React, {useContext} from "react";
import InputAdornment from "@mui/material/InputAdornment";
import {DatePickerInput} from "rc-datepicker";
import 'rc-datepicker/lib/style.css';
import Modal from '@mui/material/Modal';
import moment from "moment";
import * as _ from "lodash";
import {Formik, Form} from "formik";
import '../assets/styles/fontStyle.css'
import CmsContext from "../context/CmsContext";

const NeedHelp = ({isColor}) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const BoxWarraper = styled(Box)(() => ({
        padding: '40px 120px',
        display: 'flex',
        justifyContent: 'space-between',
        background: `${isColor ? '#101418' : '#FBFBFB'}`,
        borderTop: '0.5px solid #080B0E',
        ".btn": {
            // border: '0.25px solid #fff',
            border: 'none !important',
            background: "#080B0E !important",
            width: '214px !important',
            fontSize: "16px !important",
            fontWeight: '400',
            lineHeight: "19px",
            borderRadius: "0px",
            color: "#FBFBFB !important",
            // color: `${isColor ? '#FBFBFB' : '#FBFBFB'}`,
            textTransform: "capitalize !important",
            fontFamily: 'ProximaNovaA-Regular',
            height: "55px !important",
            marginTop: "0px !important",
        },
        ".btn:hover": {
            color: "#C6A87D !important",
            background: "#080B0E !important",
        },
        ".btn-2": {
            border: `${isColor ? '0.25px solid #080B0E' : '0.25px solid #080B0E'}`,
            background: "#FBFBFB",
            width: '214px !important',
            fontSize: "16px !important",
            // fontWeight: '400',
            lineHeight: "19px !important",
            borderRadius: "0px !important",
            color: "#080B0E !important",
            textTransform: "capitalize !important",
            fontFamily: 'ProximaNovaA-Regular',
            height: "55px !important",
            marginLeft: '24px !important ',
            marginRight: '150px !important'
        },
        ".btn-2:hover": {
            color: "#C6A87D !important",
            background: "#FBFBFB !important",
        },
        ".main-heading": {
            fontWeight: '700',
            fontSize: '24px',
            fontStyle: 'normal',
            fontFamily: 'Bon Vivant',
            lineHeight: "30px",
            letterSpacing: "0.06em",
            color: '#080B0E',
            // color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
            paddingBottom: "8px",
            paddingTop: '0px!important',
            textAlign: 'left'
        },
        ".details": {
            fontWeight: '300',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontSize: "16px !important",
            lineHeight: "24px",
            color: '#080B0E',
            textAlign: 'left',
            // color: `${ isColor? '#FBFBFB' : '#080B0E' }`,
            paddingBottom: "0px"
        },
        "@media (min-width: 1px) and (max-width:425px)": {
            ".details": {
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
                // color: "#FBFBFB",
                paddingBottom: "20px"
            },
            ".btn": {
                width: '50%',
            },
            ".btn-2": {
                width: '48%',
            }
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            '.btn-2': {
                marginLeft: '-1px !important',
                marginRight: '0px !important',
            }
        },
        "@media (min-width: 582px) and (max-width:768px)": {
            padding: '40px 30px', ".details": {
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
                // color: "#FBFBFB",
                paddingBottom: "20px"
            },

        },
        "@media (min-width: 1px) and (max-width:767px)": {
            display: 'none'
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
            // position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            // width: '100%',
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
            outline: '0px'
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
        '.react-datepicker-component .react-datepicker-input.is-open': {
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

    const {data} = useContext(CmsContext);

    return (

        <React.Fragment>
            <BoxWarraper>
                {
                    !_.isEmpty(data) &&
                    <React.Fragment>
                        <Box md={6} sm={6} xs={12} xl={7}>
                            <Typography className="main-heading">{data.home_footer.desktop_title}</Typography>
                            <Typography className="details">{data.home_footer.desktop_description}</Typography>
                        </Box>
                        <Box md={6} sm={6} xs={12} xl={7}>
                            <Button
                                type="submit"
                                className="btn" onClick={handleOpen}>{data.home_footer.desktop_button_call}</Button>
                            <Button
                                type="submit"
                                className="btn-2">{data.home_footer.desktop_button_email}</Button>
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
                                        <Typography id="exampleModalLabel" className='schedule-heading modal-title'>Schedule
                                            a
                                            call</Typography>
                                        <button type="button" data-bs-dismiss="modal" aria-label="Close"
                                                className="close"
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
                                                            <label className="schedule-label">Write your query
                                                                below</label>
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
                    </React.Fragment>
                }
            </BoxWarraper>

        </React.Fragment>
    )
}
export default NeedHelp