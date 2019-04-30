import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes, defaultProps } from './types';

const Button = ({
  classes,
  secondary,
  flat,
  children,
  link,
  ...props
}) => {
  let className = classes.button;

  if (secondary) className = classes.secondary;

  if (flat) className = classes.flat;

  if (link) return <Link role="button" {...props} className={className} to={link}>{ children }</Link>;

  return <button type="button" {...props} className={className}>{ children }</button>;
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
