import React from 'react';
import { shallow } from 'enzyme';

import Input from '../Input';

const defaultProps = {
  classes: {},
};

describe('The Input instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<Input {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
