import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
// import { useFormik } from "formik";
// import * as Yup from 'yup';

const PersonalInfo = ({formik}) => {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  // const defaultValues = {
  //   fullName: '',
  //   email:'',
  //   phoneNumber:'',
  //   dateOfBirth: '',
  //   nationality:'',
  // }

  // const validationSchema = Yup.object({
  //   fullName: Yup.string().required('Name is required'),
  //   email: Yup.string()
  //       .required('Email is required')
  //       .email('Invalid email'),
  //       phoneNumber: Yup.string().required('Phone number is required'),
  //       dateOfBirth: Yup.string().required('Date of birth for the user is must be 18 or above'),
  //       nationality: Yup.string().required('Natioanality is required')
  // })

  // const formik = useFormik({
  //   enableReinitialize: true,
  //   validateOnChange: false,
  //   validateOnBlur: false,
  //   initialValues: defaultValues,
  //   validationSchema: validationSchema,
  //   onSubmit: values =>{
  //     console.log('go to next step');
  //   }
  // })

  return (
    <>
      <Box sx={{mx: '40px', p:'10px'}}>
        <Card>
          <CardHeader title="Personal Information" />
          <form>
            <CardContent sx={{pl:'30px !important'}}>
              <Grid container spacing={2}>
                <Grid items xs={6} sx={{pr: '10px', pb: '10px'}}>
                  <TextField
                    name="fullName"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.fullName &&
                      Boolean(formik.errors.fullName)
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                  />
                </Grid>
                <Grid items xs={6}  sx={{pb: '10px'}}>
                  <TextField
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.email &&
                      Boolean(formik.errors.email)
                    }
                    helperText={
                      formik.touched.email && formik.errors.email
                    }
                  />
                </Grid>
                <Grid items xs={4} sx={{pr: '10px', pb: '10px'}}>
                  <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                  />
                </Grid>
                <Grid items xs={4} sx={{pr: '10px', pb: '10px'}}>
                  <TextField
                    name="dateOfBirth"
                    label="Date of Birth"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.dateOfBirth &&
                      Boolean(formik.errors.dateOfBirth)
                    }
                    helperText={
                      formik.touched.dateOfBirth && formik.errors.dateOfBirth
                    }
                  />
                </Grid>
                <Grid items xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender"
                      id="gender"
                      value={gender}
                      label="Gender"
                      onChange={handleChange}
                      name='gender'
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid items xs={4} sx={{pr: '10px', pb: '10px'}}>
                  <TextField
                    name="nationality"
                    label="Nationality"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.nationality}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.nationality &&
                      Boolean(formik.errors.nationality)
                    }
                    helperText={
                      formik.touched.nationality && formik.errors.nationality
                    }
                  />
                </Grid>
                <Grid items xs={4}>
                  <Button variant="contained">Upload Image</Button>
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    id="upload-image"
                    // onChange={event => {
                    //   const files = event.target.files
                    //   setSelectedImages([...selectedImages, ...files])
                    //   formik.setFieldValue('imageUrl', [...formik.values.imageUrl, ...files])
                    // }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default PersonalInfo;
