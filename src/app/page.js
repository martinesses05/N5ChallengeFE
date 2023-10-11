"use client";

import { useContext, useState } from "react";

import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PermissionList from "@/components/Permissions/PermissionList";

import { ActionContainer } from "./styles";
import PermissionForm from "@/components/Permissions/PermissionForm";
import { PermissionContext } from "@/context/PermissionContext";

export default function Home() {
  const { permissions, createPermission, updatePermission, deletePermission } =
    useContext(PermissionContext);

  const [showModal, setShowModal] = useState(false);
  const [permission, setPermission] = useState(null);

  const handleCreate = () => {
    setPermission(null);
    setShowModal(true);
  };

  const handleEdit = (permissionItem) => {
    setPermission(permissionItem);
    setShowModal(true);
  };

  const onSubmit = (data) => {
    if (data?.id > 0) updatePermission(data);
    else createPermission(data);

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
    <>
      <Header />
      <ActionContainer>
        <Button variant="contained" onClick={handleCreate}>
          Create Permission
        </Button>
      </ActionContainer>
      <PermissionList
        list={permissions}
        handleEdit={handleEdit}
        handleDelete={deletePermission}
      />
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
    </>
  );
}
