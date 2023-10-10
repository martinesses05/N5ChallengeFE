import { shape, number, string, oneOfType, instanceOf } from "prop-types";

export const permissionTypeShape = shape({
  id: number,
  description: string,
});

export const permissionShape = shape({
  id: number,
  employeeFirstName: string.isRequired,
  employeeLastName: string.isRequired,
  permissionType: permissionTypeShape.isRequired,
  permissionDate: oneOfType([string, instanceOf(Date)]),
});
