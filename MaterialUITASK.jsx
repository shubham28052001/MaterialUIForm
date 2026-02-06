import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Box, MenuItem, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";

const MuiFormikForm = () => {

  const formik = useFormik({

    initialValues: {
      FirstName: "",
      LastName: "",
      email: "",
      Address: "",
      City: "",
      Region: "",
      Zip: "",
      Country: "",
      Phone: "",
      Alternate: "",
      position: "",
      Jobtype: "",
      Resume: "",
      Redibtn: ""
    },

    validationSchema: Yup.object({

      FirstName: Yup.string()
        .min(2, "Minimum 2 characters")
        .required("First name required"),

      LastName: Yup.string()
        .min(2, "Minimum 2 characters")
        .required("Last name required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email required"),

      Address: Yup.string()
        .required("Address required"),

      City: Yup.string()
        .required("City required"),

      Region: Yup.string()
        .required("Region required"),

      Zip: Yup.string()
        .required("Zip required"),

      Country: Yup.string()
        .required("Country required"),

      Phone: Yup.string()
        .required("Phone required"),

      Alternate: Yup.string()
        .notRequired(),

      position: Yup.string()
        .required("Select position"),

      Jobtype: Yup.string()
        .required("Select job type"),

      Resume: Yup.string()
        .required("Resume required"),

      Redibtn: Yup.string()
        .required("Please select one"),

    }),
    onSubmit: (values) => {
      console.table(values);
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "wheat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          width: 1050,
        }}
      >

        <form onSubmit={formik.handleSubmit}>
          <Typography fontWeight="bold" variant="h4" align="center" sx={{ mb: 1 }}>
            Job seekers Application Form
          </Typography>

          <Typography align="center" sx={{ mb: 2 }}>
            Looking for a job ? Fill in the form below with the required information.
          </Typography>

          <Grid sx={{ width: "100%", height: "0.5px", backgroundColor: "black", marginBottom: "30px" }}></Grid>


//

          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            Name
          </Typography>

          <Grid sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>

            <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Firstname"
                name="FirstName"
                margin="normal"
                value={formik.values.FirstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              />

              {formik.touched.FirstName && formik.errors.FirstName && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.FirstName}
                </Typography>
              )}
            </Grid>

            <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Last Name"
                name="LastName"
                margin="normal"
                value={formik.values.LastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.LastName && Boolean(formik.errors.LastName)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              />
              {formik.touched.LastName && formik.errors.LastName && (
                <Typography color="error" fontWeight="bold" fontSize="12px">
                  {formik.errors.LastName}
                </Typography>
              )}
            </Grid>

          </Grid>

          <Typography fontWeight="bold">
            Email
          </Typography>


          <TextField
            fullWidth
            placeholder="Email"
            name="email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}

            sx={{
              backgroundColor: "#e1ded8",
            }}
          />

          {formik.touched.email && formik.errors.email && (
            <Typography color="error" fontWeight="bold" fontSize="14px">
              {formik.errors.email}
            </Typography>
          )}

          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            Address
          </Typography>

          <TextField
            fullWidth
            placeholder="Address"
            name="Address"
            margin="normal"
            value={formik.values.Address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Address && Boolean(formik.errors.Address)}
            sx={{
              backgroundColor: "#e1ded8",
            }}
          />

          {formik.touched.Address && formik.errors.Address && (
            <Typography color="error" fontWeight="bold" fontSize="14px">
              {formik.errors.Address}
            </Typography>
          )}

          <Grid sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>

            <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="City"
                name="City"
                margin="normal"
                value={formik.values.City}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.City && Boolean(formik.errors.City)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              />
              {formik.touched.City && formik.errors.City && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.City}
                </Typography>
              )}
            </Grid>

            <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Region"
                name="Region"
                margin="normal"
                value={formik.values.Region}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Region && Boolean(formik.errors.Region)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              />
              {formik.touched.Region && formik.errors.Region && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.Region}
                </Typography>
              )}
            </Grid>

          </Grid>

          <Grid sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>

            <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Zip"
                name="Zip"
                margin="normal"
                value={formik.values.Zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Zip && Boolean(formik.errors.Zip)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              />
              {formik.touched.Zip && formik.errors.Zip && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.Zip}
                </Typography>
              )}
            </Grid>

            <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Country"
                name="Country"
                margin="normal"
                value={formik.values.Country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Country && Boolean(formik.errors.Country)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              />
              {formik.touched.Country && formik.errors.Country && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.Country}
                </Typography>
              )}
            </Grid>

          </Grid>

          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            Phone
          </Typography>

          <Grid sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>

            <Grid sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Phone"
                name="Phone"
                margin="normal"
                value={formik.values.Phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Phone && Boolean(formik.errors.Phone)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              />

              {formik.touched.Phone && formik.errors.Phone && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.Phone}
                </Typography>
              )}
            </Grid>


            <TextField
              fullWidth
              placeholder="Alternate"
              name="Alternate"
              margin="normal"
              value={formik.values.Alternate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Alternate && Boolean(formik.errors.Alternate)}
              sx={{
                backgroundColor: "#e1ded8",
              }}
            />

          </Grid>

          <Grid sx={{ display: "flex", gap: "12px", width: "100%" }}>

            <Grid sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography fontWeight="bold" sx={{ mb: 1 }}>
                Position that you applying for
              </Typography>
              <TextField
                select
                fullWidth
                placeholder="Position"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.position && Boolean(formik.errors.position)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              >
                <MenuItem value="">Select Position</MenuItem>
                <MenuItem value="frontend">Frontend</MenuItem>
                <MenuItem value="backend">Backend</MenuItem>
                <MenuItem value="fullstack">Fullstack</MenuItem>

              </TextField>

              {formik.touched.position && formik.errors.position && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.position}
                </Typography>
              )}
            </Grid>

            <Grid sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography fontWeight="bold" sx={{ mb: 1 }}>
                Job Type
              </Typography>
              <TextField
                select
                fullWidth
                placeholder="Jobtype"
                name="Jobtype"
                value={formik.values.Jobtype}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Jobtype && Boolean(formik.errors.Jobtype)}
                sx={{
                  backgroundColor: "#e1ded8",
                }}
              >
                <MenuItem value="">Select Type</MenuItem>
                <MenuItem value="Fulltime">Fulltime</MenuItem>
                <MenuItem value="Parttime">Parttime</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </TextField>

              {formik.touched.Jobtype && formik.errors.Jobtype && (
                <Typography color="error" fontWeight="bold" fontSize="14px">
                  {formik.errors.Jobtype}
                </Typography>
              )}
            </Grid>

          </Grid>

          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            Add Resume
          </Typography>

          <TextField
            fullWidth
            placeholder="Paste resume link (Google Drive / Dropbox)"
            name="Resume"
            value={formik.values.Resume}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Resume && Boolean(formik.errors.Resume)}
            sx={{
              backgroundColor: "#e1ded8",
            }}
          />
          {formik.touched.Resume && formik.errors.Resume && (
            <Typography color="error" fontWeight="bold" fontSize="14px">
              {formik.errors.Resume}
            </Typography>
          )}
          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            How did you hear about us?
          </Typography>
          <RadioGroup row
            name="Redibtn"
            value={formik.values.Redibtn}
            onChange={formik.handleChange}
          >
            <FormControlLabel value="google" control={<Radio />} label="Google" />
            <FormControlLabel value="friend" control={<Radio />} label="Friend" />
            <FormControlLabel value="Advert" control={<Radio />} label="Advert" />
            <FormControlLabel value="Others" control={<Radio />} label="Others" />

          </RadioGroup>

          {formik.touched.Redibtn && formik.errors.Redibtn}

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{
              m: 3,
              background: "#7b4a2e",
              "&:hover": {
                background: "#5e3620",
              },
            }}
          >
            Submit
          </Button>

        </form>
      </Grid>
    </Box>
  );
};

export default MuiFormikForm;
