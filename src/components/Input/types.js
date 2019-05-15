import { shape, node, string } from 'prop-types';

export const propTypes = {
  classes: shape({}),
  placeholder: node,
  className: string,
};

export const defaultProps = {
  placeholder: null,
  className: '',
};
