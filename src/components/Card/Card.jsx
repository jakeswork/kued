import React from 'react';

import { propTypes, defaultProps } from './types';

const Card = ({
  classes,
  children,
  theme,
  ...props
}) => (
  <div className={classes.root} {...props}>
    { children }
  </div>
);

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;
