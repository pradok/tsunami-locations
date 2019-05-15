import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import id from "short-id";

export default () => (
  <Query query={GET_LOCATIONS}>
    {({ data, loading }) => {
      if (loading) return "Loading...";
      return (
        data &&
        data.earthquake_feed &&
        data.earthquake_feed.features.map(feature => <p key={id.generate()}>{feature.properties.place}</p>)
      );
    }}
  </Query>
);

const GET_LOCATIONS = gql`
  {
    earthquake_feed(place:"Alamo") {
      bbox
      type
      metadata
      features {
        type
        geometry
        properties {
          title
          place
        }
      }
    }
  }
`;
