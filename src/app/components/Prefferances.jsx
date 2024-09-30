import React, { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

const Prefferances = () => {
  const [contact, setContact] = useState("");
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setContact(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <Box sx={{ mx: "40px", p: "10px" }}>
        <Card>
          <CardHeader title="Account Information" />
          <form>
            <CardContent sx={{ pl: "30px !important" }}>
              <Grid container spacing={2}>
                <Grid items xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="contact-method-label">
                      Prefered Contact Method
                    </InputLabel>
                    <Select
                      labelId="contact-method"
                      id="contact"
                      value={contact}
                      label="Prefered Contact Method"
                      onChange={handleChange}
                      name="contactMethod"
                    >
                      <MenuItem value="email">Email</MenuItem>
                      <MenuItem value="phone">Phone</MenuItem>
                      <MenuItem value="sms">SMS</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid items xs={6} sx={{ pr: "10px", pb: "10px" }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Subscription to Newsletter"
                  />
                </Grid>

                <Grid items xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="language-preference-label">
                      Language Preference
                    </InputLabel>
                    <Select
                      labelId="language-preference"
                      id="language"
                      value={language}
                      label="Language Preference"
                      onChange={handleLanguageChange}
                      name="language"
                    >
                      <MenuItem value="english">English</MenuItem>
                      <MenuItem value="spanish">Spanish</MenuItem>
                      <MenuItem value="french">French</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid items xs={6} sx={{ pr: "10px", pb: "10px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Typography>Interest Areas: </Typography>

                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Technology"
                      />
                      <FormControlLabel control={<Checkbox />} label="Health" />
                      <FormControlLabel control={<Checkbox />} label="Sports" />
                      <FormControlLabel control={<Checkbox />} label="Arts" />
                    </FormGroup>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default Prefferances;
