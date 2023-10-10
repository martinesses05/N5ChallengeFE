import React, { useContext } from "react";
import { func } from "prop-types";

import { useForm, Controller } from "react-hook-form";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { permissionShape } from "@/constants/shapes";
import { PermissionTypeContext } from "@/context/PermissionTypeContext";

import { Container, Row } from "./styles";

function PermissionForm({ onSubmit, permission }) {
  const { permissionTypes } = useContext(PermissionTypeContext);
  console.log(permission);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      employeeFirstName: permission?.employeeFirstName,
      employeeLastName: permission?.employeeLastName,
      permissionType: permission?.permissionType?.id,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <TextField
            {...register("employeeFirstName", { required: true })}
            label="First Name"
            variant="outlined"
            fullWidth
          />
          {errors.employeeFirstName && <span>This field is required</span>}
        </Row>
        <Row>
          <TextField
            {...register("employeeLastName", { required: true })}
            label="Last Name"
            variant="outlined"
            fullWidth
          />
          {errors.employeeLastName && <span>This field is required</span>}
        </Row>
        <Row>
          <FormControl fullWidth>
            <InputLabel id="permissionTypeLabel">Permission Type</InputLabel>
            <Controller
              control={control}
              name="permissionType"
              {...register("permissionType", { required: true })}
              render={({ field }) => (
                <Select
                  labelId="permissionTypeLabel"
                  {...field}
                  label="Permission Typw"
                >
                  {permissionTypes.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.description}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
          {errors.permissionType && <span>This field is required</span>}
        </Row>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </Container>
    </form>
  );
}

PermissionForm.propTypes = {
  onSubmit: func,
  permission: permissionShape,
};

export default PermissionForm;
