const defaultStyles = theme => ({
  display: 'inline-block',
  textAlign: 'center',
  position: 'relative',
  padding: '.84375rem 1.5rem .65625rem',
  borderRadius: '.25rem',
  WebkitBoxShadow: '0 1px 5px 0 rgba(0,0,0,0.06)',
  boxShadow: '0 1px 5px 0 rgba(0,0,0,0.06)',
  fontSize: 16,
  fontWeight: 600,
  minWidth: 88,
  fontFamily: theme.fontFamily,
});

export default theme => ({
  button: {
    ...defaultStyles(theme),
    backgroundColor: theme.colorPrimary,
    border: '1px solid transparent',
    color: '#fff',
    textShadow: '0 1px 0 rgba(0,0,0,0.03)',
  },
  secondary: {
    ...defaultStyles(theme),
    backgroundColor: 'transparent',
    border: `1px solid ${theme.textSecondary}`,
    color: theme.colorPrimary,
  },
  flat: {
    ...defaultStyles(theme),
    color: theme.colorPrimary,
    border: 0,
    WebkitBoxShadow: 0,
    boxShadow: 0,
    textTransform: 'uppercase',
    background: 'transparent',
  },
});
