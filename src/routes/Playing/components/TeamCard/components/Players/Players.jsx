import React, { Component } from 'react';
import { CircleSpinner } from 'react-spinners-kit';
import classNames from 'classnames';

import { propTypes, defaultProps } from './types';
import Text from '../../../../../../components/Text';
import Tooltip from '../../../../../../components/Tooltip';
import ErrorMessage from '../../../../../../components/ErrorMessage';

class Players extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    players: [],
    loading: false,
    onlineIndicatorHovered: null,
    error: false,
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
    } catch (error) /* istanbul ignore next */ {
      // eslint-disable-next-line no-console
      console.error(new Error(error));

      return this.setState({ error: true });
    }
  }

  render() {
    const {
      players,
      loading,
      onlineIndicatorHovered,
      error,
    } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CircleSpinner
          loading={loading}
          color="#fc3a3e"
          size={24}
        />
        <ErrorMessage error={error} />
        {
          (!loading && !error) && players.map((player, i) => (
            <div className={classes.playerWrapper} key={player.name}>
              <div
                className={classes.playerNameWrapper}
                onMouseEnter={() => this.setState({ onlineIndicatorHovered: i })}
                onMouseLeave={() => this.setState({ onlineIndicatorHovered: null })}
                data-test-id="playerWrapper"
              >
                <Text h5>
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
                  { player.name }
                  &nbsp;
                  {
                    player.guild && (
                      <Text caption bold>
                        &lt;
                        { player.guild }
                        &gt;
                      </Text>
                    )
                  }
                </Text>
                <Text>
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
                  player.pvpteams && (
                    player.pvpteams.constructor === Array
                      ? (
                        player.pvpteams.map(team => (
                          <div className={classes.playerRating} key={team.name}>
                            <Text caption>
                              { team.type }
                            </Text>
                            <Text bold>
                              { team.rating }
                            </Text>
                          </div>
                        ))
                      ) : (
                        <div className={classes.playerRating} key={player.pvpteams[1].name}>
                          <Text caption>
                            { player.pvpteams[1].type }
                          </Text>
                          <Text bold>
                            { player.pvpteams[1].rating }
                          </Text>
                        </div>
                      )
                  )
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
