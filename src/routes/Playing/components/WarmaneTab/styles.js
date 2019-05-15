export default theme => ({
  tabActive: {
    color: theme.colorPrimary,
    cursor: 'default',
    pointerEvents: 'none',
  },
  tabList: {
    display: 'flex',
  },
  tabsContainer: {
    textAlign: 'center',
  },
  spinnerWrapper: {
    display: 'inline-block',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  select: {
    width: 160,
    cursor: 'pointer',
  },
  input: {
    margin: 8,
  },
  [theme.media.mobile]: {
    input: {
      margin: '8px auto',
    },
    select: {
      width: 202,
      margin: '0 auto',
    },
  },
});
