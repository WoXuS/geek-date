import { useState } from "react";
import { Box } from "@mui/material";
import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sx_box, AppContainer } from "../../CSS files/Themes";
import NextButton from "./NextButton";
import HeaderSignup from "./HeaderSignup";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import moment from "moment";

const firstSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  firstName: yup.string().required("Please enter your first name"),
  password: yup.string().min(6, "Minimum of 6 characters required").required(),
});
const secondSchema = yup.object().shape({
  city: yup.string().required("Please enter a city").nullable(),
  gender: yup.string().required("Please select your gender").nullable(),
  dateOfBirth: yup
    .string()
    .nullable()
    .test("dateOfBirth", "You must be 18 years or older", function (value) {
      return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
    })
    .required("Please enter your age"),
  languages: yup
    .array()
    .of(
      yup.object().shape({
        lang: yup.string(),
      })
    )
    .min(1, "Please select at least one language"),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
const thirdSchema = yup.object().shape({
  bio: yup
    .string()
    .nullable()
    .required("Please write at least one sentence")
    .min(20, "Please write at least 20 characters"),
});
const fourthSchema = yup.object().shape({
  photo1: yup
    .mixed()
    .test("required", "Required field", (value) => value.length > 0)
    .test("fileSize", "Photo size is too large", (value) => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        value.length &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
      );
    }),
  photo2: yup
    .mixed()
    .test("required", "Required field", (value) => value.length > 0)
    .test("fileSize", "Photo size is too large", (value) => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        value.length &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
      );
    }),
  photo3: yup
    .mixed()
    .test("required", "Required field", (value) => value.length > 0)
    .test("fileSize", "Photo size is too large", (value) => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        value.length &&
        ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type)
      );
    }),
});

function SignupForm(props) {
  const [step, setStep] = useState(1);
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  let schema;
  if (step === 1) schema = firstSchema;
  if (step === 2) schema = firstSchema.concat(secondSchema);
  if (step === 3) schema = secondSchema.concat(thirdSchema);
  if (step === 4) schema = thirdSchema.concat(fourthSchema);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    history.push("/home");
  };
  const handleBack = () => {
    if (step === 1) handleClose();
    else setStep(step - 1);
  };
  const submitForm = (data) => {
    if (step === 4) {
      setLoading(true);
      console.log(JSON.stringify(data));
      setTimeout(function () {
        setRegistered(true);
      }, 2000);
    } else {
      console.log("submitted", data);
      setStep(step + 1);
    }
  };

  return (
    <AppContainer>
      <Box sx={sx_box}>
        <form noValidate onSubmit={handleSubmit(submitForm)}>
          <HeaderSignup handleBack={handleBack} />
          {step === 1 && <FirstStep control={control} />}
          {step === 2 && <SecondStep control={control} />}
          {step === 3 && <ThirdStep control={control} />}
          {step === 4 && <FourthStep register={register} errors={errors} />}
          <NextButton step={step} loading={loading}/>
        </form>
      </Box>
      {registered === true && <Redirect to="/login" />}
      
    </AppContainer>
  );
}
export default SignupForm;
