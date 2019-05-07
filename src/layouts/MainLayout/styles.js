export default theme => ({
  main: {
    marginLeft: 300,
    padding: 32,
    textAlign: 'center',
  },
  root: {
    maxWidth: 720,
    margin: '0 auto',
  },
  [theme.media.mobile]: {
    main: {
      marginLeft: 0,
    },
  },
});
