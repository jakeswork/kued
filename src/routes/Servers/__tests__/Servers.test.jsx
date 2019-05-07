import React from 'react';
import { shallow } from 'enzyme';

import Servers from '../Servers';

const defaultProps = {
  classes: {},
};

describe('The Servers instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing errors', () => {
      const wrapper = shallow(<Servers {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when typing in the input to search', () => {
    it('should update the state and limit the cards displayed', () => {
      const wrapper = shallow(<Servers {...defaultProps} />);
      const input = wrapper.find({ 'data-test-id': 'searchInput' });

      input.simulate('change', { target: { value: 'Test' } });

      expect(wrapper.state('searchInput')).toEqual('test');
    });
  });
});
