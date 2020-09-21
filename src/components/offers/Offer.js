import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Collapse,
  List,
  ListItem,
  makeStyles,
  IconButton,
  Box,
} from "@material-ui/core";
import clsx from "clsx";
import { ExpandMore } from "@material-ui/icons";
import Itinerary from "./Itinerary";

import Oceanic from "./Oceanic.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Offer = ({ Data }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getLogo = (code) => localStorage.getItem(code);

  return (
    <Card>
      <CardHeader
        avatar={
          <img
            alt="logo"
            height="90"
            width="90"
            src={getLogo(Data.validatingAirlineCodes[0]) || Oceanic}
          />
        }
        title={Data.airlines[0]}
        subheader={`${Data.price.grandTotal} ${Data.price.currency}`}
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        }
      ></CardHeader>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            {Data.itineraries.map((i) => (
              <ListItem>
                <Itinerary Data={i} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Offer;
