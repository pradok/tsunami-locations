import React from "react";

import LocationsMap from "./map";
import gql from "graphql-tag";
import {Query} from "react-apollo";

export default () => (
  <Query query={GET_LOCATIONS}>
    {({ data, loading }) => {
      if (loading) return "Loading...";
      delete data['__typename'];
      return (
        data &&
        data.earthquake_feed && <LocationsMap data={data.earthquake_feed} />
      );
    }}
  </Query>
);

const GET_LOCATIONS = gql`
  {
    earthquake_feed {
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
