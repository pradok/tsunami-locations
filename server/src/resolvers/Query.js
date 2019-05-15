const earthquakesApi = require("../api/earthquakes");

const Query = {
  earthquake_feed(_, args, ctx) {
    const earthquakes = earthquakesApi(args.place);
    return earthquakes;
  }
};

module.exports = Query;
