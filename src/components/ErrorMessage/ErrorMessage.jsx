import React, { Fragment } from 'react';
import { FiMessageCircle } from 'react-icons/fi';

import { propTypes, defaultProps } from './types';
import Text from '../Text';
import Button from '../Button';
import GoogleAnalytics from '../../services/GoogleAnalytics';

const ErrorMessage = ({ error }) => {
  GoogleAnalytics.event({
    category: 'Error',
    action: 'Displayed Error',
    label: 'Server Error',
    nonInteraction: true,
  });

  if (error) {
    return (
      <Fragment>
        <Text h4 data-test-id="errorHeading">Oops!</Text>
        <Text bold>
          It looks like the server is failing to respond.&nbsp;
          Please wait a moment and try again.
        </Text>
        <br />
        <Text>
          Is this happening regularly?
          Head over to the support
          page and let us know.
        </Text>
        <Button link="/support" secondary icon={<FiMessageCircle />}>
          Support
        </Button>
      </Fragment>
    );
  }

  return null;
};

ErrorMessage.propTypes = propTypes;

ErrorMessage.defaultProps = defaultProps;

export default ErrorMessage;
