import React from 'react';

import { propTypes, defaultProps } from './types';

const Text = ({
  bold,
  classes,
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  caption,
  style,
}) => {
  let styleOverride = style;

  if (bold) styleOverride = { fontWeight: 'bold', ...style };

  if (h1) return <h1 style={styleOverride} className={classes.h1}>{ children }</h1>;

  if (h2) return <h2 style={styleOverride} className={classes.h2}>{ children }</h2>;

  if (h3) return <h3 style={styleOverride} className={classes.h3}>{ children }</h3>;

  if (h4) return <h4 style={styleOverride} className={classes.h4}>{ children }</h4>;

  if (h5) return <h5 style={styleOverride} className={classes.h5}>{ children }</h5>;

  if (caption) return <span style={styleOverride} className={classes.caption}>{ children }</span>;

  return <p style={styleOverride} className={classes.p}>{ children }</p>;
};

Text.propTypes = propTypes;

Text.defaultProps = defaultProps;

export default Text;
