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
import axios from "axios";
import configuration from "../configuration";
import { toast } from "react-toastify";

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
  const baseUrl = configuration.API_BASEURL;

  const [chefInfo, setChefInfo] = useState("");
  const [priveeData, setPriveeData] = useState();
  const cookieValue = Cookies?.get("eventData");
  const cookieValue1 = Cookies?.get("priveeData");
  const { eventId,userData,
    dinersMaxNumber,
    dinersMinNumber,
    dinersMinData} = useContext(UsersContext);

  const [dinersValue, setDinersValue] = useState(dinersMinNumber);
  const [minCourseValue, setMinCourseValue] = useState(
    dinersMinData?.["min_courses"]
  );
  const [maxCourseValue, setMaxCourseValue] = useState(
    dinersMinData?.["max_courses"]
  );

  const mincourse = userData?.userData;
  const pricepercourse = userData?.price_per_course;
  useEffect(() => {
    if (cookieValue) {
      setChefInfo(JSON.parse(cookieValue));
    }
    if (cookieValue1) {
      setPriveeData(JSON.parse(cookieValue1));
    }
  }, [cookieValue, cookieValue1]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Incorrect Email Id")
      .required("Email is required"),
  });

  const getCourseHandler = (value, event) => {
    // event.preventDefault();
    setDinersValue(value);
    const courseMaxMinData = userData?.prices.filter((item) => {
      return value >= item.min_diner && value <= item.max_diner;
    });
    setMinCourseValue(courseMaxMinData?.[0].min_courses);
    setMaxCourseValue(courseMaxMinData?.[0].max_courses);
    console.log("courseMaxMinData", courseMaxMinData);
  };

  useEffect(() => {
    console.log("updated minCourseValue", minCourseValue);
    console.log("updated maxCourseValue", maxCourseValue);
    console.log("dinersValue", dinersValue);
  }, [minCourseValue, maxCourseValue, dinersValue]);

  const tipTitle =
    "Private Dining usually last upto 3 hrs but can extend upto 5 hrs based on number of courses";
  const BoxWrapper = styled(Box)(() => ({
    "background": "#101418",
    "color": "#FBFBFB",
    "padding": "40px 31px",
    "position": "sticky",
    "top": "100px",

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
      cursor: "Pointer",
    },

    ".right-btn": {
      width: "24px",
      height: "24px",
      borderRadius: "0px",
      color: "black",
      border: "0.25px solid #C6A87D",
      backgroundColor: "#C6A87D",
      // marginLeft: "10px",
      cursor: "Pointer",
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
      {!_.isEmpty(userData) && (
        <BoxWrapper>
          <Typography className="sub-text-price">
            Starting at ₹{userData?.price_per_course * userData?.min_course}{" "}
            <sub className="sub-text">Per Diner</sub>
          </Typography>

          <Formik
            initialValues={{
              name: chefInfo?.name,
              email: chefInfo?.email,
              experienceDate: priveeData?.date ? priveeData?.date : new Date(),
              startTime: chefInfo?.startTime
                ? chefInfo?.startTime
                : new Date().getHours() + ":" + new Date().getMinutes(),
              // numberOfDinner:
              //   chefInfo?.numberOfDinner > priveeData?.diners
              //     ? chefInfo?.numberOfDinner
              //     : priveeData?.diners,
              // numberOfCourses:
              //   priveeData?.diners >= 6 ? userData?.min_course : 6,
              numberOfDinner: dinersValue,
              numberOfCourses: minCourseValue,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              axios
                .post(baseUrl + "/booking/calculatepayment/", {
                  id: eventId,
                  type: "privee",
                  diner: values.numberOfDinner,
                  courses: values.numberOfCourses,
                })
                .then((response) => {
                  if (response.status === 200) {
                    values.experienceDate =
                      typeof values.experienceDate === "string"
                        ? values.experienceDate
                        : typeof values.experienceDate === "object"
                        ? new Date(
                            values.experienceDate?.toUTCString()
                          )?.toISOString()
                        : new Date().toISOString();
                    values.date = values.experienceDate;
                    Cookies.set("eventData", JSON.stringify(values));
                    Cookies.set("priveeData", JSON.stringify(values));
                    Cookies.set(
                      "eventDinners",
                      JSON.stringify(values?.numberOfDinner)
                    );
                    Cookies.set(
                      "eventCourses",
                      JSON.stringify(values?.numberOfCourses)
                    );
                    if (!_.isEmpty(values)) {
                      navigate("/customer-details");
                    }
                  }
                }).catch((error) => {
                  if(error?.response?.data?.message){
                    toast.error(error?.response?.data?.message);
                  }
                });
            }}
          >
            {({
              isSubmitting,
              values,
              setFieldValue,
              handleSubmit,
              handleChange,
            }) => (
              <Form onSubmit={handleSubmit} noValidate>
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
                    Number of Diners <span>(min {dinersMinNumber})</span>
                  </label>
                  <Box>
                    <button
                      type="button"
                      className="left-btn"
                      onClick={(e) => {
                        setFieldValue(
                          "numberOfDinner",
                          Math.max(values.numberOfDinner - 1, dinersMinNumber)
                        );

                        getCourseHandler(
                          Math.max(values.numberOfDinner - 1, dinersMinNumber)
                        );

                        // if (
                        //   values.numberOfDinner - 1 >= 2 &&
                        //   values.numberOfDinner - 1 <= 6
                        // ) {
                        //   setFieldValue("numberOfCourses", 6);
                        // }
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={values.numberOfDinner}
                      name="numberOfDinner"
                      id="numberOfDinner"
                      className="left-btn"
                      min={dinersMinNumber}
                      max={dinersMaxNumber}
                      onChange={(event) => {
                        let { value, min, max } = event.target;
                        value = Math.max(
                          Number(min),
                          Math.min(Number(max), Number(value))
                        );
                        setFieldValue("numberOfDinner", value);
                        getCourseHandler(value);
                      }}
                    ></input>
                    {/* <span>{values.numberOfDinner},</span>
                    <span>{dinersMinNumber},</span>
                    <span>{dinersMaxNumber}</span> */}
                    <button
                      type="button"
                      className="right-btn"
                      onClick={(e) => {
                        setFieldValue(
                          "numberOfDinner",
                          Math.min(values.numberOfDinner + 1, dinersMaxNumber)
                        );

                        getCourseHandler(
                          Math.min(values.numberOfDinner + 1, dinersMaxNumber)
                        );
                        
                        // if (
                        //   values.numberOfDinner + 1 >= 2 &&
                        //   values.numberOfDinner + 1 <= 6
                        // ) {
                        //   setFieldValue("numberOfCourses", dinersMaxNumber);
                        // } else if (values.numberOfDinner + 1 > dinersMaxNumber) {
                        //   setFieldValue(
                        //     "numberOfCourses",
                        //     userData?.min_course
                        //   );
                        // }
                      }}
                    >
                      +
                    </button>
                  </Box>
                </Box>

                <Box className="sub-box-counter">
                  <label htmlFor="numberOfCourses" className="min-2-3">
                    Number of Courses <span>(min {minCourseValue})</span>
                  </label>
                  <Box>
                    <button
                      type="button"
                      className="left-btn"
                      onClick={() => {
                        setFieldValue(
                          "numberOfCourses",
                          Math.max(values.numberOfCourses - 1, minCourseValue)
                        );
                        // if (
                        //   values.numberOfDinner + 1 >= 2 &&
                        //   values.numberOfDinner + 1 <= 6
                        // ) {
                        //   setFieldValue("numberOfCourses", 6);
                        // }
                      }}
                      // disabled={values.numberOfDinner <= userData?.min_course}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={values.numberOfCourses}
                      className="left-btn"
                      name="numberOfCourses"
                      id="numberOfCourses"
                      min={minCourseValue}
                      max={maxCourseValue}
                      onChange={(event) => {
                        let { value, min, max } = event.target;
                        value = Math.max(
                          Number(min),
                          Math.min(Number(max), Number(value))
                        );
                        setFieldValue("numberOfCourses", value);
                      }}
                    ></input>
                    {/* <span>{values.numberOfCourses},</span>
                    <span>{minCourseValue},</span>
                    <span>{maxCourseValue}</span> */}
                    <button
                      type="button"
                      className="right-btn"
                      onClick={() => {
                        setFieldValue(
                          "numberOfCourses",
                          Math.min(values.numberOfCourses + 1, maxCourseValue)
                        );
                      }}
                      // disabled={values.numberOfDinner < 6}
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
                      Leave it to Chef {userData?.user?.name} to curate a
                      bespoke menu
                    </Typography>
                  </Box>
                </Box>

                <button type="submit" className="experience-btn">
                  Book this experience
                </button>
              </Form>
            )}
          </Formik>
        </BoxWrapper>
      )}
    </React.Fragment>
  );
};

export default ChefDetailsForm;
