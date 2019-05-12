import React, { Component } from 'react';
import { Tabs, TabList, TabPanel } from 'react-tabs';

import { propTypes, defaultProps } from './types';
import ServerTabLayout from '../../../../layouts/ServerTabLayout';
import TabHeading from '../TabHeading';
import TeamCard from '../TeamCard';

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

class WarmaneTab extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  static tabsRole = 'TabPanel';

  state = {
    teams: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch('http://localhost:4000/api/v1/warmane/wotlk/2v2/')
      .then(res => res.json())
      .then(teams => this.setState({ teams, loading: false }));
  }

  render() {
    const { classes, ...props } = this.props;
    const { loading, teams } = this.state;

    return (
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
            { !loading && teams.map(team => <TeamCard team={team} key={team.name} />)}
          </ServerTabLayout>
        </Tabs>
      </TabPanel>
    );
  }
}

export default WarmaneTab;
