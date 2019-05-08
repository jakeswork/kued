import React from 'react';
import { shallow } from 'enzyme';

import Playing from '../Playing';

const defaultProps = {
  classes: {},
};

describe('The Playing instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<Playing {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
