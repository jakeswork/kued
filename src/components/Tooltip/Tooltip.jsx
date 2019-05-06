import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { propTypes, defaultProps } from './types';
import Text from '../Text';

const Tooltip = ({
  classes,
  children,
  visible,
  ...props
}) => (
  <CSSTransition
    timeout={300}
    classNames={{
      enter: classes.tooltipEnter,
      enterActive: classes.tooltipEnterActive,
      exit: classes.tooltipExit,
      exitActive: classes.tooltipExitActive,
    }}
    unmountOnExit
    in={visible}
    {...props}
  >
    <div className={classes.root}>
      <Text caption bold>
        { children }
      </Text>
    </div>
  </CSSTransition>
);

Tooltip.propTypes = propTypes;

Tooltip.defaultProps = defaultProps;

export default Tooltip;
