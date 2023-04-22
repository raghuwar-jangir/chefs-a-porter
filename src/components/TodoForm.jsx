import React, { useContext, useState, memo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Select, MenuItem, Modal } from "@mui/material";
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

const style = {
    ".modal-div": {
        display: "block",
        zIndex: "1055",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0px",
        left: "0px",
        overflowX: "hidden",
        overflowY: "auto",
        outline: "0",
    },
    ".modal-content": {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#DCD7CB",
        boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.16)",
        padding: "40px 30px 20px",
        borderRadius: "0px",
    },
    ".modal-dialog": {
        width: "800px",
        alignItems: "center",
        display: "flex",
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "4.25em",
    },
    ".modal-header": {
        display: "flex",
        padding: "0px",
        marginBottom: "30px",
        borderBottom: "none",
        position: "relative",
        justifyContent: "flex-start",
        flexShrink: "0",
        alignItems: "center",
    },
    ".form-arrow": {
        fontSize: "20px",
        marginRight: "16px",
    },
    ".modal-title": {
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "24px",
    },
    ".close": {
        position: "absolute",
        padding: " 0px",
        border: " 0px",
        background: "transparent",
        right: "0px",
    },
    ".close-icon": {
        fontSize: "28px",
        marginRight: "0px",
    },
    ".modal-body": {
        padding: "0px",
        position: "relative",
        flex: "1 1 auto",
    },
    ".modal-child": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
    },
    ".initial-box": {
        borderRight: "10px solid #DCD7CB",
        padding: "20px 16px",
        background: "#FBFBFB",
    },
    ".second-box": {
        borderLeft: "10px solid #DCD7CB",
        padding: "20px 16px",
        background: "#FBFBFB",
    },
    ".modal-people": {
        fontSize: "1rem",
        lineHeight: "1.2",
        fontWeight: "500",
        marginBottom: "0.5rem",
        display: "flex",
        fontFamily: "ProximaNovaA-Regular",
        alignItems: "center",
    },
    ".modal-people-details": {
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: "24px",
        color: "#080B0E",
        marginBottom: "40px",
    },
    ".add-btn": {
        padding: "12px 8px",
        border: "1px solid #C6A87D",
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: "#080B0E",
        background: "transparent",
        display: "flex",
        placeContent: "center",
        placeItems: "center",
    },
    ".add-icon": {
        marginRight: "10px",
        fontSize: "22px",
    },
    ".recipient": {
        padding: "0px",
        display: "flex",
        flexWrap: "wrap",
        background: "#FBFBFB",
        justifyContent: "center",
        flexDirection: "column",
    },
    ".guest-1": {
        fontFamily: "Bon Vivant",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "25px",
        color: "#080B0E",
        textAlign: "center",
        marginBottom: "38px",
    },
    ".form-field": {
        marginBottom: "28px",
        position: "relative",
    },
    ".form-label": {
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "19px",
        color: "#080B0E",
        marginBottom: "16px",
    },
    ".form-control": {
        paddingLeft: "10px",
        flex: "1",
        outline: "none",
        backgroundColor: "transparent",
        border: "0px",
        borderBottom: "0.25px solid #080B0E",
        borderRadius: "0px",
        paddingRight: "0px",
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "19px",
        color: "#080B0E",
        display: "block",
        width: "100%",
        padding: "0.75rem 0px 0.375rem 0px",
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
    ".form-control-drop": {
        paddingLeft: "10px",
        flex: "1",
        outline: "none",
        backgroundColor: "transparent",
        border: "0px",
        borderBottom: "0.25px solid #080B0E",
        borderRadius: "0px",
        // paddingLeft: "0px",
        paddingRight: "0px",
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "19px",
        color: "#080B0E",
        display: "block",
        width: "100%",
        padding: "0px 0.75rem 0.375rem 0px",
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
    ".your-box": {
        display: "flex",
        justifyContent: "space-between",
    },
    ".your-food": {
        marginBottom: "28px",
    },
    ".modal-add": {
        width: "100%",
        background: " #080B0E",
        border: "0px",
        borderRadius: "0px",
        padding: "19px 10px",
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "19px",
        color: "#FBFBFB",
        cursor: "pointer",
    },
    ".view-break": {
        marginTop: "40px",
    },
    ".view-text-box": {
        display: "flex",
        padding: "0px",
        placeItems: "center",
    },
    ".rate-text": {
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "32px",
        lineHeight: "39px",
        color: "#080B0E",
    },
    ".per-text": {
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: 250,
        fontSize: "16px",
        lineHeight: "19px",
        color: "#080B0E",
        marginLeft: "8px",
    },
    ".done-btn": {
        width: "max-content",
        marginLeft: "auto",
        border: "0px",
        background: "#080B0E",
        color: " #FBFBFB",
        padding: "14.5px 30px",
        marginTop: " 0px",
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "19px",
        cursor: "pointer",
    },
    ".contact": {
        position: "absolute",
        bottom: "0px",
        right: "0px",
        zIndex: 1000,
    },
    ".css-1x51dt5-MuiInputBase-input-MuiInput-input": {
        padding: "0px !important",
    },
    ".contact-down": {
        fontSize: "15px",
        paddingBottom: "9px",
    },
    ".guest-required-details": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px",
        gap: "8px",
        background: "rgba(220, 215, 203, 0.2)",
        position: "relative",
        marginBottom: "20px",
    },
    ".guest-no": {
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: "17px",
        textAlign: "center",
        color: "#080B0E",
    },
    ".guest-name": {
        fontFamily: "ProximaNovaA-Regular",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "17px",
        color: "#080B0E",
        marginBottom: "0px",
    },
    ".guest-gmail": {
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: "17px",
        color: "#080B0E",
        marginBottom: "0px",
        position: "relative",
    },
    ".divider": {
        fontFamily: "Proxima Nova Alt",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "20px",
        color: "#080B0E",
        marginBottom: "0px",
        position: "relative",
    },
    ".guest-close": {
        color: " #080B0E",
        fontSize: "19px",
        position: "absolute",
        right: "8px",
    },
    "@media (min-width: 1px) and (max-width:768px)": {
        ".modal-child": {
            display: "flex",
            flexDirection: "column",
        },
        ".modal-dialog": {
            width: "500px",
        },
        ".initial-box": {
            borderRight: "0px",
        },
        ".second-box": {
            borderLeft: "0px",
        },
    },
};

const TodoForm = ({
                      setTodos,
                      todos,
                      setOpen,
                      setShowData,
                      setContactPopUp,
                      open,
                      totalSeats
                  }) => {
    const { mealTypeData, setChefFormData, setIsChefData } =
        useContext(UsersContext);

    return (
        <React.Fragment>
            <Modal
                keepMounted
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            contact: "",
                            foodPreference: "Vegan",
                            totalSeats: totalSeats,
                        }}
                        validationSchema={validationSchemaTodo}
                        onSubmit={(values, { resetForm }) => {
                            // setIsChefData(true)
                            // setChefFormData(values);
                            if (totalSeats - (todos.length + 1) < 0) {
                                alert("Pls select more seats to add members");
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
                                                                {todos.length}/{totalSeats} Guest details
                                                                entered
                                                            </div>
                                                            <div className="modal-people-details">
                                                                Chefs à Porter will contact your guests to
                                                                collect allergen details directly. <br /> This
                                                                experience is not suitable for children
                                                            </div>
                                                            {/* <button className="add-btn"><AddIcon className="add-icon"/>Add Guest</button> */}
                                                            {todos.map((todo, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="guest-required-details"
                                                                >
                                  <span className="guest-no">
                                    # {index + 1}
                                  </span>
                                                                    <span className="guest-name">
                                    {todo.name}
                                  </span>
                                                                    <span className="divider">|</span>
                                                                    <div className="guest-gmail">
                                                                        {todo.email}
                                                                    </div>
                                                                    <CloseIcon
                                                                        className="guest-close"
                                                                        onClick={() =>
                                                                            setTodos(
                                                                                todos.filter(
                                                                                    (todo, todoIndex) =>
                                                                                        todoIndex !== index
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
                                                                    <label
                                                                        className="form-label"
                                                                        htmlFor="contact"
                                                                    >
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
                                                                                <div className="view-text">
                                                                                    View Menu
                                                                                </div>
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
                                                                                            backgroundColor:
                                                                                                "#DCD7CB !important",
                                                                                            li: {
                                                                                                fontFamily:
                                                                                                    "ProximaNovaA-Regular",
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
                                                                                                backgroundColor:
                                                                                                    "unset !important",
                                                                                            },
                                                                                            "li:last-child": {
                                                                                                borderBottom: "none",
                                                                                            },
                                                                                            "&& .Mui-selected": {
                                                                                                backgroundColor:
                                                                                                    "unset !important",
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
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default memo(TodoForm);
