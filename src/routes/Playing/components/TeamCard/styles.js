export default theme => ({
  card: {
    width: 'calc(100% - 64px)',
    margin: '16px 0',
    cursor: 'pointer',
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    fontSize: 24,
    marginTop: 16,
  },
  small: {
    width: '20%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  lastPlayed: {
    flexDirection: 'column',
  },
  nameWrapper: {
    margin: '0 auto',
  },
  outcome: props => ({
    color: props.team.lastPlayed.outcome === 'Loss' ? theme.colorRed : theme.colorGreen,
    marginBottom: 8,
  }),
  [theme.media.mobile]: {
    small: {
      width: '100%',
    },
  },
});
