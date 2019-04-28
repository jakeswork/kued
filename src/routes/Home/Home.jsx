import React from 'react';

import propTypes from './types';
import Text from '../../components/Text';

const Home = ({ classes }) => (
  <div className={classes.root}>
    <Text h1>
      Hello, World
    </Text>
  </div>
);

Home.propTypes = propTypes;

export default Home;
