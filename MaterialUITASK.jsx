import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormLabel, TextField, Button, Box, MenuItem, RadioGroup, FormControlLabel, Radio } from "@mui/material";

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
      <Box
        sx={{
          width: 1050,
        }}
      >

        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ textAlign: "center", fontSize: "30px", margin: "10px" }}>
            Job seekers Application Form
          </Box>
          <Box sx={{ textAlign: "center", marginBottom: "20px" }}>Looking for a job ? Fill in the form below with the required information.</Box>
          <Box sx={{ width: "100%", height: "0.5px", backgroundColor: "black", marginBottom: "30px" }}></Box>
          <FormLabel>Name</FormLabel>
          <Box sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>

            <TextField
              fullWidth
              placeholder="Firstname"
              name="FirstName"
              margin="normal"
              value={formik.values.FirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.FirstName && Boolean(formik.errors.FirstName)}
              helperText={formik.touched.FirstName && formik.errors.FirstName}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />

            <TextField
              fullWidth
              placeholder="Last Name"
              name="LastName"
              margin="normal"
              value={formik.values.LastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.LastName && Boolean(formik.errors.LastName)}
              helperText={formik.touched.LastName && formik.errors.LastName}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />

          </Box>
          <FormLabel>Email</FormLabel>
          <TextField
            fullWidth
            placeholder="Email"
            name="email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              backgroundColor: "#cabda6",
            }}
          />

          <FormLabel>Address</FormLabel>

          <TextField
            fullWidth
            placeholder="Address"
            name="Address"
            margin="normal"
            value={formik.values.Address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Address && Boolean(formik.errors.Address)}
            helperText={formik.touched.Address && formik.errors.Address}
            sx={{
              backgroundColor: "#cabda6",
            }}
          />

          <Box sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
            <TextField
              fullWidth
              placeholder="City"
              name="City"
              margin="normal"
              value={formik.values.City}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.City && Boolean(formik.errors.City)}
              helperText={formik.touched.City && formik.errors.City}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />

            <TextField
              fullWidth
              placeholder="Region"
              name="Region"
              margin="normal"
              value={formik.values.Region}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Region && Boolean(formik.errors.Region)}
              helperText={formik.touched.Region && formik.errors.Region}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
            <TextField
              fullWidth
              placeholder="Zip"
              name="Zip"
              margin="normal"
              value={formik.values.Zip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Zip && Boolean(formik.errors.Zip)}
              helperText={formik.touched.Zip && formik.errors.Zip}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />

            <TextField
              fullWidth
              placeholder="Country"
              name="Country"
              margin="normal"
              value={formik.values.Country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Country && Boolean(formik.errors.Country)}
              helperText={formik.touched.Country && formik.errors.Country}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />
          </Box>

          <FormLabel>Phone</FormLabel>
          <Box sx={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>

            <TextField
              fullWidth
              placeholder="Phone"
              name="Phone"
              margin="normal"
              value={formik.values.Phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Phone && Boolean(formik.errors.Phone)}
              helperText={formik.touched.Phone && formik.errors.Phone}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />

            <TextField
              fullWidth
              placeholder="Alternate"
              name="Alternate"
              margin="normal"
              value={formik.values.Alternate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Alternate && Boolean(formik.errors.Alternate)}
              helperText={formik.touched.Alternate && formik.errors.Alternate}
              sx={{
                backgroundColor: "#cabda6",
              }}
            />

          </Box>

          <Box sx={{ display: "flex", gap: "12px", width: "100%" }}>

            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <FormLabel>Position that you applying for</FormLabel>

              <TextField
                select
                fullWidth
                placeholder="Position"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.position && Boolean(formik.errors.position)}
                helperText={formik.touched.position && formik.errors.position}
                sx={{
                  backgroundColor: "#cabda6",
                }}
              >
                <MenuItem value="">Select Position</MenuItem>
                <MenuItem value="frontend">Frontend</MenuItem>
                <MenuItem value="backend">Backend</MenuItem>
                <MenuItem value="fullstack">Fullstack</MenuItem>

              </TextField>
            </Box>

            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "6px" }}>
              <FormLabel>Job Type</FormLabel>

              <TextField
                select
                fullWidth
                placeholder="Jobtype"
                name="Jobtype"
                value={formik.values.Jobtype}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Jobtype && Boolean(formik.errors.Jobtype)}
                helperText={formik.touched.Jobtype && formik.errors.Jobtype}
                sx={{
                  backgroundColor: "#cabda6",
                }}
              >
                <MenuItem value="">Select Type</MenuItem>
                <MenuItem value="Fulltime">Fulltime</MenuItem>
                <MenuItem value="Parttime">Parttime</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </TextField>
            </Box>

          </Box>

          <FormLabel>Add Resume</FormLabel>
          <TextField
            fullWidth
            placeholder="Paste resume link (Google Drive / Dropbox)"
            name="Resume"
            value={formik.values.Resume}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Resume && Boolean(formik.errors.Resume)}
            helperText={formik.touched.Resume && formik.errors.Resume}
            sx={{
              backgroundColor: "#cabda6",
            }}
          />

          <FormLabel>Hoe did you hear about us?</FormLabel>
          <RadioGroup
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
      </Box>
    </Box>
  );
};

export default MuiFormikForm;
