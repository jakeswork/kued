export default theme => ({
  modalWrapper: {
    margin: '32px auto',
    maxWidth: 640,
  },
  [theme.media.mobile]: {
    modalWrapper: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 0,
      background: 'rgba(255,255,255,0.8)',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 24,
    cursor: 'pointer',
    color: theme.textGrey,
  },
  modalEnter: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  modalEnterActive: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all .3s',
  },
  modalExit: {
    opacity: 1,
  },
  modalExitActive: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'all .3s',
  },
});
