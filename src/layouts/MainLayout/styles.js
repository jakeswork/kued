export default theme => ({
  main: {
    marginLeft: 300,
    padding: 32,
    textAlign: 'center',
  },
  [theme.media.mobile]: {
    main: {
      marginLeft: 0,
    },
  },
});
