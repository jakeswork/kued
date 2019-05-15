const mockData = {
  lastPlayed: {
    id: '',
    opponent: '',
    outcome: '',
    rating: '',
    time: '1 hour ago',
  },
  name: 'test',
  rank: null,
  realm: '',
  url: '',
  players: [{
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
  }],
};

export default [
  mockData,
  {
    ...mockData,
    lastPlayed: {
      ...mockData.lastPlayed,
      time: '5 minutes ago',
    },
  },
  {
    ...mockData,
    lastPlayed: {
      ...mockData.lastPlayed,
      time: '1 hour ago',
    },
  },
  {
    ...mockData,
    lastPlayed: {
      ...mockData.lastPlayed,
      time: 'March 12',
    },
  },
  {
    ...mockData,
    lastPlayed: {
      ...mockData.lastPlayed,
      time: 'May 15',
    },
  },
];
