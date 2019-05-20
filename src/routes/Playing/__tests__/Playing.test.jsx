import React from 'react';
import { shallow } from 'enzyme';

import Playing from '../Playing';
import GoogleAnalytics from '../../../services/GoogleAnalytics';

jest.mock('../../../services/GoogleAnalytics', () => ({
  event: jest.fn(),
}));

const defaultProps = {
  classes: {},
};

describe('The Playing instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<Playing {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When changing tabs', () => {
    it('should fire the GA event', () => {
      const wrapper = shallow(<Playing {...defaultProps} />);
      const Tabs = wrapper.find({ 'data-test-id': 'Tabs' });

      Tabs.prop('onSelect')(0);

      expect(GoogleAnalytics.event).toHaveBeenCalledWith({
        action: 'Click',
        category: 'Navigate',
        label: 'Open Warmane Tab',
      });
    });
  });
});
