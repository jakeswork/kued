import React from 'react';
import { shallow } from 'enzyme';

import TeamCard from '../TeamCard';

const defaultProps = {
  classes: {},
};

describe('The TeamCard instance', () => {
  describe('When rendered with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<TeamCard {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When clicking the component', () => {
    it('Should render the opposite chevron', () => {
      const wrapper = shallow(<TeamCard {...defaultProps} />);
      const Card = wrapper.find({ 'data-test-id': 'Card' });
      const ChevronUp = wrapper.find({ 'data-test-id': 'ChevronUp' });
      const ChevronDown = wrapper.find({ 'data-test-id': 'ChevronDown' });

      expect(ChevronDown.exists()).toBe(true);
      expect(ChevronUp.exists()).toBe(false);

      Card.simulate('click');
    });
  });
});
