import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import propTypes from './types';
import Text from '../../components/Text';
import Button from '../../components/Button';
import TopNavigation from './components/TopNavigation';

const Home = ({ classes }) => (
  <header className={classes.root}>
    <TopNavigation />
    <main className={classes.center}>
      <Text h1 style={{ color: 'white' }}>
        Elevate your arena experience.
      </Text>
      <Text h4 style={{ color: '#b1a0a0', margin: 16, textAlign: 'center' }}>
        With the most up-to-date live meta data, we allow you to
        <br />
        predict opponents and open up the best opportunities.
      </Text>
      <div className={classes.buttonsContainer}>
        <Button link="/feed" icon={<FiArrowRight />}>Get Started</Button>
        <Button secondary style={{ color: 'white' }} link="/contact">Learn More</Button>
      </div>
    </main>
  </header>
);

Home.propTypes = propTypes;

export default Home;
