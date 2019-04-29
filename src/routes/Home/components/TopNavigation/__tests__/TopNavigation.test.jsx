import React from 'react';
import { shallow } from 'enzyme';

import TopNavigation from '../TopNavigation';

const defaultProps = {
  classes: {},
};

describe('The TopNavigation instance', () => {
  describe('When called with default properties', () => {
    it('should render without throwing errors', () => {
      const wrapper = shallow(<TopNavigation {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
