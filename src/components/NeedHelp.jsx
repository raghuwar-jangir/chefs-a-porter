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
import OtpVerificationModal from "./OtpVerificationModal";
import ScheduleCallPopUp from "./ScheduleCallPopUp";

const NeedHelp = (props) => {

    const {isColor, title, description, button_email, button_call} = props;

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const BoxWarraper = styled(Box)(() => ({
        padding: '40px 120px',
        display: 'flex',
        justifyContent: 'space-between',
        background: `${isColor ? '#101418' : '#FBFBFB'}`,
        borderTop: '0.5px solid #080B0E',
        ".btn-1": {
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
        ".btn-1:hover": {
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
            textAlign: 'left !important'
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
            ".btn-1": {
                width: '50%',
            },
            ".btn-2": {
                width: '48%',
            }
        },
        "@media (min-width: 768px) and (max-width:1024px)": {
            '.btn-2': {
                marginLeft: '5px !important',
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

    const {data} = useContext(CmsContext);

    return (

        <React.Fragment>
            <BoxWarraper>
                {
                    !_.isEmpty(data) &&
                    <React.Fragment>
                        <Box md={6} sm={6} xs={12} xl={7}>
                            <Typography className="main-heading">{title ? title : 'Need Help?'}</Typography>
                            <Typography
                                className="details">{description ? description : 'We respond within 24 business hours.'}</Typography>
                        </Box>
                        <Box md={6} sm={6} xs={12} xl={7}>
                            <Button
                                type="submit"
                                className="btn-1"
                                onClick={handleOpen}>{button_call ? button_call : 'Schedule a Call'}</Button>
                            <Button
                                type="submit"
                                className="btn-2">{button_email ? button_email : 'Email us'}</Button>
                        </Box>
                        {
                            open && <ScheduleCallPopUp open={open}
                                                       handleClose={handleClose}
                            />
                        }
                    </React.Fragment>
                }
            </BoxWarraper>

        </React.Fragment>
    )
}
export default NeedHelp
