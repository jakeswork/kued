export default theme => ({
  input: {
    padding: '12px 16px',
    outline: 'none',
    border: `1px solid ${theme.textGrey}`,
    borderRadius: 4,
    fontSize: 16,
    fontFamily: theme.fontFamily,
  },
  root: {
    position: 'relative',
    margin: 8,
    display: 'inline-block',
  },
  placeholder: {
    position: 'absolute',
    fontFamily: theme.fontFamily,
    top: 14,
    left: 12,
    userSelect: 'none',
    pointerEvents: 'none',
    color: theme.textGrey,
    padding: '0 8px',
    fontSize: 16,
    transition: 'all .2s ease-in-out',
    background: 'white',
  },
  placeholderActive: {
    top: -6,
    left: 8,
    fontSize: 12,
    color: theme.colorPrimary,
  },
  inputActive: {
    borderColor: theme.colorPrimary,
  },
});
