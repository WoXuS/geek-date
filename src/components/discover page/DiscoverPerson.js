import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import DiscoverPersonPhotos from "./DiscoverPersonPhotos";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    like: {
      main: "#f26665",
      contrastText: "#fff",
    },
    pass: {
      main: "#212429",
      contrastText: "#fff",
    },
  },
});
const sx_buttons = {
  width: {
    xs: 100,
    sm: 100,
    md: 150,
    lg: 150,
    xl: 150,
  },
  fontSize: {
    xs: 10,
    sm: 10,
    md: 20,
    lg: 20,
    xl: 20,
  },
};
const sx_box = {
  fontSize: {
    xs: 10,
    sm: 10,
    md: 20,
    lg: 20,
    xl: 20,
  },
  bgcolor: "#ffff",
  borderRadius: 2.5,
};
function DiscoverPerson(props) {
  const submitLike = () => {
    props.changePerson();
  };
  const submitPass = () => {
    props.changePerson();
  };
  return (
    <div>
      <Box sx={sx_box}>
        <Stack className="buttons" direction="row" spacing={4}>
          <div className="person-name">
            <b>{props.name}</b> <br />
            {props.age} • {props.location}
          </div>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="like"
              size="large"
              sx={sx_buttons}
              onClick={submitLike}
            >
              <FontAwesomeIcon icon={faHeart} size="lg" className="LikePassIcons"/> Like
            </Button>
            <Button
              variant="contained"
              color="pass"
              size="large"
              sx={sx_buttons}
              onClick={submitPass}
            >
              <FontAwesomeIcon icon={faTimesCircle} size="lg" className="LikePassIcons"/> Pass
            </Button>
          </ThemeProvider>
        </Stack>
        <DiscoverPersonPhotos photos={props.photos} />
      </Box>
    </div>
  );
}

export default DiscoverPerson;
