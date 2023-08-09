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
import { FieldArray, Form, Formik } from "formik";
import axios from "axios";
import configuration from "../../../configuration";
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";

const HostDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    diners: [
      {
        name: "",
        email: "",
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
        padding: "15px",
      },
      ".about-heading": {
        display: "none",
      },
      ".mt-40": {
        marginTop: "40px !important",
      },
      ".form-row": {
        flexWrap: "wrap"
      },
      ".form-control": {
        marginTop: '10px'
      },
      ".form-control:last-child": {
        padding: "0 0.75rem 0 0",
      },
      ".save-form-btn": {
        marginRight: '12px',
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
        
        if (data !== undefined) {
          let x = [];
          if (data?.diners?.length < 1 && data?.diner_count > 0) {
            
            for (let i = 0; i < data?.diner_count; i++) {
              x.push({
                name: i === 0 && data?.user?.name ? data?.user?.name : "",
                email: i === 0 && data?.user?.email ? data?.user?.email : "",
                mobile: i === 0 && data?.user?.mobile ? data?.user?.mobile : "",
                meal_type: "",
              });
            }
          } else {
            data.diners.forEach((dinerValue) => {
              x.push({
                name: dinerValue?.user?.name,
                email: dinerValue?.user?.email,
                mobile: dinerValue?.user?.mobile,
                meal_type: dinerValue?.meal_type
              })
            })
          }
          setInitialValues((prev) => ({ ...prev, diners: [...x] }));
        }
        setIsLoading(false);
      });
    }
  }, [bookingId]);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
              validationSchema={Yup.object({
                diners: Yup.array().of(
                  Yup.object().shape({
                    name: Yup.string().trim().required("Name is required"),
                    email: Yup.string().trim()
                      .required("Email is required")
                      .email("Enter valid email"),
                    mobile: Yup.string().trim().matches(phoneRegExp, 'Mobile number is not valid')
                    .required("Mobile is required"),
                    meal_type: Yup.string().trim()
                    .required("Meal type is required"),
                  })
                ),
              })}
              onSubmit={(values) =>{
                console.log(JSON.stringify(values, null, 2));
                let body = {};
                values.diners.forEach((item) => {
                  if(item.name !== ''){
                    if(body['name'] === undefined){
                      body['name'] = [];
                    }
                    body['name'].push(item.name);
                  }
                  if(item.email !== ''){
                    if(body['email'] === undefined){
                      body['email'] = [];
                    }
                    body['email'].push(item.email);
                  }
                  if(item.mobile !== ''){
                    if(body['mobile'] === undefined){
                      body['mobile'] = [];
                    }
                    body['mobile'].push(Number(item.mobile));
                  }
                  if(item.meal_type !== ''){
                    if(body['meal_type'] === undefined){
                      body['meal_type'] = [];
                    }
                    body['meal_type'].push(item.meal_type);
                  }
                })
                axios.post(baseUrl + "/booking/fillhostdetailsapi/" + bookingId, body).then((response) => {
                  toast.success("Details saved successfully.");
                });
              }}
              render={({ values, touched, errors, handleChange }) => {
                // console.log(touched, errors?.['diners']?.[1]?.['meal_type'], 'sad errors');
                return (
                <Form className="form-container">
                  
                  <FieldArray
                    name="diners"
                    render={(arrayHelpers) => {
                      const diners = values.diners;
                      // console.log(values, "asd");
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
                                      touched?.['diners']?.[index]?.['name'] &&
                                      errors?.['diners']?.[index]?.['name'] ? true : false
                                    }
                                    helperText={
                                      touched?.['diners']?.[index]?.['name'] &&
                                      errors?.['diners']?.[index]?.['name'] ?  errors?.['diners']?.[index]?.['name']  :''
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
                                      touched?.['diners']?.[index]?.['mobile'] &&
                                      Boolean(
                                        errors?.['diners']?.[index]?.['mobile']
                                      )
                                    }
                                    helperText={
                                      touched?.['diners']?.[index]?.['mobile'] &&
                                      errors?.['diners']?.[index]?.['mobile']
                                    }
                                    id="standard-error"
                                    label="Diner Mobile"
                                    variant="standard"
                                    className="form-control"
                                    fullWidth={true}
                                    name={`diners.${index}.mobile`}
                                    value={diner.mobile}
                                    onChange={handleChange}
                                  />
                                  <TextField
                                    error={
                                      touched?.['diners']?.[index]?.['email'] &&
                                      Boolean(errors?.['diners']?.[index]?.['email'])
                                    }
                                    helperText={
                                      touched?.['diners']?.[index]?.['email'] &&
                                      errors?.['diners']?.[index]?.['email']
                                    }
                                    id="standard-error"
                                    label="Diner Email"
                                    variant="standard"
                                    className="form-control"
                                    fullWidth={true}
                                    name={`diners.${index}.email`}
                                    value={diner.email}
                                    onChange={handleChange}
                                  />
                                  <TextField
                                    error={
                                      touched?.['diners']?.[index]?.['meal_type'] &&
                                      Boolean(
                                        errors?.['diners']?.[index]?.['meal_type']
                                      )
                                    }
                                    helperText={
                                      touched?.['diners']?.[index]?.['meal_type'] &&
                                      errors?.['diners']?.[index]?.['meal_type']
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
                </Form>
              )}}
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
        <ToastContainer />
      </BoxWrapper>
    </React.Fragment>
  );
};
export default HostDetails;
