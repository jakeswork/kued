import React from 'react';
import { Tabs, TabList } from 'react-tabs';

import { propTypes, defaultProps } from './types';
import MainLayout from '../../layouts/MainLayout';
import Text from '../../components/Text';
import TabHeading from './components/TabHeading';
import WarmaneTab from './components/WarmaneTab';

const Playing = ({ classes }) => (
  <MainLayout>
    <Text h1>Playing</Text>
    <Tabs selectedTabClassName={classes.tabActive}>
      <TabList className={classes.tabList}>
        <TabHeading>Warmane</TabHeading>
      </TabList>
      <WarmaneTab />
    </Tabs>
  </MainLayout>
);

Playing.propTypes = propTypes;

Playing.defaultProps = defaultProps;

export default Playing;
