import React, { Component } from 'react';

import { propTypes, defaultProps } from './types';
import servers from '../../TEMP_FAKE_DATA/servers';
import MainLayout from '../../layouts/MainLayout';
import Text from '../../components/Text';
import Card from '../../components/Card';
import Chip from '../../components/Chip';
import Input from '../../components/Input';

class Servers extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    searchInput: '',
  };

  render() {
    const { searchInput } = this.state;
    const { classes } = this.props;

    return (
      <MainLayout>
        <Text h1>Servers</Text>
        <Text h5>
          Kued is bespoke software. Below you can find a list of currently supported servers,
          as well as the status of other servers.
        </Text>
        <Input
          data-test-id="searchInput"
          placeholder="Search servers"
          onChange={e => this.setState({ searchInput: e.target.value.toLowerCase().replace(/ /g, '') })}
        />
        <div className={classes.grid}>
          {
            servers.filter(server => server.url.includes(searchInput))
              .map(server => (
                <Card style={{ width: 275 }} key={server.name}>
                  <div className={classes.serverInfo}>
                    <Text h4>{ server.name }</Text>
                    <Text link={server.url}>
                      { server.url }
                    </Text>
                  </div>
                  {
                    server.expansions.map(expansion => expansion.status && (
                      <Chip
                        key={expansion.name}
                        tooltip={expansion.status}
                        green={expansion.status === 'Supported'}
                        amber={expansion.status === 'Considered'}
                        red={expansion.status === 'Rejected'}
                      >
                        { expansion.name }
                      </Chip>
                    ))
                  }
                </Card>
              ))
          }
        </div>
      </MainLayout>
    );
  }
}

export default Servers;
