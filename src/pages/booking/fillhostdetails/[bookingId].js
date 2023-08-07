import React, { useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavbarComponent";
import NeedHelp from "../../../components/NeedHelp";
import FooterEnd from "../../../components/FooterEndSection";
import "../../../assets/styles/fontStyle.css";
import { FieldArray, Formik } from "formik";
import axios from "axios";
import configuration from "../../../configuration";

const HostDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    diners: [
      {
        name: "deshan madurajith",
        email: "desh@email.com",
        mobile: "",
        meal_type: "",
      },
    ],
  });
  const baseUrl = configuration.API_BASEURL;
  const BoxWrapper = styled(Box)(() => ({
    ".main-box": {
      padding: "120px 22rem 40px",
    },
    ".about-heading": {
      fontStyle: "normal !important",
      fontSize: "32px !important",
      lineHeight: "30px",
      fontWeight: "700",
      textAlign: "center",
      letterSpacing: "0.06em",
      color: "#080B0E",
      fontFamily: "Bon Vivant !important",
    },
    ".form-control": {
      padding: "0 0.75rem 0 0",
    },
    ".form-control:last-child": {
      padding: "0",
    },
    ".form-control label.Mui-focused": {
      color: "#C6A87D",
    },
    ".form-control .MuiInput-root::after": {
      borderBottom: "2px solid #C6A87D",
    },
    ".content": {
      margin: "60px 0 20px",
      fontWeight: "400",
      fontStyle: "normal",
      fontSize: "20px !important",
      lineHeight: "24px",
      fontFamily: "ProximaNovaA-Regular",
    },
    ".content:last-child": {
      margin: "20px 0",
    },
    ".details": {
      fontWeight: "400",
      fontStyle: "normal",
      textAlign: "left",
      fontFamily: "Bon Vivant !important",
      marginTop: "25px",
    },
    ".details:first-child": {
      marginTop: "0",
    },
    ".form-container": {
      padding: "20px 0",
    },
    ".form-row": {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "15px",
    },
    ".save-form-btn": {
      border: "0.25px solid #080B0E",
      background: "#FBFBFB",
      fontSize: "16px !important",
      fontWeight: "400",
      lineHeight: "19px !important",
      borderRadius: "0px !important",
      color: "#080B0E !important",
      textTransform: "capitalize !important",
      fontFamily: "ProximaNovaA-Regular",
      marginLeft: "auto",
      padding: "16px 58px",
    },
    ".save-form-btn:hover": {
      color: "#C6A87D !important",
      background: "#FBFBFB !important",
    },
    "@media (min-width: 1px) and (max-width:431px)": {
      ".main-box": {
        padding: "0px",
      },
      ".about-heading": {
        display: "none",
      },
      ".mt-40": {
        marginTop: "40px !important",
      },
    },
    "@media (min-width: 431px) and (max-width:769px)": {
      ".main-box": {
        padding: "0px",
      },
      ".about-heading": {
        paddingTop: "80px",
        marginTop: "40px",
      },
    },
  }));
  const { bookingId } = props;

  useEffect(() => {
    if (bookingId !== undefined && bookingId !== "") {
      setIsLoading(true);
      axios.get(baseUrl + "/booking/" + bookingId).then((result) => {
        let data = result?.data;
        console.log(data, "booking response");
        if (data !== undefined) {
          if (data?.diners?.length < 1 && data?.diner_count > 0) {
            let x = [];
            for (let i = 0; i < data?.diner_count; i++) {
              x.push({
                name: "deshan madurajith",
                email: "desh@email.com",
                mobile: "",
                meal_type: "",
              });
            }
            setInitialValues((prev) => ({ ...prev, diners: [...x] }));
          }
        }
        setIsLoading(false);
      });
    }
  }, [bookingId]);

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <BoxWrapper>
        <Navbar heading="Fill Diner Details" />
        <Box className="main-box">
          <Box>
            <Typography className="about-heading">
              Fill Diner Details
            </Typography>
            <p className="content">
              Hi Mayank Naruka, <br />
              Please fill diner details below:
            </p>
            <Formik
              initialValues={initialValues}
              // validationSchema={Yup.object({
              //   organizationName: Yup.string().required(
              //     "Organization Name is required"
              //   ),
              //   users: Yup.array().of(
              //     Yup.object().shape({
              //       name: Yup.string().required("Name required"),
              //       email: Yup.string()
              //         .required("email required")
              //         .email("Enter valid email"),
              //     })
              //   ),
              // })}
              onSubmit={(values) =>
                console.log(JSON.stringify(values, null, 2))
              }
              render={({ values, touched, errors, handleChange }) => (
                <form className="form-container">
                  <FieldArray
                    name="diners"
                    render={(arrayHelpers) => {
                      const diners = values.diners;
                      console.log(values, "asd");
                      return (
                        <>
                          {diners &&
                            diners.length > 0 &&
                            diners.map((diner, index) => (
                              <>
                                <Typography
                                  variant="h5"
                                  component="h5"
                                  className="details"
                                >
                                  Diner #{index + 1}
                                </Typography>
                                <Divider />
                                <div className="form-row">
                                  <TextField
                                    error={
                                      touched[`diners.${index}.name`] &&
                                      Boolean(errors[`diners.${index}.name`])
                                    }
                                    helperText={
                                      touched[`diners.${index}.name`] &&
                                      errors[`diners.${index}.name`]
                                    }
                                    id="standard-error"
                                    label="Diner Name"
                                    value={diner.name}
                                    variant="standard"
                                    className="form-control"
                                    fullWidth={true}
                                    name={`diners.${index}.name`}
                                    onChange={handleChange}
                                  />
                                  <TextField
                                    error={
                                      touched[`diners.${index}.email`] &&
                                      Boolean(errors[`diners.${index}.email`])
                                    }
                                    helperText={
                                      touched[`diners.${index}.email`] &&
                                      errors[`diners.${index}.email`]
                                    }
                                    id="standard-error"
                                    label="Diner Mobile"
                                    variant="standard"
                                    className="form-control"
                                    fullWidth={true}
                                    name={`diners.${index}.email`}
                                    value={diner.email}
                                    onChange={handleChange}
                                  />
                                  <TextField
                                    error={
                                      touched[`diners.${index}.meal_type`] &&
                                      Boolean(
                                        errors[`diners.${index}.meal_type`]
                                      )
                                    }
                                    helperText={
                                      touched[`diners.${index}.meal_type`] &&
                                      errors[`diners.${index}.meal_type`]
                                    }
                                    id="standard-error"
                                    label="Diner email"
                                    variant="standard"
                                    className="form-control"
                                    fullWidth={true}
                                    name={`diners.${index}.mobile`}
                                    value={diner.mobile}
                                    onChange={handleChange}
                                  />
                                  <TextField
                                    error={
                                      touched[`diners.${index}.meal_type`] &&
                                      Boolean(
                                        errors[`diners.${index}.meal_type`]
                                      )
                                    }
                                    helperText={
                                      touched[`diners.${index}.meal_type`] &&
                                      errors[`diners.${index}.meal_type`]
                                    }
                                    id="standard-error"
                                    label="Diner Preferences"
                                    variant="standard"
                                    className="form-control"
                                    fullWidth={true}
                                    name={`diners.${index}.meal_type`}
                                    value={diner.meal_type}
                                    onChange={handleChange}
                                  />
                                </div>
                              </>
                            ))}
                        </>
                      );
                    }}
                  />
                  <div className="form-row">
                    <Button type="submit" className="save-form-btn">
                      Save
                    </Button>
                  </div>
                </form>
              )}
            />
            <p className="content">
              We look forward to hosting you soon! <br /> <br />
              Thank you.
              <br /> <br />
              Team Chefs-a-Porter
            </p>
          </Box>
        </Box>

        <NeedHelp />
        <Footer />
        <FooterEnd />
      </BoxWrapper>
    </React.Fragment>
  );
};
export default HostDetails;
