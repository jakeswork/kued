import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

const defaultProps = {};

describe('The Home instance', () => {
  describe('when called with default props', () => {
    it('should render without throwing errors', () => {
      const wrapper = shallow(<Home {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
