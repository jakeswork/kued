import React from 'react';
import { shallow } from 'enzyme';

import Players from '../Players';
import mockResolvedPlayerData from '../__mocks__/mockResolvedPlayerData';

const defaultProps = {
  classes: {},
  players: [
    {
      charname: 'Test',
      damageDone: '123',
      deaths: '1',
      healingDone: '123',
      killingBlows: '1',
      matchmaking_change: '123',
      personal_change: '123',
      realm: 'Blackrock',
      teamname: 'Test',
      teamnamerich: 'Test',
    },
  ],
};

describe('The Players instance', () => {
  describe('When rendered with default props', () => {
    it('should render without throwing an error', () => {
      const wrapper = shallow(<Players {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('When the players are loaded', () => {
    it('should render player information', () => {
      const wrapper = shallow(<Players {...defaultProps} />);

      wrapper.setState({ loading: false, players: mockResolvedPlayerData });

      const playerWrapper = wrapper.find({ 'data-test-id': 'playerWrapper' });

      expect(playerWrapper.exists()).toBe(true);
    });

    describe('When a player card is hovered', () => {
      it('Should display a tooltip describing if they are online or not', () => {
        const wrapper = shallow(<Players {...defaultProps} />);

        wrapper.setState({ loading: false, players: mockResolvedPlayerData });

        const playerWrapper = wrapper.find({ 'data-test-id': 'playerWrapper' }).first();

        playerWrapper.simulate('mouseenter');

        const Tooltip = wrapper.find({ 'data-test-id': 'Tooltip' }).first();

        expect(Tooltip.props().children).toEqual('Offline');

        playerWrapper.simulate('mouseleave');

        const onlineMock = [{ ...mockResolvedPlayerData[0], online: true }];

        wrapper.setState({ players: onlineMock });

        playerWrapper.simulate('mouseenter');

        const newTooltip = wrapper.find({ 'data-test-id': 'Tooltip' });

        expect(newTooltip.props().children).toEqual('Online');
      });
    });
  });

  describe('When fetching data', () => {
    it('Should update the loading state and set the players', () => {
      const newProps = {
        ...defaultProps,
        players: [{
          ...defaultProps.players[0],
          charname: 'Test',
          realm: 'Icecrown',
        }],
      };
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      const wrapper = shallow(<Players {...newProps} />);

      wrapper.setState({ players: mockResolvedPlayerData });

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(`http://localhost:4000/api/v1/warmane/player/${newProps.players[0].charname}/${newProps.players[0].realm}`);
    });
  });
});
