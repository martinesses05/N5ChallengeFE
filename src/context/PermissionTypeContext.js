import routes from "@/constants/routes";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const PermissionTypeContext = createContext();

const PermissionTypeProvider = (props) => {
  const [permissionTypes, setPermissionTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`${routes.permissionTypes}/?Page=1&PageSize=100`)
      .then((result) => {
        setPermissionTypes(result.data.list);
      })
      .catch((error) => {
        console.log("Error when try to get all permission types");
      });
  }, []);

  return (
    <PermissionTypeContext.Provider
      value={{
        permissionTypes,
      }}
    >
      {props.children}
    </PermissionTypeContext.Provider>
  );
};

export default PermissionTypeProvider;
