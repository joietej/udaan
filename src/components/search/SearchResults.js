import React from 'react';
import { ListGroup, ListGroupItem } from "shards-react";
import SearchResultItem from './SearchResultItem';
import { SearchResultsContainerStyle, SearchResultsItemStyle } from './styles';

function SearchResults({Items}) {
    return (
        <ListGroup style={SearchResultsContainerStyle()}>
            {Items.map((d, i) => (
              <ListGroupItem key={`d.destination-${i}`} style={SearchResultsItemStyle()}>
                <SearchResultItem Item={d}/>
              </ListGroupItem>
            ))}
          </ListGroup>
    )
}

export default SearchResults
