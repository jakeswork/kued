import React from 'react';
import { shallow } from 'enzyme';

import Chip from '../Chip';

const defaultProps = {
  classes: {},
};

describe('The Chip instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing errors', () => {
      const wrapper = shallow(<Chip {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When hovering over the chip', () => {
    it('should render a tooltip', () => {
      const newProps = {
        ...defaultProps,
        tooltip: 'test',
      };
      const wrapper = shallow(<Chip {...newProps} />);
      const chip = wrapper.find({ 'data-test-id': 'chip-root' });

      expect(wrapper.state('isHovered')).toBe(false);

      chip.simulate('mouseenter');

      expect(wrapper.state('isHovered')).toBe(true);

      const tooltip = wrapper.find({ 'data-test-id': 'tooltip' });

      expect(tooltip.exists()).toBe(true);

      chip.simulate('mouseleave');

      expect(wrapper.state('isHovered')).toBe(false);
    });
  });
});
