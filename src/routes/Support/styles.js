export default theme => ({
  cardsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactFooter: {
    marginTop: 64,
  },
  [theme.media.mobile]: {
    contactFooter: {
      marginTop: 32,
    },
  },
});
