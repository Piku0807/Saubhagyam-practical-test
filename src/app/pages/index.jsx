"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalInfo from "../components/PersonalInfo";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import AddressDetails from "../components/AddressDetails";
import AccountInfo from "../components/AccountInfo";
import Prefferances from "../components/Prefferances";

const steps = [
  "Personal Infermation",
  "Address Information",
  "Account Information",
  "Preferances",
  "Additional Information",
];

const Pages = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo formik={formik} />;
      case 1:
        return <AddressDetails formik={addressFormik} />;
      case 2:
        return <AccountInfo formik={accFormik} />;
      case 3:
        return <Prefferances />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  // Valdation for personal information
  const formik = useFormik({
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      nationality: "",
    },
    validationSchema: Yup.object({
      //   fullName: Yup.string().required("Name is required"),
      //   email: Yup.string().required("Email is required").email("Invalid email"),
      //   phoneNumber: Yup.string().required("Phone number is required"),
      //   dateOfBirth: Yup.string().required(
      //     "Date of birth for the user is must be 18 or above"
      //   ),
      //   nationality: Yup.string().required("Natioanality is required"),
    }),
    onSubmit: (values) => {
      console.log("go to next step");
      if (activeStep === steps.length - 1) {
        console.log("last step");
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });

  // Valdation for Address information
  const addressFormik = useFormik({
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    validationSchema: Yup.object({
      street: Yup.string().required("Street is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      zipCode: Yup.string().required("ZipCode is required"),
    }),
    onSubmit: (values) => {
      console.log("go to next step");
      if (activeStep === 2) {
        console.log("step 2");
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });

  // Valdation for Account information
  const accFormik = useFormik({
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      answer: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().min(8).required("Password is required"),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      answer: Yup.string().required("Answer is required"),
    }),
    onSubmit: (values) => {
      console.log("go to next step");
      if (activeStep === 3) {
        console.log("step 2");
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid item xs={12} sx={{ padding: "20px" }}>
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained">Submit</Button>
          ) : (
            <Button onClick={formik.handleSubmit} variant="contained">
              Next
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pages;
