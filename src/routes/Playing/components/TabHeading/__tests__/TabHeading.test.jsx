import React from 'react';
import { shallow } from 'enzyme';

import TabHeading from '../TabHeading';

const defaultProps = {
  classes: {},
};

describe('The TabHeading instance', () => {
  describe('When rendered with default props', () => {
    it('should render without throwing errors', () => {
      const wrapper = shallow(<TabHeading {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
