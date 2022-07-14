import React from "react";
import "react-image-crop/dist/ReactCrop.css";
import { Stack } from "@mui/material";
import ImageOne from "./ImageOne";
import ImageTwo from "./ImageTwo";
import ImageThree from "./ImageThree";

export default function ImageUpload({ register, errors }) {
  return (
    <Stack direction="row" spacing={1}>
      <ImageOne register={register} errors={errors} />
      <ImageTwo register={register} errors={errors}/>
      <ImageThree register={register} errors={errors}/>
    </Stack>
  );
}
