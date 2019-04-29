const defaultStyles = theme => ({
  color: theme.textPrimary,
  fontFamily: theme.fontFamily,
  fontWeight: 600,
});

export default theme => ({
  h1: {
    ...defaultStyles(theme),
    fontSize: 80,
    lineHeight: '1.05em',
    letterSpacing: '-.015em',
    fontFamily: `Quicksand,${theme.fontFamily}`,
  },
  h2: {
    ...defaultStyles(theme),
    fontSize: 64,
    lineHeight: '1.0625',
    letterSpacing: '-.009em',
    fontFamily: `Quicksand,${theme.fontFamily}`,
  },
  h3: {
    ...defaultStyles(theme),
    fontSize: 32,
    lineHeight: '1.125',
    letterSpacing: '.004em',
  },
  h4: {
    ...defaultStyles(theme),
    fontSize: 24,
    lineHeight: '1.16667',
    letterSpacing: '.009em',
  },
  h5: {
    ...defaultStyles(theme),
    fontSize: 21,
    lineHeight: '1.38105',
    fontWeight: 400,
    letterSpacing: '.011em',
  },
  caption: {
    ...defaultStyles(theme),
    fontSize: 12,
    lineHeight: '1.33341',
    fontWeight: 400,
    letterSpacing: '-.01em',
  },
  p: {
    ...defaultStyles(theme),
    fontSize: 17,
    lineHeight: '1.47059',
    fontWeight: 400,
    letterSpacing: '-.022em',
  },
});
