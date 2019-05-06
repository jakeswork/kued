import React from 'react';
import { shallow } from 'enzyme';

import Support, { cardStyles } from '../Support';

const defaultProps = {
  classes: {},
};

describe('The Support instance', () => {
  describe('When called with default properties', () => {
    it('should render without throwing any errors', () => {
      const wrapper = shallow(<Support {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when clicking on the cards', () => {
    it('should fire the showHelp method', () => {
      jest.useFakeTimers();

      const wrapper = shallow(<Support {...defaultProps} />);
      const cards = wrapper.find({ style: cardStyles });

      cards.forEach((card, i) => {
        card.simulate('click');

        jest.advanceTimersByTime(300);

        if (i === 0) return expect(wrapper.state('showType')).toEqual('support');

        if (i === 1) return expect(wrapper.state('showType')).toEqual('bug');

        if (i === 2) return expect(wrapper.state('showType')).toEqual('vote');
      });
    });
  });

  describe('when calling the close method', () => {
    it('should set the state to null', () => {
      const wrapper = shallow(<Support {...defaultProps} />);

      wrapper.setState({ showType: 'test' });

      expect(wrapper.state('showType')).toEqual('test');

      wrapper.instance().close();

      expect(wrapper.state('showType')).toEqual(null);
    });
  });
});
