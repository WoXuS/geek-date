import React from "react";
import ImageUpload from "./fields/ImageUpload/ImageUpload";
import { Typography } from "@mui/material";
import { AppContainer } from "../../CSS files/Themes";

export default function ThirdStep({ register, errors }) {
  return (
    <AppContainer>
      <ImageUpload register={register} errors={errors} />
      <Typography align="center">
        {" "}
        Please upload three photos.
        <br /> They can be of yourself or some game achievements. Be creative!
      </Typography>
    </AppContainer>
  );
}
