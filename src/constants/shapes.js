import { shape, number, string, oneOfType, instanceOf } from "prop-types";

export const permissionTypeShape = shape({
  id: number,
  description: string,
});

export const permissionShape = shape({
  id: number,
  employeeName: string.isRequired,
  employeeSurname: string.isRequired,
  permissionTypeId: number.isRequired,
  permissionDate: oneOfType([string, instanceOf(Date)]),
});
