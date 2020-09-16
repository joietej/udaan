import React from "react";
import { Col, Row } from "shards-react";

const SearchResultItem = ({ Item }) => {
  return (
    <Row>
      <Col sm="6" lg="3">
        <span>{Item.destination}</span>
      </Col>
      <Col sm="6" lg="3">
        <span>{Item.price.total} INR</span>
      </Col>
      <Col sm="6" lg="3">
        <span>{Item.departureDate}</span>
      </Col>
      <Col sm="6" lg="3">
        <span>{Item.returnDate}</span>
      </Col>
    </Row>
  );
};

export default SearchResultItem;
