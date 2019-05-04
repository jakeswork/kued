import React from 'react';
import { shallow } from 'enzyme';

import MainLayout from '../MainLayout';

const defaultProps = {
  classes: {},
};

describe('The MainLayout instance', () => {
  describe('when called with default properties', () => {
    it('should render without throwing any errors', () => {
      const wrapper = shallow(<MainLayout {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
