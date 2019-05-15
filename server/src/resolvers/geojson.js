const moment = require('moment');

const resolvers = {
  PointProps: {
    time({time}) {
      return moment(time).toISOString()
    },
    updated({updated}) {
      return moment(updated).toISOString()
    }
  },
  PointObject: {
    type() {
      return 'Feature';
    },
    geometry(item) {
      return item.geometry;
    },
    properties(item) {
      return item.properties;
    },
  },

  FeatureCollection: {
    bbox({bbox}) {
      return bbox
    },
    type({type}) {
      return type;
    },
    metadata({metadata}) {
      return metadata
    },
    features({features}) {
      return features
    },
  },

  Location: {
    locations(locations) {
      return locations
    }
  }

};

module.exports = resolvers;