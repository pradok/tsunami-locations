# Setup

There are two parts:
1. client folder contains React code
2. server folder contains GraphQl backend

## Installation and running the solution for both folders
```
$ npm install
```

### Running the solution
```
npm start
```

## Notes

This is still work in progress and Front end is nowhere near the requirements. The only thing for now Front end has map for all earthquake locations, just for React demonstration purposes.
Having some issues in integrating leaflet css in modular way. Workaround done in index.html to get css via cdn.
No form with autocomplete and other front end requirements as yet.

The GraphQl backend is fully functional as per the requirements. Using mock JS object for one of the end points and other wraps the earthquake api.