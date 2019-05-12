import {
  shape,
  string,
  arrayOf,
  number,
} from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  team: shape({
    lastPlayed: shape({
      id: string,
      opponent: string,
      outcome: string,
      rating: string,
      time: string,
    }),
    name: string,
    players: arrayOf(
      shape({
        charname: string,
        damageDone: string,
        deaths: string,
        healingDone: string,
        killingBlows: string,
        matchmaking_change: string,
        personal_change: string,
        realm: string,
        teamname: string,
        teamnamerich: string,
      }),
    ),
    rank: number,
    realm: string,
    url: string,
  }),
};

export const defaultProps = {
  team: {
    lastPlayed: {
      id: '',
      opponent: '',
      outcome: '',
      rating: '',
      time: '',
    },
    name: '',
    players: [
      {
        charname: '',
        damageDone: '',
        deaths: '',
        healingDone: '',
        killingBlows: '',
        matchmaking_change: '',
        personal_change: '',
        realm: '',
        teamname: '',
        teamnamerich: '',
      },
    ],
    rank: null,
    realm: '',
    url: '',
  },
};
