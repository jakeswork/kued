import React from 'react';
import { Tab } from 'react-tabs';

import { propTypes, defaultProps } from './types';
import Text from '../../../../components/Text';

const TabHeading = ({
  children,
  classes,
  sub,
  ...rest
}) => (
  <Tab className={classes.tab} {...rest}>
    <Text bold h4={!sub}>{ children }</Text>
  </Tab>
);

TabHeading.propTypes = propTypes;

TabHeading.defaultProps = defaultProps;

TabHeading.tabsRole = 'Tab';

export default TabHeading;
