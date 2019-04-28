import React from 'react';

import propTypes from './types';

const Home = ({ classes }) => (
  <div className={classes.root}>Hello, World!</div>
);

Home.propTypes = propTypes;

export default Home;
