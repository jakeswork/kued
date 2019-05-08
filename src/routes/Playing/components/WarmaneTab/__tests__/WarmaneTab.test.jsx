import React from 'react';
import { shallow } from 'enzyme';

import WarmaneTab from '../WarmaneTab';

const defaultProps = {
  classes: {},
};

describe('The WarmaneTab instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<WarmaneTab {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
