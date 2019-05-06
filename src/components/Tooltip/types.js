import { shape, bool, node } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  visible: bool,
  children: node,
};

export const defaultProps = {
  visible: false,
  children: null,
};
