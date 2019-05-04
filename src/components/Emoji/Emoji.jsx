import React from 'react';

import { propTypes, defaultProps } from './types';

const Emoji = ({
  classes,
  label,
  icon,
  ...props
}) => (
  <span role="img" aria-label={label} className={classes.root} {...props}>
    { icon }
  </span>
);

Emoji.propTypes = propTypes;

Emoji.defaultProps = defaultProps;

export default Emoji;
