import React, { Component } from 'react';
import { Tabs, TabList, TabPanel } from 'react-tabs';
import { CircleSpinner } from 'react-spinners-kit';
import Select from 'react-select';

import { propTypes, defaultProps } from './types';
import ServerTabLayout from '../../../../layouts/ServerTabLayout';
import theme from '../../../../utils/theme';
import Input from '../../../../components/Input';
import ErrorMessage from '../../../../components/ErrorMessage';
import TabHeading from '../TabHeading';
import TeamCard from '../TeamCard';

class WarmaneTab extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  static tabsRole = 'TabPanel';

  static dropdownOptions = [
    {
      value: '2v2',
      label: '2v2',
    },
    {
      value: '3v3',
      label: '3v3',
    },
  ];

  state = {
    teams: [],
    loading: false,
    bracket: '2v2',
    expansion: 'tbc',
    error: false,
    searchFilter: '',
  }

  componentDidMount() {
    this.fetchTeamData();
  }

  onChangeDropdown = ({ value }) => this.setState(
    ({ bracket: value }),
    () => this.fetchTeamData(),
  );

  onChangeTab = tab => this.setState(
    ({ expansion: tab > 0 ? 'wotlk' : 'tbc' }),
    () => this.fetchTeamData(),
  );

  fetchTeamData = async () => {
    const { expansion, bracket } = this.state;

    this.setState(({ loading: true }), async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/warmane/${expansion}/${bracket}/`);
        const teams = await response.json();
        const initialSort = (a, b) => {
          const compA = a.lastPlayed.time.split(' ')[0];
          const compB = b.lastPlayed.time.split(' ')[0];

          if (compA < compB) {
            return -1;
          }

          if (compA > compB) {
            return 1;
          }

          return 0;
        };
        const numberSort = (a, b) => {
          const verifyHours = time => (time.includes('hour')
            ? `${time.split(' ')[0]}00`
            : time.split(' ')[0]
          );
          const compA = verifyHours(a.lastPlayed.time);
          const compB = verifyHours(b.lastPlayed.time);
          const numberA = Number.isNaN(Number(compA)) ? 10000 : Number(compA);
          const numberB = Number.isNaN(Number(compB)) ? 10000 : Number(compB);

          return numberA - numberB;
        };

        teams.sort(initialSort);
        teams.sort(numberSort);

        return this.setState({ teams, loading: false, error: false });
      } catch (error) /* istanbul ignore next */ {
        // eslint-disable-next-line no-console
        console.error(new Error(error));

        return this.setState({ loading: false, error: true });
      }
    });
  }

  render() {
    const { classes, ...props } = this.props;
    const {
      loading,
      teams,
      error,
      searchFilter,
    } = this.state;
    const filter = item => item.players.filter(player => player.charname.toLowerCase().replace(/ /g, '').includes(searchFilter)).length
      || item.name.toLowerCase().replace(/ /g, '').includes(searchFilter);

    const teamCards = teams.filter(filter).map(team => <TeamCard team={team} key={team.name} />);

    return (
      <TabPanel {...props} forceRender>
        <Tabs
          data-test-id="Tabs"
          selectedTabClassName={classes.tabActive}
          onSelect={this.onChangeTab}
          className={classes.tabsContainer}
        >
          <div className={classes.header}>
            <TabList className={classes.tabList}>
              <TabHeading sub>TBC</TabHeading>
              <TabHeading sub>WoTLK</TabHeading>
            </TabList>
            <Input
              data-test-id="searchInput"
              placeholder="Search teams or players"
              className={classes.input}
              onChange={e => this.setState({ searchFilter: e.target.value.toLowerCase().replace(/ /g, '') })}
            />
            <Select
              data-test-id="Select"
              onChange={this.onChangeDropdown}
              options={WarmaneTab.dropdownOptions}
              className={classes.select}
              defaultValue={WarmaneTab.dropdownOptions[0]}
              placeholder="Select Bracket"
              styles={{
                option: (styles, { isFocused }) => (
                  { ...styles, cursor: 'pointer', color: isFocused ? 'white' : styles.color }
                ),
                control: styles => ({ ...styles, cursor: 'pointer' }),
              }}
              theme={og => ({
                ...og,
                colors: {
                  ...og.colors,
                  primary25: theme.colorPrimary,
                  primary50: theme.colorPrimary,
                  primary75: theme.colorPrimary,
                  primary: theme.colorPrimary,
                },
              })}
            />
          </div>
          <ServerTabLayout>
            { (!loading && !error) && teamCards}
          </ServerTabLayout>
          <ServerTabLayout>
            { (!loading && !error) && teamCards}
          </ServerTabLayout>
          <ErrorMessage error={error} />
          <span className={classes.spinnerWrapper}>
            <CircleSpinner
              loading={loading}
              color="#fc3a3e"
              size={24}
              className={classes.spinner}
            />
          </span>
        </Tabs>
      </TabPanel>
    );
  }
}

export default WarmaneTab;
