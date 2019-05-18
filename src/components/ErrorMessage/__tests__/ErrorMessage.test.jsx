import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from '../ErrorMessage';

const defaultProps = {};

describe('The ErrorMessage instance', () => {
  describe('When rendered with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<ErrorMessage {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
