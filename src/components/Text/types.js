import { bool, string, shape } from 'prop-types';

export const propTypes = {
  bold: bool,
  h1: bool,
  h2: bool,
  h3: bool,
  h4: bool,
  h5: bool,
  caption: bool,
  children: string,
  classes: shape({}).isRequired,
  style: shape({}),
};

export const defaultProps = {
  bold: false,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  caption: false,
  children: null,
  style: {},
};
