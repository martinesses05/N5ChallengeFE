import React from "react";
import { arrayOf } from "prop-types";
import { permissionShape } from "@/constants/shapes";
import { func } from "prop-types";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function PermissionList({ list, handleEdit }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="left">Last Name</TableCell>
            <TableCell align="left">Permission Type</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.employeeFirstName}
              </TableCell>
              <TableCell align="left">{item.employeeLastName}</TableCell>
              <TableCell align="left">
                {item.permissionType?.description}
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" onClick={() => handleEdit(item)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

PermissionList.propTypes = {
  list: arrayOf(permissionShape),
  handleEdit: func,
};

export default PermissionList;
