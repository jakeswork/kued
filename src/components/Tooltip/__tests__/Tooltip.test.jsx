import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from '../Tooltip';

const defaultProps = {
  classes: {},
};

describe('The Tooltip instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing errors', () => {
      const wrapper = shallow(<Tooltip {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
