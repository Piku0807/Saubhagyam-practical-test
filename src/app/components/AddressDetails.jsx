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

import countries from "../../../public/locales/countries.json";

const AddressDetails = ({formik}) => {
  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  
  return (
    <>
      <Box sx={{ mx: "40px", p: "10px" }}>
        <Card>
          <CardHeader title="Address Information" />
          <form>
            <CardContent sx={{ pl: "30px !important" }}>
              <Grid container spacing={2}>
                <Grid items xs={6} sx={{ pr: "10px", pb: "10px" }}>
                  <TextField
                    name="street"
                    label="Street Address"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.street && Boolean(formik.errors.street)
                    }
                    helperText={formik.touched.street && formik.errors.street}
                  />
                </Grid>
                <Grid items xs={6} sx={{ pb: "10px" }}>
                  <TextField
                    name="city"
                    label="City"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid items xs={4} sx={{ pr: "10px", pb: "10px" }}>
                  <TextField
                    name="state"
                    label="State/Province"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                  />
                </Grid>
                <Grid items xs={4} sx={{ pr: "10px", pb: "10px" }}>
                  <TextField
                    name="zipCode"
                    label="Postal/Zip Code"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.zipCode && Boolean(formik.errors.zipCode)
                    }
                    helperText={formik.touched.zipCode && formik.errors.zipCode}
                  />
                </Grid>
                <Grid items xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      labelId="country"
                      id="country"
                      value={country}
                      label="Country"
                      onChange={handleChange}
                      name="country"
                    >
                      {countries.map((index, country) => (
                        <MenuItem key={index} value={country.name}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default AddressDetails;
