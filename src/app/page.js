"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PermissionList from "@/components/Permissions/PermissionList";

import { ActionContainer } from "./styles";
import PermissionForm from "@/components/Permissions/PermissionForm";
import PermissionTypeProvider from "@/context/PermissionTypeContext";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [permission, setPermission] = useState(null);

  const mockList = [
    {
      id: 1,
      employeeFirstName: "Martin",
      employeeLastName: "Esses",
      permissionType: {
        id: 1,
        description: "Admin",
      },
    },
    {
      id: 2,
      employeeFirstName: "Gustavo",
      employeeLastName: "Rodriguez",
      permissionType: {
        id: 2,
        description: "Basic",
      },
    },
    {
      id: 3,
      employeeFirstName: "Carlos",
      employeeLastName: "Gonzalez",
      permissionType: {
        id: 1,
        description: "Admin",
      },
    },
  ];

  const handleCreate = () => {
    setPermission(null);
    setShowModal(true);
  };

  const handleEdit = (permissionItem) => {
    setPermission(permissionItem);
    setShowModal(true);
  };

  const onSubmit = (data) => {
    console.log(data);
    setPermission(null);
    setShowModal(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <PermissionTypeProvider>
      <Header />
      <ActionContainer>
        <Button variant="contained" onClick={handleCreate}>
          Create Permission
        </Button>
      </ActionContainer>
      <PermissionList list={mockList} handleEdit={handleEdit} />
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PermissionForm onSubmit={onSubmit} permission={permission} />
        </Box>
      </Modal>
    </PermissionTypeProvider>
  );
}
