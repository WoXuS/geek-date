import React from "react";
import CityField from "./fields/CityField";
import GenderField from "./fields/GenderField";
import AgeField from "./fields/AgeField";
import LanguageField from "./fields/LanguageField";

export default function SecondStep(props) {
  return (
    <>
      <GenderField control={props.control} />
      <AgeField control={props.control} />
      <CityField control={props.control} />
      <LanguageField control={props.control} />
    </>
  );
}
