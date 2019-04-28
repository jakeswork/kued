const defaultStyles = theme => ({
  color: theme.textPrimary,
  fontFamily: theme.fontFamily,
});

export default theme => ({
  h1: {
    ...defaultStyles(theme),
    fontWeight: 'bold',
    fontSize: 96,
    fontFamily: 'Quicksand,Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  },
  h2: {
    ...defaultStyles(theme),
    fontWeight: 'bold',
    fontSize: 80,
    fontFamily: 'Quicksand,Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  },
  h3: {
    ...defaultStyles(theme),
    fontSize: 64,
  },
  h4: {
    ...defaultStyles(theme),
    fontSize: 48,
  },
  h5: {
    ...defaultStyles(theme),
    fontSize: 32,
  },
  caption: {
    ...defaultStyles(theme),
    fontSize: 12,
    fontWeight: 'bold',
  },
  p: {
    ...defaultStyles(theme),
    fontSize: 16,
  },
});
