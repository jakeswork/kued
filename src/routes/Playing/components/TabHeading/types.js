import { node, shape, bool } from 'prop-types';

export const propTypes = {
  children: node,
  classes: shape({}).isRequired,
  sub: bool,
};

export const defaultProps = {
  children: null,
  sub: false,
};
