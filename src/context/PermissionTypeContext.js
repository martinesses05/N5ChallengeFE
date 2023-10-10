import React, { createContext, useEffect, useState } from "react";

export const PermissionTypeContext = createContext();

const mock = [
  { id: 1, description: "Admin" },
  { id: 2, description: "Basic" },
];

const PermissionTypeProvider = (props) => {
  const [permissionTypes, setPermissionTypes] = useState([]);

  useEffect(() => {
    // call api and set permission types
    setPermissionTypes(mock);
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
