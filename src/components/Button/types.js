import {
  bool,
  node,
  shape,
  string,
} from 'prop-types';

export const propTypes = {
  children: node,
  secondary: bool,
  flat: bool,
  link: string,
  classes: shape({}).isRequired,
  icon: node,
};

export const defaultProps = {
  children: null,
  secondary: false,
  flat: false,
  link: null,
  icon: null,
};
