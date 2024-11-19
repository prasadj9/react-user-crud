import React from 'react'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material"
const MuiTable = () => {
  return (
    <TableContainer component={Paper}  sx={{maxHeight : "300px"}}>
      <Table aria-label='simple-table'  stickyHeader>
        <TableHead >
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData?.map(row => (
              <TableRow key={row.id} sx={{'&:last-child td, &:last-child th' : {border : 0}}}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTable

const tableData = [
  {
    "id": 1,
    "first_name": "Renaud",
    "last_name": "Baudrey",
    "email": "rbaudrey0@ehow.com",
    "gender": "Male",
    "ip_address": "131.107.83.10"
  },
  {
    "id": 2,
    "first_name": "Beitris",
    "last_name": "Crinion",
    "email": "bcrinion1@examiner.com",
    "gender": "Female",
    "ip_address": "40.254.196.153"
  },
  {
    "id": 3,
    "first_name": "Winna",
    "last_name": "Murty",
    "email": "wmurty2@fotki.com",
    "gender": "Female",
    "ip_address": "166.93.99.123"
  },
  {
    "id": 4,
    "first_name": "Maddie",
    "last_name": "Lytle",
    "email": "mlytle3@theglobeandmail.com",
    "gender": "Male",
    "ip_address": "47.45.94.209"
  },
  {
    "id": 5,
    "first_name": "Ingram",
    "last_name": "Classen",
    "email": "iclassen4@scribd.com",
    "gender": "Male",
    "ip_address": "6.41.179.242"
  },
  {
    "id": 6,
    "first_name": "Lorine",
    "last_name": "Village",
    "email": "lvillage5@whitehouse.gov",
    "gender": "Female",
    "ip_address": "173.101.173.65"
  },
  {
    "id": 7,
    "first_name": "Lock",
    "last_name": "Taplin",
    "email": "ltaplin6@rediff.com",
    "gender": "Male",
    "ip_address": "142.207.102.228"
  },
  {
    "id": 8,
    "first_name": "Drusie",
    "last_name": "McMennum",
    "email": "dmcmennum7@google.ru",
    "gender": "Female",
    "ip_address": "212.79.76.27"
  },
  {
    "id": 9,
    "first_name": "Franklin",
    "last_name": "McKeighan",
    "email": "fmckeighan8@yelp.com",
    "gender": "Male",
    "ip_address": "182.183.245.211"
  },
  {
    "id": 10,
    "first_name": "Teriann",
    "last_name": "Darkins",
    "email": "tdarkins9@wsj.com",
    "gender": "Female",
    "ip_address": "22.81.108.66"
  }
]
