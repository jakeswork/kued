import React from 'react';
import { shallow } from 'enzyme';

import SideMenu from '../SideMenu';

const defaultProps = {
  classes: {},
};

describe('The SideMenu instance', () => {
  describe('When called with default properties', () => {
    it('should render without throwing errors', () => {
      const wrapper = shallow(<SideMenu {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();

      wrapper.unmount();
    });
  });

  describe('when there is a mobile viewport', () => {
    describe('when you click the menu button', () => {
      it('should open the menu', () => {
        const wrapper = shallow(<SideMenu {...defaultProps} />);

        global.innerWidth = 414;

        global.dispatchEvent(new Event('resize'));

        const button = wrapper.find({ 'data-test-id': 'openMenuButton' });

        expect(wrapper.state('isOpen')).toBe(false);

        button.simulate('click');

        expect(wrapper.state('isOpen')).toBe(true);
      });
    });

    describe('when you click the close button', () => {
      it('should close the menu', () => {
        const wrapper = shallow(<SideMenu {...defaultProps} />);

        global.innerWidth = 414;

        global.dispatchEvent(new Event('resize'));

        const button = wrapper.find({ 'data-test-id': 'closeMenuButton' });

        wrapper.setState({ isOpen: true });

        expect(wrapper.state('isOpen')).toBe(true);

        button.simulate('click');

        expect(wrapper.state('isOpen')).toBe(false);
      });
    });
  });
});
