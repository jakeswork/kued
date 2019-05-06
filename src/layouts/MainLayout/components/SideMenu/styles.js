export default theme => ({
  menuIcon: {
    fontSize: 24,
    position: 'fixed',
    top: 16,
    left: 16,
    cursor: 'pointer',
    color: theme.colorSecondary,
    zIndex: 2,
  },
  burgerMenu: {
    borderRight: `1px solid ${theme.textSecondary}`,
    background: theme.colorSecondary,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: '16px 0',
  },
  logo: {
    position: 'fixed',
    top: 16,
    outline: 'none',
    border: 0,
  },
  logoImg: {
    width: 160,
  },
  sideMenuFooter: {
    bottom: 16,
    position: 'fixed',
  },
  menuList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItems: {
    display: 'flex !important',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
