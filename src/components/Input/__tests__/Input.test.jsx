import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'react-jss';
import { StaticRouter } from 'react-router-dom';

import Input from '../Input';
import theme from '../../../utils/theme';

const defaultProps = {
  classes: {},
};

describe('The Input instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<Input {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when a placeholder is passed', () => {
    it('should render a placeholder', () => {
      const newProps = {
        ...defaultProps,
        placeholder: 'test',
      };
      const wrapper = shallow(<Input {...newProps} />);
      const placeholder = wrapper.find({ 'data-test-id': 'placeholder' });

      expect(placeholder.exists()).toBe(true);
    });
  });

  describe('When the input is focused', () => {
    it('should update the isFocused state', () => {
      const wrapper = shallow(<Input {...defaultProps} />);
      const input = wrapper.find('input');

      expect(wrapper.state('isFocused')).toBe(false);

      input.simulate('focus');

      expect(wrapper.state('isFocused')).toBe(true);
    });
  });

  describe('when the input is blurred', () => {
    describe('when the input value is empty', () => {
      it('should reset the isFocused prop to false', () => {
        const wrapper = mount(
          <ThemeProvider theme={theme}>
            <StaticRouter>
              <Input {...defaultProps} />
            </StaticRouter>
          </ThemeProvider>,
        );
        const input = wrapper.find('Input');
        const inputEl = input.find('input');

        expect(input.state().isFocused).toBe(false);

        inputEl.simulate('focus');

        expect(input.state().isFocused).toBe(true);

        inputEl.simulate('blur');

        expect(input.state().isFocused).toBe(false);
      });
    });
  });
});
