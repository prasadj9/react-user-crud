import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import UserForm from "./UserForm";
import useUserData from "../hooks/useUserData";
import UserFormikYup from "./UserFormikYup";

const ReactDataTable = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    users,
    setUsers,
    loading,
    error,
    getAllUsers,
    deleteUserById,
    updateUserById,
    addUserData,
  } = useUserData();
  useEffect(() => {
    getAllUsers();
  }, []);

  const handleEdit = (row) => {
    setSelectedUser(row);
  };

  const handleUpdateUser = (newUser) => {
    updateUserById(newUser)
    const updatedUsers = users.map(user => (user.id === newUser.id ? newUser : user))
    setUsers(updatedUsers)
    setSelectedUser(null)
  }

  //Delete user data
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you Sure You want to delete user?"
    );
    if (confirmDelete) {
      deleteUserById(id); //Delete user from server
      const filteredData = users.filter((row) => row.id !== id);
      setUsers(filteredData);
    }
  };

  //Add user Data
  const handleAddUser = (userData) => {
    const newUser = {
      id: getRandomBetween(),
      ...userData,
    };
    console.log(newUser);
    
    addUserData(newUser);
    setUsers((prevData) => [...prevData, newUser]);
  };

  //Get random number for id
  function getRandomBetween(min = 100, max = 1000) {
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
      sortable: true,
    },

    {
      name: "Age",
      selector: (row) => row.age,
    },
    {
      name: "Actions",
      cell: (row) => (
        <Stack direction="row" gap={2}>
          <Tooltip title="edit">
            <IconButton color="primary" onClick={() => handleEdit(row)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="delete">
            <IconButton
              color="error"
              onClick={() => {
                handleDelete(row.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      ),
    },
  ];

  return (
    <>
      {error && (
        <Typography variant="h4" color="error">
          {error}
        </Typography>
      )}
      {loading && <Typography variant="h4">Loading...</Typography>}

      {!error && !loading && (
        <>
          {/* <UserForm
            selectedUser={selectedUser}
            handleAddUser={handleAddUser}
            handleUpdateUser={handleUpdateUser}
          /> */}
          <UserFormikYup
            selectedUser={selectedUser}
            handleAddUser={handleAddUser}
            handleUpdateUser={handleUpdateUser}
          />

          <Box
            sx={{
              width: "90%",
              backgroundColor: "white",
              padding: 2,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <DataTable
              title="User Data"
              columns={columns}
              data={users}
              pagination
              progressPending={loading}
              dense
              highlightOnHover
              responsive
            />
          </Box>
        </>
      )}
    </>
  );
};

export default ReactDataTable;