import React, { useState } from 'react';
import { Box, Button, FormControl, Grid, MenuItem, Select, styled, TextField, Typography } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';


const MainWrapperBox = styled(Box)({
    backgroundColor: '#DCD7CB',
    padding: '16px',
    '.form-title': {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '29px',
        color: '#080B0E',
        textAlign: 'center'
    },

    '.diner-title': {
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        lineheight: '19px',
        fontWeight: '300',
        color: '#080B0E'
    },
    '.button-content': {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    '.counter': {
        display: 'block',
        margin: '0px auto'
    }
})

const ListMenuItem = styled(MenuItem)({
    borderBottom: '0.25px solid #080B0E'
})

const CommenButton = styled(Button)({
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '600',
    borderRadius: '0',
    backgroundColor: '#DCD7CB',
    color: '#080B0E',
    border: '0.5px solid #080B0E',
    padding: '10px',
    textTransform: 'capitalize',
})


const ExperienceForm = () => {

    const [count, setCount] = useState(0);

    const handleDecrement = () => {
    const handleDecrement = () => {
        setCount(count => Math.max(count - 1, 0));
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }


    const validationSchema = Yup.object().shape({
        email: Yup.string().required("email is required !!"),
        city: Yup.string().required("city is required !!"),
        date: Yup.string().required("date is required !!"),
        drinks: Yup.string().required("drinks is required !!"),
    })

    return (
        <React.Fragment>
            <MainWrapperBox>
                <Typography className='form-title'>
                    Host an Experience
                </Typography>

                <Formik
                    initialValues={{
                        email: "",
                        city: "",
                        date: "",
                        drinks: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                    }}
                >
                    {({ errors, touched, handleSubmit, values, handleChange, setFieldValue }) => (
                        <Form style={{ paddingTop: '20px' }} onSubmit={handleSubmit}>

                            <FormControl fullWidth>
                                <Field as={Select}
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="city"
                                    value={values.city}
                                    helperText={<ErrorMessage name='city' />}
                                    onChange={(e) => setFieldValue("city", e.target.value)}
                                >
                                    <ListMenuItem value={10}> Mumbai</ListMenuItem>
                                    <ListMenuItem value={20}> Delhi </ListMenuItem>
                                    <ListMenuItem value={30}> indor </ListMenuItem>
                                </Field>
                            </FormControl>
                            <Field
                                as={TextField}
                                fullWidth
                                type='date'
                                name="date"
                                variant="standard"
                                value={values.date}
                                placeholder='name is here'
                                onChange={handleChange}
                                margin="dense"
                                helperText={<ErrorMessage name='date' />}
                                sx={{ marginTop: '40px' }}
                            />
                            <FormControl fullWidth>
                                <Field as={Select}
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="drinks"
                                    onChnage={(e) => setFieldValue('drinks', e.target.value)}
                                    value={values.drinks}
                                    helperText={<ErrorMessage name='drinks' />}
                                    sx={{ marginTop: '40px' }}
                                >
                                    <ListMenuItem value={"Cocktail"}> Cocktail </ListMenuItem>
                                    <ListMenuItem value={"Brunch"}> Brunch </ListMenuItem>
                                    <ListMenuItem value={"High Tea"}> High Tea </ListMenuItem>
                                    <ListMenuItem value={"Lunch"}> Lunch </ListMenuItem>
                                    <ListMenuItem value={"Dinner"}> Dinner </ListMenuItem>
                                </Field>
                            </FormControl>
                            <Grid container spacing={0} sx={{ width: '100%' }} mt={'40px'} >
                                <Grid className='diner-title' item xs={6} >
                                    Number of diners
                                </Grid>
                                <Grid className='button-content' item xs={6}>
                                    <CommenButton
                                        onClick={() => handleDecrement()}
                                        disableElevation
                                    >
                                        -
                                    </CommenButton>

                                    <Typography className='counter'>
                                        {count}
                                    </Typography>

                                    <CommenButton
                                        color='primary'
                                        onClick={() => handleIncrement()}
                                        disableElevation
                                    >
                                        +
                                    </CommenButton>
                                </Grid>
                            </Grid>

                            <CommenButton
                                // variant="contained"
                                fullWidth
                                disableElevation
                                disableRipple={false}
                                type="submit"
                                color="primary"
                                sx={{ marginTop: '40px' }}
                            >

                                View Experiences

                            </CommenButton>




                        </Form>
                    )}

                </Formik>


            </MainWrapperBox>
        </React.Fragment >
    )
}

export default ExperienceForm;