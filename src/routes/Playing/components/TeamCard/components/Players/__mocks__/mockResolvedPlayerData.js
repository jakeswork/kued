const player = {
  spec: 'Feral Combat',
  name: 'Apparen',
  realm: 'Icecrown',
  online: false,
  level: '80',
  guild: 'Test',
  race: 'Night Elf',
  class: 'Druid',
  pvpteams: [{
    type: '2v2', name: 'Hello', rating: '2181', rank: '18',
  }, {
    type: '3v3', name: 'apparent', rating: '336', rank: '100+',
  }],
};

export default [
  player,
  {
    ...player,
    name: 'Other',
    pvpteams: {
      1: {},
    },
  },
];
