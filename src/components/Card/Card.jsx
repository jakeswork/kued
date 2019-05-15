import React from 'react';
import classNames from 'classnames';

import { propTypes, defaultProps } from './types';

const Card = ({
  classes,
  children,
  theme,
  className,
  ...props
}) => (
  <div className={classNames(classes.root, className)} {...props}>
    { children }
  </div>
);

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;
