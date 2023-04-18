import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, styled, Typography } from "@mui/material";
import { DatePickerInput } from "rc-datepicker";
import React, { useEffect, useState, useContext } from "react";
import gInfo from "../assets/images/info.png";
import drop from "../assets/images/drop.png";
import Tooltip from "@material-ui/core/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import "../assets/styles/fontStyle.css";
import { navigate } from "gatsby";
import * as _ from "lodash";
import Cookies from "js-cookie";
import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles,
} from "@material-ui/core/styles";
import * as Yup from "yup";
import UsersContext from "../context/UsersContext";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "8px",
                color: "#080B0E",
                backgroundColor: "#DCD7CB",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
                padding: "16px 32px",
                textAlign: "center",
                fontFamily: "Proxima Nova Alt",
                fontStyle: " normal",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "17px",
                opacity: "1",
                width: "160px",
                borderRadius: "1px",
            },
        },
    },
});

const ChefDetailsForm = () => {
    const [chefInfo, setChefInfo] = useState("");
    const cookieValue = Cookies?.get("eventData");
    const { userData } = useContext(UsersContext);
    {
        !_.isEmpty(cookieValue) &&
        useEffect(() => {
            if (cookieValue) {
                setChefInfo(JSON.parse(cookieValue));
            }
        }, [cookieValue]);
    }
    const handleClick = () => {
        navigate("/customer-details");
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Incorrect Email Id")
            .required("Email is required"),
    });

    const tipTitle =
        "Private Dining usually last upto 3 hrs but can extend upto 5 hrs based on number of courses";

    const BoxWrapper = styled(Box)(() => ({
        background: "#101418",
        color: "#FBFBFB",
        padding: "40px 31px",
        position: "sticky",
        top: "100px",

        ".sub-text-price": {
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "44px",
            color: "#FBFBFB",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
        },

        ".sub-text": {
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FBFBFB",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
        },
        ".error": {
            fontSize: "20px",
            lineHeight: "24px",
            color: "#FBFBFB",
            fontFamily: "Proxima Nova Alt",
        },

        ".common-field-box": {
            padding: "16px",
            background: "#080B0E",
            marginBottom: "16px",
        },

        ".field-title": {
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "19px",
            padding: "0px 0px 8px 0px",
            fontFamily: "ProximaNovaA-Regular",
            fontStyle: "normal",
            color: "#FBFBFB",
        },

        ".form-control": {
            position: "relative",
            zIndex: "1",
            paddingLeft: "10px",
            flex: "1",
            outline: "none",
            backgroundColor: "transparent",
            border: "0px",
            borderBottom: "0.25px solid #FBFBFB",
            borderRadius: "0px",
            paddingRight: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FBFBFB",
            display: "block",
            width: "100%",
            padding: "0.375rem 0.75rem 0.375rem 0px",
            transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        },

        ".date-time-box": {
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
        },

        ".date-control": {
            paddingBottom: "0px",
        },

        ".react-datepicker-component .react-datepicker-input.has-value input": {
            color: "white !important",
            paddingLeft: "0px",
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
        },

        ".react-datepicker-component .react-datepicker-input": {
            background: "transparent",
            border: "none",
        },

        ".react-datepicker-component .react-datepicker-input .button-wrapper .input-button":
            {
                margin: "0px 0px",
            },

        ".icon-rc-datepicker": {
            color: "#C6A87D",
            fontSize: "20px",
        },

        ".react-datepicker-component .react-datepicker-input:hover": {
            background: "transparent",
            border: "none",
        },

        ".react-datepicker-component .react-datepicker-input.is-open": {
            background: "transparent",
            border: "0px",
            borderRadius: "0px",
        },

        ".gInfo-logo": {
            height: "16px",
            width: "16px",
            marginLeft: "8px",
        },

        ".start-time-box": {
            display: "flex",
            alignItems: "center",
            paddingRight: "10px",
        },

        ".time-control": {
            backgroundImage: `url(${drop})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            webkitAppearance: "none",
            mozAppearance: "none",
            appearance: "none",
            paddingRight: "0px",
            backgroundSize: "23px",
        },

        ".sub-box-counter": {
            display: "flex",
            justifyContent: "space-between",
            padding: "16px",
            background: "#080B0E",
            marginBottom: "16px",
        },

        ".min-2-3": {
            flex: "1",
            marginBottom: "0px",
            fontFamily: "Proxima Nova Alt",
            fontWeight: "300",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#FBFBFB",
        },

        ".left-btn": {
            width: "24px",
            height: "24px",
            borderRadius: "0px",
            color: "#C6A87D",
            border: "0.25px solid #C6A87D",
            backgroundColor: "black",
            marginRight: "10px",
        },

        ".right-btn": {
            width: "24px",
            height: "24px",
            borderRadius: "0px",
            color: "black",
            border: "0.25px solid #C6A87D",
            backgroundColor: "#C6A87D",
            marginLeft: "10px",
        },

        ".surprise-box": {
            background: "#080B0E",
            padding: "16px",
            position: "relative",
            marginBottom: "16px",
        },

        ".form-check": {
            display: "block",
            minHeight: "1.5rem",
            marginBottom: "0.125rem",
        },

        ".surprise-check-box": {
            display: "flex",
            placeItems: "center",
        },

        ".input-check": {
            paddingRight: "5px !important",
            padding: "0px",
            marginBottom: "0.125rem",
            color: "#C6A87D !important",
        },

        ".form-check-label": {
            fontFamily: "Bon Vivant",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#FBFBFB",
        },

        ".email-confirm": {
            fontFamily: "Proxima Nova Alt",
            fontStyle: "normal",
            fontWeight: "300",
            fontSize: "12px",
            lineHeight: "15px",
            color: "rgba(251, 251, 251, 0.6)",
            display: "block",
            marginTop: "4px",
            marginLeft: "1.5rem",
        },

        ".experience-btn": {
            fontFamily: "ProximaNovaA-Regular",
            background: "#C6A87D",
            fontSize: "20px",
            lineHeight: "24px",
            width: "100%",
            fontWeight: 600,
            borderRadius: "0px",
            color: "#080B0E",
            textTransform: "math-auto",
            padding: "18.5px 10px",
            marginTop: "20px",
            cursor: "pointer",
        },
    }));

    return (
        <React.Fragment>
            <BoxWrapper>
                <Typography className="sub-text-price">
                    Starting at ₹2,500 <sub className="sub-text">Per Diner</sub>
                </Typography>

                <Formik
                    initialValues={{
                        name: chefInfo?.name,
                        email: chefInfo?.email,
                        experienceDate: chefInfo?.experienceDate
                            ? chefInfo?.experienceDate
                            : new Date(),
                        startTime: chefInfo?.startTime
                            ? chefInfo?.startTime
                            : new Date().getHours() + ":" + new Date().getMinutes(),
                        numberOfDinner: 2,
                        numberOfCourses:  6,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        Cookies.set("eventData", JSON.stringify(values));
                        Cookies.set('eventDinners', JSON.stringify(values?.numberOfDinner));
                        Cookies.set('eventCourses', JSON.stringify(values?.numberOfCourses));
                    }}
                >
                    {({
                          isSubmitting,
                          values,
                          setFieldValue,
                          handleSubmit,
                          handleChange,
                      }) => (
                        <Form onSubmit={handleSubmit}>
                            <Box className="common-field-box">
                                <label htmlFor="name" className="field-title">
                                    Name
                                </label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    autoComplete="off"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                <ErrorMessage component="div" name="name" />
                            </Box>

                            <Box className="common-field-box">
                                <label htmlFor="email" className="field-title">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="eg yourname@email.com"
                                    autoComplete="off"
                                />
                                <ErrorMessage component="div" name="email" />
                            </Box>

                            <Box className="date-time-box">
                                <Box className="common-field-box">
                                    <label htmlFor="name" className="field-title">
                                        Experience Date
                                    </label>
                                    <DatePickerInput
                                        className="form-control date-control"
                                        name="experienceDate"
                                        displayFormat="ddd, MMM DD YYYY"
                                        onChange={(dateString) =>
                                            setFieldValue("experienceDate", dateString)
                                        }
                                        value={values.experienceDate}
                                    />
                                </Box>

                                <Box className="common-field-box">
                                    <Box className="start-time-box">
                                        <label htmlFor="name" className="field-title">
                                            Start Time
                                        </label>
                                        <MuiThemeProvider theme={defaultTheme}>
                                            <Box>
                                                <MuiThemeProvider theme={theme}>
                                                    <Tooltip title={tipTitle} arrow placement="top">
                                                        <Box>
                                                            <img className="gInfo-logo" src={gInfo} />
                                                        </Box>
                                                    </Tooltip>
                                                </MuiThemeProvider>
                                            </Box>
                                        </MuiThemeProvider>
                                    </Box>
                                    <Field
                                        type="time"
                                        name="time"
                                        className="form-control time-control"
                                        defaultValue={values.startTime}
                                    />
                                </Box>
                            </Box>
                            <Box className="sub-box-counter">
                                <label htmlFor="numberOfDinner" className="min-2-3">
                                    Number of Diners <span>(min 2)</span>
                                </label>

                                <Box>
                                    <button
                                        type="button"
                                        className="left-btn"
                                        onClick={() => {

                                            setFieldValue(
                                                "numberOfDinner",
                                                Math.max(values.numberOfDinner - 1, 2)
                                            );

                                            if (
                                                values.numberOfDinner -1 >= 2 &&
                                                values.numberOfDinner - 1 <= 6
                                            ) {
                                                setFieldValue("numberOfCourses", 6);
                                            } else if (values.numberOfDinner -1  > 6) {
                                                setFieldValue("numberOfCourses", userData?.min_course);
                                            }
                                        }}
                                    >
                                        -
                                    </button>
                                    <span>{values.numberOfDinner}</span>
                                    <button
                                        type="button"
                                        className="right-btn"
                                        onClick={() => {
                                            setFieldValue(
                                                "numberOfDinner",
                                                Math.min(values.numberOfDinner + 1, 10)
                                            );
                                            if (
                                                values.numberOfDinner + 1 >= 2 &&
                                                values.numberOfDinner +1  <= 6
                                            ) {
                                                setFieldValue("numberOfCourses", 6);
                                            } else if (values.numberOfDinner  + 1> 6) {
                                                setFieldValue("numberOfCourses", userData?.min_course);
                                            }
                                        }}
                                        disabled={values.numberOfCourses >= 10}
                                    >
                                        +
                                    </button>
                                </Box>
                            </Box>

                            <Box className="sub-box-counter">
                                <label htmlFor="numberOfCourses" className="min-2-3">
                                    Number of Courses <span>(min 3)</span>
                                </label>
                                <Box>
                                    <button
                                        type="button"
                                        className="left-btn"
                                    >
                                        -
                                    </button>
                                    <span>{values.numberOfCourses}</span>
                                    <button
                                        type="button"
                                        className="right-btn"
                                    >
                                        +
                                    </button>
                                </Box>
                            </Box>

                            <Box className="surprise-box">
                                <Box className="form-check">
                                    <Box className="surprise-check-box">
                                        <Checkbox className="input-check" defaultChecked />
                                        <Typography
                                            className="form-check-label"
                                            for="flexCheckChecked"
                                        >
                                            Surprise me
                                        </Typography>
                                    </Box>
                                    <Typography className="email-confirm">
                                        An agnostic menu that explores a diverse culinary journey
                                        with chef mako at the helm.
                                    </Typography>
                                </Box>
                            </Box>

                            <button
                                type="submit"
                                className="experience-btn"
                                onClick={() => {
                                    if (!_.isEmpty(values.name && values.email)) {
                                        handleClick();
                                    }
                                }}
                                // disabled={isSubmitting}
                            >
                                Book this experience
                            </button>
                        </Form>
                    )}
                </Formik>
            </BoxWrapper>
        </React.Fragment>
    );
};

export default ChefDetailsForm;
