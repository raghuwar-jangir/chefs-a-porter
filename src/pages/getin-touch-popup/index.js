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


const GetInTouch = () => {
    const [startDate, setStartDate] = useState(new Date());

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [numberOfDenner, setNumberOfDenner] = useState(1)
    const [numberOfCourses, setNumberOfCourses] = useState(1)

    const handleDecrement = () => {
        if (numberOfDenner > 2) {
            setNumberOfDenner(numberOfDenner - 1);
        }
    }

    const handleIncrement = () => {
        setNumberOfDenner(numberOfDenner + 1);
    }
    const handleCoursesDecrement = () => {
        if (numberOfCourses > 3) {
            setNumberOfCourses(numberOfCourses - 1);
        }
    }

    const handleCoursesIncrement = () => {
        setNumberOfCourses(numberOfCourses + 1);
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
        height: 727,
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
            borderBottom: '0.25px solid #FBFBFB !important',
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
        '.gcal': {
            height: '22.8px',
        },
        '.gcal-icon': {
            position: 'relative',
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
        '.css-66dh3a-MuiInputBase-input-MuiInput-input': {
            width: '100%',
            background: 'transparent',
            border: '0px',
            borderBottom: '0.377697px solid #FBFBFB',
            fontFamily: 'Proxima Nova',
            fontStyle: 'normal',
            // fontWeight: '300',
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FBFBFB !important',
            paddingBottom: '12px',
            outline: 'none',
            borderRadius: '0px',
            paddingLeft: '0px',
            opacity: '1'
        },

        "@media (min-width: 426px) and (max-width:768px)": {
            width: '500px'
        },
        "@media (min-width: 1px) and (max-width:400px)": {
            width: '320px ',
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
                                <div className="experience-date">
                                    <p>We’ll contact you if a reservation becomes available,<br/>plrase fill in your
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
                                <form action>
                                    <div className="bookingBox">
                                        <Grid container className="row booking-sum">
                                            <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="grid-box">
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
                                                        name="occassionMessage1"
                                                        autoComplete="off"
                                                        className="form-control"
                                                        placeholder="Enter your full name"
                                                        margin="normal"
                                                        variant="outlined"
                                                        fullWidth
                                                        multiline
                                                        autoComplete="off"
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
                                                                margin: '0px',
                                                                opacity: '1',
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
                                                        placeholder="eg yourname@email.com"
                                                        helperText="A Email Confirmation will be sent to this ID after booking"
                                                        margin="normal"
                                                        variant="outlined"
                                                        fullWidth
                                                        multiline
                                                        autoComplete="off"
                                                    />
                                                </Grid>
                                                <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                      className="formBox">
                                                    <Typography className='label'>Experience Date</Typography>
                                                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                        <DatePicker selected={startDate} className='form-control'
                                                                    onChange={(date) => setStartDate(date)}
                                                                    value={moment(startDate).format("ddd,DD MMM YYYY")}/>
                                                        <Box className="gcal-icon">
                                                            <img className="gcal" src={gCal}/>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                            <Grid item xl={6} lg={6} xs={6} md={6} sm={12} xs={12} className="grid-box">
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
                                                    <TextField type="time" name="time"
                                                        // value={values.time}
                                                        // onChange={handleChange}
                                                        // defaultValue={values.time}
                                                               className="form-control"
                                                               autoComplete="off"
                                                               variant="standard"
                                                               InputProps={{
                                                                   disableUnderline: true,
                                                                   autoCapitalize: true,
                                                               }}
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
                                                                       fontStyle: 'normal',
                                                                       fontSize: '16px',
                                                                       lineHeight: '19px',
                                                                       color: '#FBFBFB',
                                                                       padding: '6px 0px',
                                                                       borderRadius: '0px',
                                                                       opacity: '1'
                                                                   },
                                                               }}
                                                    />
                                                </Grid>
                                                <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                      className="formBox mb-4">
                                                    <Box className="sub-box-counter">
                                                        <Typography className="min-2-3 label">Number of Diners <span>(min 2)</span></Typography>
                                                        <Box sx={{display: 'flex'}}>
                                                            <RemoveIcon
                                                                style={numberOfDenner === 2 ? disabledStyle : {}}
                                                                className="left-btn"
                                                                onClick={handleDecrement}
                                                                disabled={numberOfDenner === 2}
                                                            />
                                                            <Typography
                                                                className="number-ans">{numberOfDenner}</Typography>
                                                            <AddIcon
                                                                className="right-btn"
                                                                onClick={handleIncrement}
                                                            />
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                      className="formBox mb-4">
                                                    <Box className="sub-box-counter">
                                                        <Typography className="label">Number of
                                                            Diners <span>(min 3)</span></Typography>
                                                        <Box sx={{display: 'flex'}}>
                                                            <RemoveIcon
                                                                style={numberOfCourses === 3 ? disabledStyle : {}}
                                                                className="left-btn"
                                                                onClick={handleCoursesDecrement}
                                                                disabled={numberOfCourses === 3}
                                                            />
                                                            <Typography
                                                                className="number-ans">{numberOfCourses}</Typography>
                                                            <AddIcon
                                                                className="right-btn"
                                                                onClick={handleCoursesIncrement}
                                                            />
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                                <Grid item xl={12} lg={12} xs={12} md={12} sm={12} xs={12}
                                                      className="formBox our-team">
                                                    <p>Our team will contact you regarding your protein and allergen
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
                                </form>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
export default GetInTouch;
