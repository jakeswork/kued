export default theme => ({
  root: {
    padding: '8px 16px',
    display: 'inline-block',
    margin: 4,
    borderRadius: 24,
    position: 'relative',
    fontSize: 12,
    cursor: 'default',
    userSelect: 'none',
    backgroundColor: (props) => {
      if (props.green) return theme.colorGreen;

      if (props.red) return theme.colorRed;

      if (props.amber) return theme.colorAmber;

      return theme.colorBlue;
    },
  },
});
