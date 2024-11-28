import React, { useEffect } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { userSchema } from "../schema";

const UserFormikYup = ({ handleAddUser, selectedUser, handleUpdateUser }) => {
  const paperStyle = {
    padding: 20,
    maxWidth: 400,
    width: "100%",
    margin: "20px auto",
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    age: "",
  };

  //Formik
  const { values, setValues, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit: (values, action) => {
      if (selectedUser) {
        handleUpdateUser({ id: selectedUser.id, ...values });
      } else {
        handleAddUser(values);
      }
      action.resetForm();
    },
  });

  useEffect(() => {
    if (selectedUser)
        setValues({
            first_name: selectedUser.first_name,
            last_name: selectedUser.last_name,
            age: selectedUser.age,
        });
  }, [selectedUser, setValues]);

  return (
    <Paper elevation={2} style={paperStyle}>
      <Typography variant="h5">User Form</Typography>
      <form onSubmit={handleSubmit} autoComplete="OFF">
        <TextField
          label="First Name"
          fullWidth
          margin="dense"
          variant="standard"
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
          error={touched.first_name && Boolean(errors.first_name)}
          helperText={touched.first_name && errors.first_name}
        />

        <TextField
          label="Last Name"
          fullWidth
          margin="dense"
          variant="standard"
          name="last_name"
          value={values.last_name}
          onChange={handleChange}
          error={touched.last_name && Boolean(errors.last_name)}
          helperText={touched.last_name && errors.last_name}
        />
        <TextField
          label="Age"
          type="number"
          fullWidth
          margin="dense"
          variant="standard"
          name="age"
          value={values.age}
          onChange={handleChange}
          error={touched.age && Boolean(errors.age)}
          helperText={touched.age && errors.age}
        />

        <Button
          type="submit"
          sx={{ marginTop: 2 }}
          fullWidth
          variant="contained"
        >
          {selectedUser ? "Update User" : "Add User"}
        </Button>
      </form>
    </Paper>
  );
};

export default UserFormikYup;
