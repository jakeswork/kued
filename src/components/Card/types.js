import { shape, node } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  children: node,
  className: node,
};

export const defaultProps = {
  children: null,
  className: null,
};
