// Map.jsx
import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const Map = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.mapContainer}>
      <Typography variant="h6">Health Map</Typography>
      <div className={classes.fakeMap}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={classes.fakeMapSvg}>
          {/* map features */}
          <circle cx="50" cy="50" r="5" fill="red" />
          <rect x="40" y="30" width="20" height="15" fill="blue" />

          {/* roads or paths */}
          <line x1="10" y1="70" x2="90" y2="70" stroke="gray" strokeWidth="2" />

          {/* Simulate landmarks or points of interest */}
          <polygon points="30,20 40,10 50,20" fill="green" />

          {/*  labels or tooltips */}
          <text x="50" y="60" textAnchor="middle" fontSize="5" fill="black">
            Hospital
          </text>
        </svg>
      </div>
    </Paper>
  );
};

export default Map;
