import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import DiscoverPerson from "../components/discover page/DiscoverPerson";
import DiscoverCards from "../components/discover page/DiscoverCards";
import Grid from "@mui/material/Grid";
import { BIG_CARD, SMALL_CARD } from "../utils/discover-cards-types";

function Discover(props) {
  const [personId, setPersonId] = useState(0);
  const changePerson = () => {
    if (personId < 3) setPersonId(personId + 1);
    else setPersonId(personId - 3);
  };

  return (
    <div className="discover-container">
      <Container maxWidth="lg">
        <Grid pb={2}>
          <DiscoverPerson
            name={props.data[personId].name}
            age={props.data[personId].age}
            location={props.data[personId].location}
            changePerson={changePerson}
            photos={props.data[personId].photos}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <DiscoverCards
              cardType={BIG_CARD}
              title="Bio"
              content={props.data[personId].bio}
            />
          </Grid>
          <Grid item sm>
            <DiscoverCards
              title="Details"
              cardType={SMALL_CARD}
              games={props.data[personId].games}
              languages={props.data[personId].languages}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Discover;
