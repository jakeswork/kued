import React from 'react';
import { shallow } from 'enzyme';

import ServerTabLayout from '../ServerTabLayout';

const defaultProps = {
  classes: {},
};

describe('The ServerTabLayout instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<ServerTabLayout {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
