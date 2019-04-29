import React from 'react';

import propTypes from './types';
import Button from '../../../../components/Button';
import logo from '../../../../assets/kued-logotype.png';

const TopNavigation = ({ classes }) => (
  <div className={classes.root}>
    <img src={logo} alt="Kued Logo" className={classes.img} />
    <div className={classes.menuItems}>
      <Button flat style={{ color: 'white' }}>
        Whos Playing
      </Button>
      <Button flat style={{ color: 'white' }}>
        Compatibility
      </Button>
      <Button flat style={{ color: 'white' }}>
        Contact
      </Button>
    </div>
  </div>
);

TopNavigation.propTypes = propTypes;

export default TopNavigation;
