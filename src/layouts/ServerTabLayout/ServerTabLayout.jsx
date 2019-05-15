import React from 'react';
import { TabPanel } from 'react-tabs';

import { propTypes, defaultProps } from './types';

const ServerTabLayout = ({ classes, children, ...props }) => (
  <TabPanel {...props}>
    <div className={classes.root}>
      { children }
    </div>
  </TabPanel>
);

ServerTabLayout.propTypes = propTypes;

ServerTabLayout.defaultProps = defaultProps;

ServerTabLayout.tabsRole = 'TabPanel';

export default ServerTabLayout;
