import React, { Fragment } from 'react';
import { node, string } from 'prop-types';

import Button from '../../components/Button';
import propTypes from './types';

const MenuItems = ({ classes }) => {
  const NavButton = ({ children, link }) => (
    <Button
      flat
      activeClassName={classes.active}
      link={link}
    >
      { children }
    </Button>
  );

  NavButton.propTypes = {
    children: node.isRequired,
    link: string.isRequired,
  };

  return (
    <Fragment>
      <NavButton link="/playing">
        Live Feed
      </NavButton>
      <NavButton link="/servers">
        Servers
      </NavButton>
      <NavButton link="/support">
        Support
      </NavButton>
    </Fragment>
  );
};

MenuItems.propTypes = propTypes;

export default MenuItems;
