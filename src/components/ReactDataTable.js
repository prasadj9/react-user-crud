import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
const tableData = [
  {
    id: 1,
    first_name: "Renaud",
    last_name: "Baudrey",
    email: "rbaudrey0@ehow.com",
    gender: "Male",
    ip_address: "131.107.83.10",
  },
  {
    id: 2,
    first_name: "Beitris",
    last_name: "Crinion",
    email: "bcrinion1@examiner.com",
    gender: "Female",
    ip_address: "40.254.196.153",
  },
  {
    id: 3,
    first_name: "Winna",
    last_name: "Murty",
    email: "wmurty2@fotki.com",
    gender: "Female",
    ip_address: "166.93.99.123",
  },
  {
    id: 4,
    first_name: "Maddie",
    last_name: "Lytle",
    email: "mlytle3@theglobeandmail.com",
    gender: "Male",
    ip_address: "47.45.94.209",
  },
  {
    id: 5,
    first_name: "Ingram",
    last_name: "Classen",
    email: "iclassen4@scribd.com",
    gender: "Male",
    ip_address: "6.41.179.242",
  },
  {
    id: 6,
    first_name: "Lorine",
    last_name: "Village",
    email: "lvillage5@whitehouse.gov",
    gender: "Female",
    ip_address: "173.101.173.65",
  },
  {
    id: 7,
    first_name: "Lock",
    last_name: "Taplin",
    email: "ltaplin6@rediff.com",
    gender: "Male",
    ip_address: "142.207.102.228",
  },
  {
    id: 8,
    first_name: "Drusie",
    last_name: "McMennum",
    email: "dmcmennum7@google.ru",
    gender: "Female",
    ip_address: "212.79.76.27",
  },
  {
    id: 9,
    first_name: "Franklin",
    last_name: "McKeighan",
    email: "fmckeighan8@yelp.com",
    gender: "Male",
    ip_address: "182.183.245.211",
  },
  {
    id: 10,
    first_name: "Teriann",
    last_name: "Darkins",
    email: "tdarkins9@wsj.com",
    gender: "Female",
    ip_address: "22.81.108.66",
  },
];
const ReactDataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/users");
        setData(response.data);
        console.log(response);
        
      } catch (error) {
        console.log(error);
        setError("Error while getting user data");
      } finally {
        setLoading(false);
      }
    };
    getUserData();
  }, []);

  const handleEdit = (row) => {
    console.log("Edit Row : ", row);
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((row) => row.id !== id);
    setData(filteredData);
  };

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
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
            backgroundColor: "white",
            padding: 2,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">User Data</Typography>
          <DataTable
            columns={columns}
            data={data}
            pagination
            progressPending={loading}
            dense
            highlightOnHover
            responsive
          />
        </Box>
      )}
    </>
  );
};

export default ReactDataTable;
