import React from 'react';
import { Tabs, TabList, TabPanel } from 'react-tabs';

import { propTypes, defaultProps } from './types';
import ServerTabLayout from '../../../../layouts/ServerTabLayout';
import TabHeading from '../TabHeading';

const options = [
  {
    value: '2v2',
    label: '2v2',
  },
  {
    value: '3v3',
    label: '3v3',
  },
];

const WarmaneTab = ({ classes, ...props }) => (
  <TabPanel {...props}>
    <Tabs selectedTabClassName={classes.tabActive}>
      <TabList className={classes.tabList}>
        <TabHeading sub>TBC</TabHeading>
        <TabHeading sub>WoTLK</TabHeading>
      </TabList>
      <ServerTabLayout
        dropdownOptions={options}
        dropdownOptionDefault={options[0]}
      >
        TBC
      </ServerTabLayout>
      <ServerTabLayout
        dropdownOptions={options}
        dropdownOptionDefault={options[0]}
      >
        WoTLK
      </ServerTabLayout>
    </Tabs>
  </TabPanel>
);

WarmaneTab.propTypes = propTypes;

WarmaneTab.defaultProps = defaultProps;

WarmaneTab.tabsRole = 'TabPanel';

export default WarmaneTab;
