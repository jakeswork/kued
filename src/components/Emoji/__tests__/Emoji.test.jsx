import React from 'react';
import { shallow } from 'enzyme';

import Emoji from '../Emoji';

const defaultProps = {
  classes: {},
  label: 'test',
};

describe('The Emoji instance', () => {
  describe('When called with default props', () => {
    it('Should render without throwing an error', () => {
      const wrapper = shallow(<Emoji {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
