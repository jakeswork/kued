import React from 'react';
import { shallow } from 'enzyme';

import ResponsiveModal from '../ResponsiveModal';

const defaultProps = {
  classes: {},
};

describe('The ResponsiveModal instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing any errors', () => {
      const wrapper = shallow(<ResponsiveModal {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When the close button is pressed', () => {
    it('should call the onClose prop', () => {
      const newProps = {
        ...defaultProps,
        onClose: jest.fn(),
      };
      const wrapper = shallow(<ResponsiveModal {...newProps} />);
      const closeButton = wrapper.find({ 'data-test-id': 'closeModalButton' });

      closeButton.simulate('click');

      expect(newProps.onClose).toHaveBeenCalledTimes(1);
    });
  });
});
