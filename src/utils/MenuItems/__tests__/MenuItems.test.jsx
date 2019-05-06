import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import { StaticRouter } from 'react-router-dom';

import MenuItems from '../MenuItems';
import theme from '../../theme';

const defaultProps = {
  classes: {},
};

describe('The MenuItems instance', () => {
  describe('when rendered', () => {
    it('should return the list of buttons', () => {
      const wrapper = mount(
        <ThemeProvider theme={theme}>
          <StaticRouter>
            <MenuItems {...defaultProps} />
          </StaticRouter>
        </ThemeProvider>,
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
