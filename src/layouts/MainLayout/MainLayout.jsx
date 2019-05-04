import React, { Fragment } from 'react';

import { propTypes, defaultProps } from './types';
import SideMenu from './components/SideMenu';

const MainLayout = ({ classes, children }) => (
  <Fragment>
    <SideMenu />
    <main className={classes.main}>
      <div className={classes.root}>
        { children }
      </div>
    </main>
  </Fragment>
);

MainLayout.propTypes = propTypes;

MainLayout.defaultProps = defaultProps;

export default MainLayout;
