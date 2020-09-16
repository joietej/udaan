import React from 'react'
import {
    SearchResultsContainerStyle,
    SearchResultsItemStyle,
  } from "./styles";

function SearchResults({Items}) {
    return (
        <div style={SearchResultsContainerStyle()}>
            {Items.map((d, i) => (
              <div key={`d.destination-${i}`} style={SearchResultsItemStyle()}>
                <span style={{ width: "20vw" }}>{d.destination}</span>
                <span style={{ width: "20vw" }}>{d.price.total} INR</span>
                <span style={{ width: "20vw" }}>{d.departureDate}</span>
                <span style={{ width: "20vw" }}>{d.returnDate}</span>
              </div>
            ))}
          </div>
    )
}

export default SearchResults
