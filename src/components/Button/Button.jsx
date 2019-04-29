import React from 'react';

import { propTypes, defaultProps } from './types';

const Button = ({
  classes,
  secondary,
  flat,
  children,
  ...props
}) => {
  let className = classes.button;

  if (secondary) className = classes.secondary;

  if (flat) className = classes.flat;

  return <button type="button" {...props} className={className}>{ children }</button>;
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
