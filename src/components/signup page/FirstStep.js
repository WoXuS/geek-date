import React from "react";
import { Controller } from "react-hook-form";
import EmailField from "./fields/EmailField";
import NameField from "./fields/NameField";
import PasswordField from "./fields/PasswordField";

export default function FirstStep(props) {
  return (
    <>
      <Controller
        name="email"
        control={props.control}
        defaultValue=""
        render={({
          field: { onChange, value },
          fieldState: { error, invalid },
        }) => (
          <EmailField
            onChange={onChange}
            value={value}
            error={invalid}
            errorMessage={error}
          />
        )}
      />
      <Controller
        name="password"
        control={props.control}
        defaultValue=""
        render={({
          field: { onChange, value },
          fieldState: { error, invalid },
        }) => (
          <PasswordField
            onChange={onChange}
            value={value}
            error={invalid}
            errorMessage={error}
          />
        )}
      />
      <Controller
        name="firstName"
        control={props.control}
        defaultValue=""
        render={({
          field: { onChange, value },
          fieldState: { error, invalid },
        }) => (
          <NameField
            onChange={onChange}
            value={value}
            error={invalid}
            errorMessage={error}
          />
        )}
      />
    </>
  );
}
