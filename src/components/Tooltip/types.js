import { shape, bool, node } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  visible: bool,
  children: node,
  style: shape({}),
};

export const defaultProps = {
  visible: false,
  children: null,
  style: {},
};
