const defaultStyles = theme => ({
  color: theme.textPrimary,
  fontFamily: theme.fontFamily,
  fontWeight: 700,
});

export default theme => ({
  h1: {
    ...defaultStyles(theme),
    fontSize: 80,
    lineHeight: '1.05em',
    letterSpacing: '-.09em',
    marginBottom: '0.8em',
  },
  h2: {
    ...defaultStyles(theme),
    fontSize: 64,
    lineHeight: '1.0625',
    letterSpacing: '-.009em',
    marginBottom: '0.6em',
  },
  h3: {
    ...defaultStyles(theme),
    fontSize: 32,
    lineHeight: '1.125',
    letterSpacing: '.004em',
    marginBottom: '0.4em',
  },
  h4: {
    ...defaultStyles(theme),
    fontSize: 24,
    lineHeight: '1.16667',
    letterSpacing: '.009em',
    marginBottom: '0.4em',
  },
  h5: {
    ...defaultStyles(theme),
    fontSize: 21,
    lineHeight: '1.38105',
    fontWeight: 400,
    letterSpacing: '.011em',
    marginBottom: '0.4em',
  },
  caption: {
    ...defaultStyles(theme),
    fontSize: 14,
    lineHeight: '1.33341',
    fontWeight: 400,
    letterSpacing: '-.01em',
    color: theme.textGrey,
  },
  p: {
    ...defaultStyles(theme),
    fontSize: 17,
    lineHeight: '1.47059',
    fontWeight: 400,
    letterSpacing: '-.022em',
  },
  link: {
    ...defaultStyles(theme),
    fontSize: 17,
    lineHeight: '1.47059',
    fontWeight: 400,
    letterSpacing: '-.022em',
    textDecoration: 'none',
    color: theme.colorBlue,
  },
  [theme.media.mobile]: {
    h1: {
      fontSize: 48,
    },
    h2: {
      fontSize: 40,
    },
    h4: {
      fontSize: 20,
    },
  },
});
