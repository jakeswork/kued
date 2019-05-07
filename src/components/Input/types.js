import { shape, node } from 'prop-types';

export const propTypes = {
  classes: shape({}),
  placeholder: node,
};

export const defaultProps = {
  placeholder: null,
};
