"use client";

import React from "react";

import PermissionProvider from "@/context/PermissionContext";
import PermissionTypeProvider from "@/context/PermissionTypeContext";

export default function WrapperContainer({ children }) {
  return (
    <PermissionProvider>
      <PermissionTypeProvider>{children}</PermissionTypeProvider>
    </PermissionProvider>
  );
}
