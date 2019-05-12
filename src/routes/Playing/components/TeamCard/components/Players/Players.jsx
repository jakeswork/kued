import React, { Component } from 'react';
import { CircleSpinner } from 'react-spinners-kit';
import classNames from 'classnames';

import { propTypes, defaultProps } from './types';
import Text from '../../../../../../components/Text';
import Tooltip from '../../../../../../components/Tooltip';

class Players extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    players: [],
    loading: false,
    onlineIndicatorHovered: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { players } = this.props;
    const fetched = players.map(async (player) => {
      const data = await this.fetchPlayerData(player);

      return data;
    });

    return Promise.all(fetched).then(data => this.setState({ players: data, loading: false }));
  }

  fetchPlayerData = async (player) => {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/warmane/player/${player.charname}/${player.realm}`);

      return await response.json();
    } catch (error) {
      return Promise.reject(new Error(error));
    }
  }

  render() {
    const { players, loading, onlineIndicatorHovered } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CircleSpinner
          loading={loading}
          color="#fc3a3e"
          size={24}
        />
        {
          !loading && players.map((player, i) => (
            <div className={classes.playerWrapper} key={player.name}>
              <div
                className={classes.playerNameWrapper}
                onMouseEnter={() => this.setState({ onlineIndicatorHovered: i })}
                onMouseLeave={() => this.setState({ onlineIndicatorHovered: null })}
                data-test-id="playerWrapper"
              >
                <Text h5>
                  { player.name }
                  <span
                    className={classNames(
                      classes.onlineIndicator,
                      { [classes.online]: player.online },
                    )}
                  >
                    <Tooltip
                      visible={onlineIndicatorHovered === i}
                      style={{ left: -18, top: 18 }}
                      data-test-id="Tooltip"
                    >
                      { player.online ? 'Online' : 'Offline' }
                    </Tooltip>
                  </span>
                </Text>
                <Text caption>
                  Level&nbsp;
                  { player.level }
                  &nbsp;
                  { player.race }
                  &nbsp;
                  { player.class }
                  &nbsp;
                  (
                  { player.spec }
                  )
                </Text>
              </div>
              <div className={classes.playerRatingWrapper}>
                {
                  player.pvpteams && player.pvpteams.map(team => (
                    <div className={classes.playerRating} key={team.name}>
                      <Text caption>
                        { team.type }
                      </Text>
                      <Text bold>
                        { team.rating }
                      </Text>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Players;
