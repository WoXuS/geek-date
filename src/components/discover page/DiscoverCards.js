import Box from "@mui/material/Box";
import DiscoverDetailsContent from "./DiscoverDetailsContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { BIG_CARD } from "../../utils/discover-cards-types";

function DiscoverCards(props) {
  const smallCardContent = (
    <div className="cards-container">
      <Box sx={{ bgcolor: "#ffff", borderRadius: 2.5 }}>
        <div className="cards-title">{props.title}</div>
        <DiscoverDetailsContent
          icon={<FontAwesomeIcon icon={faGamepad} />}
          text={props.games}
        />
        <DiscoverDetailsContent
          icon={<FontAwesomeIcon icon={faLanguage} />}
          text={props.languages}
        />
      </Box>
    </div>
  );
  const bigCardContent = (
    <div className="cards-container">
      <Box sx={{ bgcolor: "#ffff", borderRadius: 2.5 }}>
        <div className="cards-title">{props.title}</div>
        <div className="cards-content">{props.content}</div>
      </Box>
    </div>
  );
  const cardToShow =
    props.cardType === BIG_CARD ? bigCardContent : smallCardContent;
  return <>{cardToShow}</>;
}

export default DiscoverCards;
