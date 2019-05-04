import { shape, node } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  children: node,
};

export const defaultProps = {
  children: null,
};
