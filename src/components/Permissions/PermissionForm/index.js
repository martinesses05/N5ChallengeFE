import React, { useContext } from "react";
import { func } from "prop-types";
import dayjs from "dayjs";

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

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: permission?.id || 0,
      employeeName: permission?.employeeName,
      employeeSurname: permission?.employeeSurname,
      permissionTypeId: permission?.permissionTypeId || "",
      permissionDate: dayjs(Date()).format("YYYY-MM-DD"),
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Row>
          <TextField
            {...register("employeeName", { required: true })}
            label="First Name"
            variant="outlined"
            fullWidth
          />
          {errors.employeeName && <span>This field is required</span>}
        </Row>
        <Row>
          <TextField
            {...register("employeeSurname", { required: true })}
            label="Last Name"
            variant="outlined"
            fullWidth
          />
          {errors.employeeSurname && <span>This field is required</span>}
        </Row>
        <Row>
          <FormControl fullWidth>
            <InputLabel id="permissionTypeLabel">Permission Type</InputLabel>
            <Controller
              control={control}
              name="permissionTypeId"
              {...register("permissionTypeId", { required: true })}
              render={({ field }) => (
                <Select
                  labelId="permissionTypeLabel"
                  {...field}
                  label="Permission Type"
                  defaultValue={
                    permission?.permissionTypeId > 0
                      ? permission?.permissionTypeId
                      : ""
                  }
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
          {errors.permissionTypeId && <span>This field is required</span>}
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
