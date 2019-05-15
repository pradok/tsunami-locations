const earthquakesApi = require("../api/earthquakes");
const {locations} = require('../fixtures');

const Query = {
  earthquake_feed(_, args, ctx) {
    return  earthquakesApi(args.place);
  },
  locations(_, args) {
    if (args.startsWith) {
      return locations.filter(location => location.toLowerCase().startsWith(args.startsWith.toLowerCase()));
    }
    return [];
  }
};

module.exports = Query;
