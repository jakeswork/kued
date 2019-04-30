import React from 'react';

import propTypes from './types';
import Text from '../../components/Text';
import Button from '../../components/Button';
import TopNavigation from './components/TopNavigation';

const Home = ({ classes }) => (
  <div className={classes.root}>
    <TopNavigation />
    <div className={classes.center}>
      <Text h1 style={{ color: 'white' }}>
        Elevate your arena experience.
      </Text>
      <Text h4 style={{ color: '#b1a0a0', marginTop: 16, textAlign: 'center' }}>
        With the most up-to-date live meta data, we can help you
        <br />
        predict opponents and give your teams the best opportunities.
      </Text>
      <div className={classes.buttonsContainer}>
        <Button link="/feed">Get Started</Button>
        <Button secondary style={{ color: 'white' }} link="/contact">Roadmap</Button>
      </div>
    </div>
  </div>
);

Home.propTypes = propTypes;

export default Home;
