import React from 'react';
import { shallow } from 'enzyme';

import ServerTabLayout from '../ServerTabLayout';
import theme from '../../../utils/theme';

const defaultProps = {
  classes: {},
};

describe('The ServerTabLayout instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<ServerTabLayout {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render an updated theme', () => {
      const wrapper = shallow(<ServerTabLayout {...defaultProps} />);
      const Select = wrapper.find({ 'data-test-id': 'Select' });

      expect(Select.props().theme({}).colors.primary).toEqual(theme.colorPrimary);
    });
  });
});
