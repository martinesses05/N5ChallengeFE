import routes from "@/constants/routes";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PermissionContext = createContext();

const PermissionProvider = (props) => {
  const [permissions, setPermissions] = useState([]);

  const getAllPermissions = () => {
    console.log("entro");
    axios
      .get(`${routes.permissions}/?Page=1&PageSize=100`)
      .then((result) => {
        setPermissions(result.data.list);
      })
      .catch((error) => {
        console.log("Error when try to get all permission");
      });
  };

  const createPermission = async (newPermission) => {
    try {
      await axios.post(`${routes.permissions}`, newPermission);
      getAllPermissions();
    } catch (error) {
      console.log(error);
    }
  };

  const updatePermission = async (permission) => {
    try {
      await axios.put(`${routes.permissions}`, permission);
      getAllPermissions();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePermission = async (id) => {
    try {
      await axios.delete(`${routes.permissions}/${id}`);
      getAllPermissions();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPermissions();
  }, []);

  return (
    <PermissionContext.Provider
      value={{
        permissions,
        createPermission,
        updatePermission,
        deletePermission,
      }}
    >
      {props.children}
    </PermissionContext.Provider>
  );
};

export default PermissionProvider;
