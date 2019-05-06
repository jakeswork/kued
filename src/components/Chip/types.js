import { shape, bool, node } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  green: bool,
  red: bool,
  amber: bool,
  tooltip: node,
};

export const defaultProps = {
  green: false,
  red: false,
  amber: false,
  tooltip: null,
};
