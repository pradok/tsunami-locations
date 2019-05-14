const {geoJsonData} = require('../fixtures');

const Query = {
  earthquake_feed(_, args, ctx) {
    return geoJsonData;
  },
};

module.exports = Query;