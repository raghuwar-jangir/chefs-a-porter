import React, {useRef, useState} from "react";
import Modal from "@mui/material/Modal";
import {Box, Grid, TextField, Tooltip, Typography} from "@mui/material";
import "../../assets/styles/fontStyle.css";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import moment from "moment/moment";
import gCal from "../../assets/images/date-gold.png";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from '@mui/icons-material/Edit';
import * as _ from "lodash";
import {Formik, Form} from "formik";
import {DatePickerInput} from "rc-datepicker";


const GetInTouch = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let [course1, setCourse1] = useState(1);
    let [course2, setCourse2] = useState(1);
    let courseQty1 = 2;
    let courseQty2 = 3;


    function incrementCount1() {
        if (course1 < courseQty1) {
            course1 = course1 + 1;
            setCourse1(course1);
        }
    }

    function decrementCount1() {
        if (course1 > 1) {
            course1 = course1 - 1;
            setCourse1(course1);
        }
    }

    function incrementCount2() {
        if (course2 < courseQty2) {
            course2 = course2 + 1;
            setCourse2(course2);
        }
    }

    function decrementCount2() {
        if (course2 > 1) {
            course2 = course2 - 1;
            setCourse2(course2);
        }
    }

    const disabledStyle = {
        opacity: 0.5,
    }

    const positionRef = useRef({
        x: 0,
        y: 0,
    });
    const popperRef = useRef(null);
    const areaRef = useRef(null);

    const handleMouseMove = (event) => {
        positionRef.current = {x: event.clientX, y: event.clientY};

        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
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
        '.modal-header': {
            padding: '0px',
            marginBottom: '30px',
            borderBottom: 'none',
            position: 'relative',
            justifyContent: 'space-between',
            display: 'flex'
        },
        '.modal-title': {
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
        ".close": {
            border: 'none !important',
            background: "transparent",
            borderRadius: "0px",
            color: "#FBFBFB",
            cursor: 'pointer'
        },
        '.experience-date p': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '20px',
            color: '#FBFBFB',
            marginBottom: '16px',
            marginTop: '0px',
        },
        '.experience-date': {
            padding:'0px 12px'
        },
        '.edit-date': {
            position: 'relative',
        },
        '.modal-content .label': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            marginBottom: '8px',
            marginTop: '0px',
        },
        '.form-control': {
            backgroundColor: 'transparent',
            border: '0px',
            borderRadius: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '19px',
            color: "#FBFBFB",
            marginBottom: '0px',
            marginTop: '0px',
            width: '100%'
        },
        '.bookingBox': {
            marginTop: '40px',
        },
        '.border-bottom': {
            borderBottom: '0.25px solid #FBFBFB !important',
        },
        '.grid-box': {
            borderLeft: '10px solid #101418',
            background: '#080B0E',
            padding: '16px',
        },
        '.gettouch .viewbreak': {
            marginTop: '40px'
        },
        '.gettouch .viewbreak .col-lg-12': {
            display: 'flex',
            padding: '0px',
            placeItems: 'center',
        },
        '.viewbreak h5': {
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '31px',
            lineHeight: '29px',
            color: '#FBFBFB',
            marginRight: '8px',
            marginTop: '0px',
            marginBottom: '0.5rem',
        },
        '.viewbreak span': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '250',
            fontSize: '16px',
            lineHeight: '19px',
            color: '#FBFBFB',
            marginBottom: '0px',
            marginTop: '0px',
        },
        '.i': {
            marginLeft: '8px',
            fontWeight: '100'
        },
        '.submit-req': {
            width: 'max-content',
            marginLeft: 'auto',
            border: '0px',
            background: ' #C6A87D',
            color: '#080B0E',
            padding: '14.5px 30px',
            marginTop: '0px',
            fontFamily: 'ProximaNovaA-Regular',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '19px',
            cursor: 'pointer'
        },
        '.span-break': {
            display: 'flex',
            alignItems: 'center',
        },
        '.formBox': {
            marginBottom: '40px',
            postion: 'relative'
        },
        '.date-box': {
            position: 'relative'
        },
        ".sub-box-counter": {
            display: 'flex',
            justifyContent: 'space-between',
            background: '#080B0E',
            marginBottom: '16px'
        },

        ".left-btn": {
            width: '24px',
            height: '24px',
            borderRadius: '0px',
            color: '#C6A87D',
            border: '0.25px solid #C6A87D',
            backgroundColor: 'black'
        },
        ".right-btn": {
            width: '24px',
            height: '24px',
            borderRadius: '0px',
            color: 'black',
            border: '0.25px solid #C6A87D',
            backgroundColor: '#C6A87D'
        },

        '.our-team': {
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '17px',
            color: 'rgba(251, 251, 251, 0.6)',
            marginBottom: '40px',
            marginTop: '0px',
            textAlign: 'center'
        },
        '.mb-4': {
            marginBottom: '40px',
        },

        '.number-ans': {
            width: '24px',
            fontFamily: 'Proxima Nova Alt',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            marginLeft: '5px',
            marginRight: '5px',
            color: 'rgba(251, 251, 251, 1)',
            background: 'transparent',
            textAlign: 'center'
        },
        '.pencil-icn': {
            color: '#C6A87D',
            display: 'block',
            textAlign: 'right',
            position: 'absolute',
            right: '0px',
            top: '0px',
        },
        '.qty-box': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        '.qty': {
            width: '100',
            placeItems: 'center',
            display: 'flex',
            placeContent: 'space-between',
        },
        '.input-group-btn button': {
            width: '24px',
            height: '24px',
            borderRadius: '0px',
            color: '#c6a87d',
            background: 'transparent',
            border: '0.25px solid #c6a87d',
        },
        '.input-group-btn button:disabled': {
            opacity: '0.65',
        },
        '.plus button': {
            background: '#c6a87d',
            borderRadius: '0px',
            color: '#080B0E',
        },
        '.input-group-btn .btn': {
            position: 'relative',
            zIndex: '2',
        },

        '.react-datepicker-component .react-datepicker-input input': {
            paddingLeft: '5px',
            color: '#080B0E',
            fontSize: '16px',
            fontWeight: '300',
            fontFamily: 'Proxima Nova ALt',
        },
        '.icon-rc-datepicker': {
            color: '#C6A87D; !important',
            fontSize: '20px'
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
            color: '#FBFBFB !important',
            padding: '8px 0px',
        },
        '.react-datepicker-component .react-datepicker-input.is-open': {
            background: 'transparent',
            border: '0px',
            borderRadius: '0px',
        },

        "@media (min-width: 426px) and (max-width:768px)": {
            width: '500px'
        },
        "@media (min-width: 1px) and (max-width:400px)": {
            width: '310px ',
        },
        "@media (min-width: 400px) and (max-width:425px)": {
            width: '400px ',
        },
    };

    return (
        <React.Fragment>
            <button onClick={handleOpen}>Booking success</button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Get in Touch</h5>
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="close"
                                    onClick={handleClose}>
                                <CloseIcon sx={{fontSize: "25px"}}/></button>
                        </div>
                        <div className="modal-body gettouch">
                            <div className="container-fluid">
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        experienceDate: new Date(),
                                        startTime: new Date().getHours() + ':' + new Date().getMinutes(),
                                        NumberOfDinners1: '',
                                        NumberOfDinners2: '',
                                    }}
                                    onSubmit={(values) => {
                                        console.log(values.date)
                                        const experienceData = {
                                            ...values,
                                            experienceDate: moment(_.get(values, 'date')).format('DD/MM/YYYY'),
                                            numberOfDiner1: course1,
                                            numberOfDiner2: course2,
                                        }
                                        console.log("value===>", values)
                                        console.log("experienceData===>", experienceData)
                                    }}
                                >
                                    {({values, handleChange, handleSubmit, setFieldValue}) => (
                                        <Form onSubmit={handleSubmit}>
                                            <div className="experience-date">
                                                <p>We’ll contact you if a reservation becomes available,<br/>plrase fill
                                                    in your
                                                    details and submit.</p>
                                                <div className="edit-date">
                                                    <label className="label">Experience Date</label>
                                                    <TextField
                                                        sx={{
                                                            borderBottom: '0.25px solid #FBFBFB',
                                                            disableUnderline: true,
                                                            '.MuiInputBase-root ': {
                                                                padding: '0px'
                                                            },
                                                            '.MuiOutlinedInput-notchedOutline': {
                                                                border: 'none',
                                                                outline: 'none',
                                                            },
                                                            '& .MuiInputBase-input': {
                                                                width: '100%',
                                                                background: 'transparent',
                                                                border: '0px',
                                                                fontFamily: 'Proxima Nova Alt',
                                                                borderBottom: 'unset !important',
                                                                fontStyle: 'normal',
                                                                fontSize: '16px',
                                                                lineHeight: '19px',
                                                                color: 'rgba(251, 251, 251, 0.6) !important',
                                                                padding: '6px 0px',
                                                                borderRadius: '0px',
                                                                opacity: '1'
                                                            },
                                                            '@media(min-width: 1px) and (max-width: 425px)': {
                                                                '& .MuiInputBase-input': {
                                                                    fontSize: '12px',
                                                                    lineHeight: '15px',
                                                                },
                                                            }
                                                        }}
                                                        name="emailAddress"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        defaultValue="Monday, 26 Dec, 22"
                                                        margin="normal"
                                                        variant="outlined"
                                                        fullWidth
                                                        multiline
                                                        autoComplete="off"
                                                    />
                                                    <EditIcon className="pencil-icn"/>
                                                </div>
                                            </div>
                                            <div className="bookingBox">
                                                <Grid container className="row booking-sum">
                                                    <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12}
                                                          className="grid-box">
                                                        <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                              className="formBox">
                                                            <Typography className='label'>Your Name</Typography>
                                                            <TextField
                                                                sx={{
                                                                    borderBottom: '0.25px solid #FBFBFB',
                                                                    disableUnderline: true,
                                                                    '.MuiInputBase-root ': {
                                                                        padding: '0px'
                                                                    },
                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                        border: 'none',
                                                                        outline: 'none',
                                                                    },
                                                                    '& .MuiInputBase-input': {
                                                                        width: '100%',
                                                                        background: 'transparent',
                                                                        border: '0px',
                                                                        fontFamily: 'Proxima Nova Alt',
                                                                        borderBottom: '0.25px solid #FBFBFB !important',
                                                                        fontStyle: 'normal',
                                                                        fontSize: '16px',
                                                                        lineHeight: '19px',
                                                                        color: 'rgba(251, 251, 251, 0.6) !important',
                                                                        padding: '6px 0px',
                                                                        borderRadius: '0px',
                                                                        opacity: '1'
                                                                    },
                                                                    '@media(min-width: 1px) and (max-width: 425px)': {
                                                                        '& .MuiInputBase-input': {
                                                                            fontSize: '12px',
                                                                            lineHeight: '15px',
                                                                        },
                                                                    }
                                                                }}
                                                                name="name"
                                                                autoComplete="off"
                                                                className="form-control"
                                                                placeholder="Enter your full name"
                                                                margin="normal"
                                                                variant="outlined"
                                                                fullWidth
                                                                multiline
                                                                autoComplete="off"
                                                                value={values.name}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                              className="formBox">
                                                            <Typography className='label'>Email Address</Typography>
                                                            <TextField
                                                                sx={{
                                                                    borderBottom: '0.25px solid #FBFBFB',
                                                                    disableUnderline: true,
                                                                    '.MuiInputBase-root ': {
                                                                        padding: '0px'
                                                                    },
                                                                    '.MuiOutlinedInput-notchedOutline': {
                                                                        border: 'none',
                                                                        outline: 'none',
                                                                    },
                                                                    '& .MuiInputBase-input': {
                                                                        width: '100%',
                                                                        background: 'transparent',
                                                                        border: '0px',
                                                                        fontFamily: 'Proxima Nova Alt',
                                                                        borderBottom: '0.25px solid #FBFBFB !important',
                                                                        fontStyle: 'normal',
                                                                        fontSize: '16px',
                                                                        lineHeight: '19px',
                                                                        color: 'rgba(251, 251, 251, 0.6) !important',
                                                                        padding: '6px 0px',
                                                                        borderRadius: '0px',
                                                                        opacity: '1'
                                                                    },
                                                                    '.MuiFormHelperText-root': {
                                                                        fontFamily: 'Proxima Nova Alt',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '300',
                                                                        fontSize: '12px',
                                                                        lineHeight: '15px',
                                                                        color: 'rgba(251, 251, 251, 0.6)',
                                                                        borderBottom: 'unset !important',
                                                                        margin: '4px 0px 0px 0px',
                                                                        opacity: '1',
                                                                    },
                                                                    '@media(min-width: 1px) and (max-width: 425px)': {
                                                                        '& .MuiInputBase-input': {
                                                                            fontSize: '12px',
                                                                            lineHeight: '15px',
                                                                        },
                                                                    }
                                                                }}
                                                                name="email"
                                                                autoComplete="off"
                                                                className="form-control"
                                                                placeholder="eg yourname@email.com"
                                                                helperText="A Email Confirmation will be sent to this ID after booking"
                                                                margin="normal"
                                                                variant="outlined"
                                                                fullWidth
                                                                multiline
                                                                autoComplete="off"
                                                                value={values.email}
                                                                onChange={handleChange}
                                                            />
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                              className="formBox">
                                                            <Typography className='label'>Experience Date</Typography>
                                                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                                <DatePickerInput
                                                                    name="experienceDate"
                                                                    value={values.experienceDate}
                                                                    displayFormat="ddd,DD MMM YY"
                                                                    returnFormat="ddd,DD MMM YY"
                                                                    className="form-control border-bottom"
                                                                    onChange={(dateString) => setFieldValue('experienceDate', dateString)}
                                                                    defaultValue={values.experienceDate}
                                                                />
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12}
                                                          className="grid-box">
                                                        <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                              className="formBox">
                                                            <Typography className='label'
                                                                        sx={{display: 'flex', alignItems: 'center'}}>Start
                                                                Time <Tooltip
                                                                    title="Private Dining usually last upto 3 hrs but can extend upto 5 hrs based on number of courses  "
                                                                    placement="right"
                                                                    arrow
                                                                    PopperProps={{
                                                                        background: 'red',
                                                                        popperRef,
                                                                        anchorEl: {
                                                                            getBoundingClientRect: () => {
                                                                                return new DOMRect(
                                                                                    positionRef.current.x,
                                                                                    areaRef.current.getBoundingClientRect().y,
                                                                                    0,
                                                                                    0,
                                                                                );
                                                                            },
                                                                        },
                                                                    }}
                                                                >
                                                                    <InfoIcon
                                                                        sx={{
                                                                            color: "#C6A87D",
                                                                            fontSize: '17px',
                                                                            marginLeft: '8px'
                                                                        }}
                                                                        ref={areaRef}
                                                                        onMouseMove={handleMouseMove}
                                                                    />
                                                                </Tooltip> </Typography>
                                                            <TextField type="time" name="startTime"
                                                                       value={values.startTime}
                                                                       onChange={handleChange}
                                                                       defaultValue={values.startTime}
                                                                       className="form-control"
                                                                       autoComplete="off"
                                                                       variant="standard"
                                                                       area-invalid={true}
                                                                       InputProps={{
                                                                           disableUnderline: true,
                                                                           autoCapitalize: true,
                                                                       }}
                                                                       sx={{
                                                                           disableUnderline: true,
                                                                           '.MuiInputBase-root ': {
                                                                               padding: '0px'
                                                                           },
                                                                           '.MuiOutlinedInput-notchedOutline': {
                                                                               border: 'none',
                                                                               outline: 'none',
                                                                           },
                                                                           '& .MuiInputBase-input': {
                                                                               width: '100%',
                                                                               background: 'transparent',
                                                                               border: '0px',
                                                                               fontFamily: 'Proxima Nova Alt',
                                                                               borderBottom: '0.25px solid #FBFBFB !important',
                                                                               fontStyle: 'normal',
                                                                               fontSize: '16px',
                                                                               lineHeight: '19px',
                                                                               color: 'rgba(251, 251, 251, 0.6) !important',
                                                                               padding: '6px 0px',
                                                                               borderRadius: '0px',
                                                                               opacity: '1'
                                                                           },
                                                                           '& input[type="time"]::-webkit-calendar-picker-indicator': {
                                                                               filter: 'invert(1)',
                                                                               color: 'rgba(251, 251, 251, 0.6) !important',
                                                                           },
                                                                       }}
                                                            />
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                              className="formBox mb-4">
                                                            <Box className="qty-box">
                                                                <Typography className='label'>Number of Diners (min 2)
                                                                </Typography>
                                                                <div className="input-group qty">
                                                            <span className="input-group-btn">
                                                              <button type="button"
                                                                      className="btn btn-default btn-number"
                                                                      disabled={course1 == 1 ? true : false}
                                                                      data-type="minus"
                                                                      onClick={decrementCount1}>-
                                                              </button>
                                                            </span>
                                                                    <TextField type="text" name="quant[1]" id="Qty"
                                                                               className="input-number"
                                                                               name="numberOfDiner"
                                                                               onChange={handleChange}
                                                                               value={values.numberOfDiner1}
                                                                               value={course1}
                                                                               autoComplete={"off"}
                                                                               sx={{
                                                                                   '.MuiOutlinedInput-notchedOutline': {
                                                                                       border: 'none',
                                                                                       outline: 'none'
                                                                                   },
                                                                                   '& .MuiInputBase-input': {
                                                                                       width: "25px",
                                                                                       background: 'transparent',
                                                                                       border: '0px',
                                                                                       fontFamily: 'Proxima Nova',
                                                                                       fontStyle: 'normal',
                                                                                       fontWeight: '400',
                                                                                       fontSize: '14px',
                                                                                       color: '#FBFBFB',
                                                                                       lineHeight: '17px',
                                                                                       paddingLeft: '0px',
                                                                                       paddingRight: '0px',
                                                                                       flex: 'none',
                                                                                       textAlign: 'center'
                                                                                   },
                                                                               }}
                                                                    />
                                                                    <span className="input-group-btn plus">
                                                              <button type="button"
                                                                      className="btn btn-default btn-number"
                                                                      disabled={course1 == 10 ? true : false}
                                                                      data-type="plus"
                                                                      onClick={incrementCount1}>+
                                                              </button>
                                                            </span>
                                                                </div>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                              className="formBox mb-4">
                                                            <Box className="qty-box">
                                                                <Typography className='label'>Number of Diners (min 3)
                                                                </Typography>
                                                                <div className="input-group qty">
                                                            <span className="input-group-btn">
                                                              <button type="button"
                                                                      className="btn btn-default btn-number"
                                                                      disabled={course2 == 1 ? true : false}
                                                                      data-type="minus"
                                                                      onClick={decrementCount2}>-
                                                              </button>
                                                            </span>
                                                                    <TextField type="text" name="quant[1]" id="Qty"
                                                                               className="input-number"
                                                                               onChange={handleChange}
                                                                               value={values.numberOfDiner2}
                                                                               value={course2}
                                                                               autoComplete={"off"}
                                                                               sx={{
                                                                                   '.MuiOutlinedInput-notchedOutline': {
                                                                                       border: 'none',
                                                                                       outline: 'none'
                                                                                   },
                                                                                   '& .MuiInputBase-input': {
                                                                                       width: "25px",
                                                                                       background: 'transparent',
                                                                                       border: '0px',
                                                                                       fontFamily: 'Proxima Nova',
                                                                                       fontStyle: 'normal',
                                                                                       fontWeight: '400',
                                                                                       fontSize: '14px',
                                                                                       color: '#FBFBFB',
                                                                                       lineHeight: '17px',
                                                                                       paddingLeft: '0px',
                                                                                       paddingRight: '0px',
                                                                                       flex: 'none',
                                                                                       textAlign: 'center'
                                                                                   },
                                                                               }}
                                                                    />
                                                                    <span className="input-group-btn plus">
                                                              <button type="button"
                                                                      className="btn btn-default btn-number"
                                                                      disabled={course2 == 10 ? true : false}
                                                                      data-type="plus"
                                                                      onClick={incrementCount2}>+
                                                              </button>
                                                            </span>
                                                                </div>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                              className="formBox our-team">
                                                            <p>Our team will contact you regarding your protein and
                                                                allergen
                                                                Information after booking is confirmed</p>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div className="row viewbreak">
                                                <div className="col-lg-12">
                                                    <h5>₹ 2,500</h5>
                                                    <span className="span-break">view break up <KeyboardArrowUpIcon
                                                        className="i"/></span>
                                                    <button type="submit" className="submit-req">Submit Request</button>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default GetInTouch;
