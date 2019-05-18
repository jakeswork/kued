import React from 'react';
import { shallow } from 'enzyme';

import WarmaneTab from '../WarmaneTab';
import theme from '../../../../../utils/theme';
import mockResolvedTeamData from '../__mocks__/mockResolvedTeamData';

const defaultProps = {
  classes: {},
};

describe('The WarmaneTab instance', () => {
  describe('When called with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<WarmaneTab {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render an updated theme', () => {
      const wrapper = shallow(<WarmaneTab {...defaultProps} />);
      const Select = wrapper.find({ 'data-test-id': 'Select' });

      expect(Select.props().theme({}).colors.primary).toEqual(theme.colorPrimary);
    });

    it('should render a select with updated styles', () => {
      const wrapper = shallow(<WarmaneTab {...defaultProps} />);
      const Select = wrapper.find({ 'data-test-id': 'Select' });

      Select.prop('styles').option({}, {});

      Select.prop('styles').control({}, {});

      expect(JSON.stringify(Select.prop('styles')))
        .toEqual(JSON.stringify({ control: () => {}, option: () => {} }));

      expect(Select.prop('styles').option({}, { isFocused: true }).color).toEqual('white');
    });
  });

  describe('when typing in the input to search', () => {
    it('should update the state and limit the cards displayed', () => {
      const wrapper = shallow(<WarmaneTab {...defaultProps} />);
      const input = wrapper.find({ 'data-test-id': 'searchInput' });

      wrapper.setState({ teams: mockResolvedTeamData });

      input.simulate('change', { target: { value: 'Test' } });

      expect(wrapper.state('searchFilter')).toEqual('test');
    });
  });

  describe('When fetching data', () => {
    it('Should update the loading state and set the teams', () => {
      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(mockResolvedTeamData),
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      shallow(<WarmaneTab {...defaultProps} />);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:4000/api/v1/warmane/tbc/2v2/');
    });
  });

  describe('When changing the select', () => {
    it('should call update the bracket state', () => {
      const wrapper = shallow(<WarmaneTab {...defaultProps} />);
      const select = wrapper.find({ 'data-test-id': 'Select' });

      select.props().onChange({ value: 'test' });

      expect(wrapper.state('bracket')).toEqual('test');
    });
  });

  describe('When changing the tab', () => {
    it('should update the tab state', () => {
      const wrapper = shallow(<WarmaneTab {...defaultProps} />);
      const Tabs = wrapper.find({ 'data-test-id': 'Tabs' });

      Tabs.prop('onSelect')(1);

      expect(wrapper.state('expansion')).toEqual('wotlk');

      Tabs.prop('onSelect')(0);

      expect(wrapper.state('expansion')).toEqual('tbc');
    });
  });
});
