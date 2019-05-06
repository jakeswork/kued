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
});
