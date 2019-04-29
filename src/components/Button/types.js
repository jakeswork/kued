import { bool, node, shape } from 'prop-types';

export const propTypes = {
  children: node,
  secondary: bool,
  flat: bool,
  classes: shape({}).isRequired,
};

export const defaultProps = {
  children: null,
  secondary: false,
  flat: false,
};
