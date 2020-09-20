import React from "react";
import TextButton from "./TextButton";
import { useHistory } from "react-router-dom";

const LinkButton = ({ To, Text }) => {
  const history = useHistory();
  return <TextButton OnClick={() => history.push(To)} Text={Text} />;
};

export default LinkButton;
