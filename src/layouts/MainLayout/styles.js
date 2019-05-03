export default theme => ({
  main: {
    marginLeft: 300,
    padding: '32px 16px',
  },
  [theme.media.mobile]: {
    main: {
      marginLeft: 0,
    },
  },
});
