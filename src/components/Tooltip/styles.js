export default {
  root: {
    position: 'absolute',
    top: 40,
    left: 0,
    background: 'rgba(0,0,0,0.8)',
    padding: '8px 16px',
    borderRadius: 4,
    zIndex: 999,
    pointerEvents: 'none',
    userSelect: 'none',
    '&:after': {
      bottom: '100%',
      left: 24,
      border: 'solid transparent',
      content: '" "',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'transparent',
      borderBottomColor: 'rgba(0,0,0,0.8)',
      borderWidth: 4,
      marginLeft: -4,
    },
  },
  tooltipEnter: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  tooltipEnterActive: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all .3s',
  },
  tooltipExit: {
    opacity: 1,
  },
  tooltipExitActive: {
    opacity: 0,
    transform: 'scale(0.9)',
    transition: 'all .3s',
  },
};
