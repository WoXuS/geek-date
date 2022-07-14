import React, { useState } from "react";
import { faImage, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Button } from "@mui/material";
import { Box } from "../../../../CSS files/Themes";

export default function ImageThree({ register, errors }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { onChange, ...params } = register("photo3");
  return (
    <Container maxWidth="200px">
      {selectedImage && (
        <div className="show-image">
          <img alt="image3" src={URL.createObjectURL(selectedImage)} />
          <Button
            className="delete"
            onClick={() => {
              setSelectedImage(null);
              onChange({ target: { name: "photo3", value: [] } });
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} size="2x" color="black" />
          </Button>
        </div>
      )}
      {!selectedImage && (
        <Box>
          <label htmlFor="single3" className="label">
            <FontAwesomeIcon icon={faImage} color="#00000" size="2x" />
          </label>
          <input
            {...params}
            type="file"
            accept="image/*"
            id="single3"
            onChange={(event) => {
              setSelectedImage(event.target.files[0]);
              onChange(event);
            }}
          />
        </Box>
      )}
      <p className="photo-error">
        <br />
        {errors.photo3?.message}
      </p>
    </Container>
  );
}
