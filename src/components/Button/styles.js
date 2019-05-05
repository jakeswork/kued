const defaultStyles = {
  display: 'inline-block',
  textDecoration: 'none',
  textAlign: 'center',
  position: 'relative',
  border: 0,
  WebkitBoxShadow: '0 1px 5px 0 rgba(0,0,0,0.06)',
  boxShadow: '0 1px 5px 0 rgba(0,0,0,0.06)',
  fontSize: 16,
  fontWeight: 'bold',
  minWidth: 88,
  margin: '16px auto',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  borderRadius: 4,
  cursor: 'pointer',
  fontFamily: 'inherit',
  padding: '16px 32px',
};

export default theme => ({
  [theme.media.mobile]: {
    button: {
      width: '100%',
    },
    secondary: {
      width: '100%',
    },
    link: {
      width: 'calc(100% - 66px)',
    },
  },
  button: {
    ...defaultStyles,
    background: ({ danger, success }) => {
      if (danger) return theme.colorRed;

      if (success) return theme.colorGreen;

      return `linear-gradient(130deg, ${theme.colorGradientStart}, ${theme.colorGradientEnd}) transparent`;
    },
    border: 0,
    color: '#fff',
    textShadow: '0 1px 0 rgba(0,0,0,0.03)',
  },
  secondary: {
    ...defaultStyles,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.textSecondary}`,
    color: theme.colorPrimary,
  },
  flat: {
    ...defaultStyles,
    color: theme.colorPrimary,
    border: 0,
    WebkitBoxShadow: 0,
    boxShadow: 0,
    textTransform: 'uppercase',
    background: 'transparent',
  },
  buttonIcon: {
    fontSize: 20,
    marginLeft: 8,
    marginBottom: -4,
  },
});
