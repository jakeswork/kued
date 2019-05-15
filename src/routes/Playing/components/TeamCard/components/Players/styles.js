export default theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '16px 0',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  playerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    margin: '8px 0',
  },
  playerNameWrapper: {
    textAlign: 'left',
    position: 'relative',
  },
  onlineIndicator: {
    display: 'inline-block',
    position: 'relative',
    marginRight: 8,
    width: 12,
    height: 12,
    borderRadius: '100%',
    backgroundColor: theme.colorRed,
  },
  playerRating: {
    margin: '0 8px',
  },
  playerRatingWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  online: {
    backgroundColor: theme.colorGreen,
  },
});
