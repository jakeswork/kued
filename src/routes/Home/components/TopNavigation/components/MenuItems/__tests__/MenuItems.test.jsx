import React from 'react';
import { shallow } from 'enzyme';

import MenuItems from '../MenuItems';

describe('The MenuItems instance', () => {
  describe('when rendered', () => {
    it('should return the list of buttons', () => {
      const wrapper = shallow(<MenuItems />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
