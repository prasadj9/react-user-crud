import React, { useEffect, useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

const UserForm = ({ handleAddUser, selectedUser, handleUpdateUser }) => {
  const paperStyle = {
    padding: 20,
    maxWidth: 400,
    width: "100%",
    margin: "20px auto",
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
  });

  //Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //On submit
  const handleSubmit = (e) => {
    //Validation
    e.preventDefault();
    if(!formData.first_name || !formData.last_name || !formData.age) return;
    if(formData.age < 0 || formData.age > 200) return;
    if (selectedUser) {
      handleUpdateUser({ id: selectedUser.id, ...formData });
    } else {
      handleAddUser(formData);
    }
    //Reset form
    setFormData({
      first_name: "",
      last_name: "",
      age: "",
    });
  };

  useEffect(() => {
    if (selectedUser)
      setFormData({
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        age: selectedUser.age,
      });
  }, [selectedUser]);
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
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Last Name"
          fullWidth
          margin="dense"
          variant="standard"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Age"
          type="number"
          fullWidth
          margin="dense"
          variant="standard"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
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

export default UserForm;
