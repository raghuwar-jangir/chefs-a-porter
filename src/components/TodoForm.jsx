import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Select, MenuItem } from "@mui/material";
import * as Yup from "yup";
import UsersContext from "../context/UsersContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import people from "../assets/images/people.png";
import contact from "../assets/images/contact-form.png";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as _ from "lodash";
import Cookies from "js-cookie";
const validationSchemaTodo = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Incorrect Email Id")
        .required("please enter email"),
    contact: Yup.number()
        .typeError("That doesn't look like a phone number")
        .min(10)
        .required("contactNumber is required"),
});
const TodoForm = ({
  setTodos,
  todos,
  setOpen,
  setShowData,
  setContactPopUp,
}) => {
  const { mealTypeData, setChefFormData, setIsChefData } =
    useContext(UsersContext);
  const supperClubExperienceSeats = Cookies?.get("supperClubExperienceSeats");
  const experienceNumberOfSeats = parseInt(
    supperClubExperienceSeats?.replaceAll('"', "")
  );
  const supperClubExperienceTables = Cookies?.get("supperClubExperienceTables");
  const experienceNumberOfTables = parseInt(
    supperClubExperienceTables?.replaceAll('"', "")
  );
  const totalSeats = experienceNumberOfSeats + experienceNumberOfTables
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contact: "",
          foodPreference: "Vegan",
          totalSeats: totalSeats
        }}
        validationSchema={validationSchemaTodo}
        onSubmit={(values, { resetForm }) => {
          // setIsChefData(true)
          // setChefFormData(values);
          if ((totalSeats - (todos.length + 1)) < 0) {
            alert("Pls select more seats to add members")
            return;
          }
          setTodos([...todos, values]);
          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="modal-div">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <ArrowBackIcon className="form-arrow" />
                    <div className="modal-title" id="exampleModalLabel">
                      Add Guests
                    </div>
                    <button
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      className="close"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon className="close-icon" />
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="modal-child">
                      <div className="initial-box">
                        <div>
                          <div className="modal-people">
                            <img src={people} />
                            {todos.length}/{totalSeats} Guest details entered
                          </div>
                          <div className="modal-people-details">
                            Chefs à Porter will contact your guests to collect
                            allergen details directly. <br /> This experience is
                            not suitable for children
                          </div>
                          {/* <button className="add-btn"><AddIcon className="add-icon"/>Add Guest</button> */}
                          {todos.map((todo, index) => (
                            <div key={index} className="guest-required-details">
                              <span className="guest-no"># {index + 1}</span>
                              <span className="guest-name">{todo.name}</span>
                              <span className="divider">|</span>
                              <div className="guest-gmail">{todo.email}</div>
                              <CloseIcon
                                className="guest-close"
                                onClick={() =>
                                  setTodos(
                                    todos.filter(
                                      (todo, todoIndex) => todoIndex !== index
                                    )
                                  )
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="second-box">
                        <div className="recipient">
                          <div className="guest-1">
                            Guest # {todos.length + 1}
                          </div>
                          <Box className="row">
                            <Box className="form-field">
                              <label className="form-label" htmlFor="name">
                                Your Name
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Guest Name"
                                autoComplete="off"
                              />
                              <ErrorMessage name="name" />
                            </Box>
                            <Box className="form-field">
                              <label className="form-label" htmlFor="email">
                                Email Address
                              </label>
                              <Field
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email id"
                                autoComplete="off"
                              />
                              <ErrorMessage name="email" />
                            </Box>
                            <Box className="form-field">
                              <label className="form-label" htmlFor="contact">
                                Contact Number
                              </label>
                              <img
                                className="contact"
                                onClick={() => {
                                  setContactPopUp(true);
                                }}
                                src={contact}
                              />
                              <Field
                                variant="standard"
                                className="form-control"
                                type="contact"
                                id="contact"
                                name="contact"
                                placeholder="10 digit number"
                                autoComplete="off"
                                InputProps={{
                                  disableUnderline: true,
                                  padding: "0px",
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      +91{" "}
                                      <KeyboardArrowDownIcon className="contact-down" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                              <ErrorMessage name="contact" />
                            </Box>
                            <Box className="your-food">
                              {!_.isEmpty(mealTypeData) && (
                                <>
                                  <div className="your-box">
                                    <label
                                      className="form-label"
                                      htmlFor="select"
                                    >
                                      Your Food Preference
                                    </label>
                                    <div className="view-text">View Menu</div>
                                  </div>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="foodPreference"
                                    value={values.foodPreference}
                                    onChange={handleChange}
                                    defaultValue={values.foodPreference}
                                    className="form-control-drop"
                                    sx={{
                                      fontSize: "20px",
                                      ".MuiOutlinedInput-notchedOutline": {
                                        border: 0,
                                      },
                                      "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                        {
                                          border: "none",
                                        },
                                      ".MuiSelect-select": {
                                        padding: "0px 5px",
                                        fontFamily: "Proxima Nova Alt",
                                        fontStyle: "normal",
                                        fontWeight: 300,
                                        fontSize: "16px",
                                        lineHeight: "19px",
                                        color: "#222222",
                                        height: "20px !important",
                                        minHeight: "0px !important",
                                      },
                                    }}
                                    MenuProps={{
                                      PaperProps: {
                                        sx: {
                                          backgroundColor: "#DCD7CB !important",
                                          li: {
                                            fontFamily: "ProximaNovaA-Regular",
                                            borderBottom: "1px solid black",
                                            fontSize: "20px",
                                            fontWeight: "100",
                                            padding: "6px 0px",
                                            justifyContent: "start",
                                          },
                                          ul: {
                                            display: "flex",
                                            flexDirection: "column",
                                            padding: "16px",
                                          },
                                          "li:hover": {
                                            color: "#C6A87D!important",
                                            backgroundColor: "unset !important",
                                          },
                                          "li:last-child": {
                                            borderBottom: "none",
                                          },
                                          "&& .Mui-selected": {
                                            backgroundColor: "unset !important",
                                          },
                                          ".MuiSelect-select": {
                                            padding: "5px !important",
                                            fontSize: "17px",
                                          },
                                        },
                                      },
                                    }}
                                  >
                                    {mealTypeData?.map((item) => {
                                      return (
                                        <MenuItem value={item.name}>
                                          {item.name}
                                        </MenuItem>
                                      );
                                    })}
                                  </Select>
                                </>
                              )}
                            </Box>
                            <button type="submit" className="modal-add">
                              Add
                            </button>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="view-break">
                    <div className="view-text-box">
                      <div className="rate-text">
                        ₹ 2,500
                        <span className="per-text">Per dinner</span>
                      </div>
                      <button
                        type="submit"
                        onClick={() => {
                          setShowData(true);
                          setOpen(false);
                        }}
                        className="done-btn"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default TodoForm;
