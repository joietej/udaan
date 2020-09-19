import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Collapse,
  List,
  ListItem,
  makeStyles,
  IconButton
} from "@material-ui/core";
import clsx from 'clsx';
import { ExpandMore } from "@material-ui/icons";
import Itinerary from "./Itinerary";

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

  return (
    <Card>
      <CardContent>
        <Typography component="p" variant="h4" color="textPrimary">
          {Data.validatingAirlineCodes.map(code => (<span>{code} </span>))}
        </Typography>
        <Typography component="p" variant="h5" color="textPrimary">
          {Data.price.grandTotal} {Data.price.currency}
        </Typography>
      </CardContent>
      <CardActions>
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
      </CardActions>
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
