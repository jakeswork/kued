import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FiX } from 'react-icons/fi';

import { propTypes, defaultProps } from './types';
import Card from '../../../../components/Card';

const ResponsiveModal = ({
  classes,
  children,
  onClose,
  ...props
}) => (
  <CSSTransition
    timeout={300}
    classNames={{
      enter: classes.modalEnter,
      enterActive: classes.modalEnterActive,
      exit: classes.modalExit,
      exitActive: classes.modalExitActive,
    }}
    unmountOnExit
    {...props}
  >
    <div className={classes.modalWrapper}>
      <Card style={{ width: 'calc(100% - 80px)' }}>
        <FiX
          className={classes.closeIcon}
          data-test-id="closeModalButton"
          onClick={onClose}
        />
        { children }
      </Card>
    </div>
  </CSSTransition>
);

ResponsiveModal.propTypes = propTypes;

ResponsiveModal.defaultProps = defaultProps;

export default ResponsiveModal;
