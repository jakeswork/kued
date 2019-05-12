import { arrayOf, shape, string } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
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
};

export const defaultProps = {
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
};
