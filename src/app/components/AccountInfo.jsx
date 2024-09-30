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

const AccountInfo = ({formik}) => {
    const [question, setQuestion] = useState("");

    const handleChange = (event) => {
        setQuestion(event.target.value);
    };
    

  return (
    <>
      <Box sx={{ mx: "40px", p: "10px" }}>
        <Card>
          <CardHeader title="Account Information" />
          <form>
            <CardContent sx={{ pl: "30px !important" }}>
              <Grid container spacing={2}>
                <Grid items xs={6} sx={{ pr: "10px", pb: "10px" }}>
                  <TextField
                    name="username"
                    label="Username"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={formik.touched.username && formik.errors.username}
                  />
                </Grid>
                <Grid items xs={6} sx={{ pb: "10px" }}>
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </Grid>
                <Grid items xs={4} sx={{ pr: "10px", pb: "10px" }}>
                  <TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  />
                </Grid>
                <Grid items xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="security-question-label">
                      Security Question
                    </InputLabel>
                    <Select
                      labelId="security-question"
                      id="question"
                      value={question}
                      label="Security Question"
                      onChange={handleChange}
                      name="question"
                    >
                      <MenuItem value="mother-name">
                        What is your mother’s maiden name?
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid items xs={4} sx={{ pr: "10px", pb: "10px" }}>
                  <TextField
                    name="answer"
                    label={"Answer to Security Question"}
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.answer}
                    onChange={formik.handleChange}
                    error={formik.touched.answer && Boolean(formik.errors.answer)}
                    helperText={formik.touched.answer && formik.errors.answer}
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

export default AccountInfo;
