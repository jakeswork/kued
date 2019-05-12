import React from 'react';
import { shallow } from 'enzyme';

import Players from '../Players';

const defaultProps = {
  classes: {},
  players: [
    {
      charname: '',
      damageDone: '',
      deaths: '',
      healingDone: '',
      killingBlows: '',
      matchmaking_change: '',
      personal_change: '',
      realm: '',
      teamname: '',
      teamnamerich: '',
    },
  ],
};
const mockResolvedPlayerData = [{
  spec: 'Feral Combat',
  name: 'Apparent',
  realm: 'Icecrown',
  online: false,
  level: '80',
  race: 'Night Elf',
  class: 'Druid',
  pvpteams: [{
    type: '2v2', name: 'Hello', rating: '2181', rank: '18',
  }, {
    type: '3v3', name: 'apparent', rating: '336', rank: '100+',
  }],
}];
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

        const playerWrapper = wrapper.find({ 'data-test-id': 'playerWrapper' });

        playerWrapper.simulate('mouseenter');

        const Tooltip = wrapper.find({ 'data-test-id': 'Tooltip' });

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
          charname: 'Apparent',
          realm: 'Icecrown',
        }],
      };
      const mockSuccessResponse = {};
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
      });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

      shallow(<Players {...newProps} />);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(`http://localhost:4000/api/v1/warmane/player/${newProps.players[0].charname}/${newProps.players[0].realm}`);
    });
  });
});
