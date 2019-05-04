import React, { Component, Fragment } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FiMenu, FiX } from 'react-icons/fi';

import propTypes from './types';
import MenuItems from './components/MenuItems';
import Text from '../../../../components/Text';
import logo from '../../../../assets/kued-logotype.png';
import menuLogo from '../../../../assets/logo.png';
import Viewport from '../../../../utils/Viewport';

class TopNavigation extends Component {
  static propTypes = propTypes;

  state = {
    isMobileViewport: false,
    isOpen: false,
  }

  componentDidMount() {
    this.updateViewportState();
    window.addEventListener('resize', this.updateViewportState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportState);
  }

  updateViewportState = () => {
    this.setState({ isMobileViewport: Viewport.mobile() });
  }

  render() {
    const { classes } = this.props;
    const { isMobileViewport, isOpen } = this.state;

    return (
      <Fragment>
        <img src={logo} alt="Kued Logotype" className={classes.img} />
        {
          isMobileViewport
            ? (
              <Fragment>
                <FiMenu
                  className={classes.menuIcon}
                  data-test-id="openMenuButton"
                  onClick={() => this.setState({ isOpen: !isOpen })}
                />
                <Menu
                  right
                  width="100%"
                  isOpen={isOpen}
                  className={classes.burgerMenu}
                  customBurgerIcon={false}
                  customCrossIcon={false}
                  noOverlay
                  data-test-id="slideOutMenu"
                >
                  <FiX
                    className={classes.menuIcon}
                    data-test-id="closeMenuButton"
                    onClick={() => this.setState({ isOpen: false })}
                  />
                  <nav className={classes.responsiveMenuItems}>
                    <MenuItems />
                  </nav>
                  <div className={classes.menuFooterWrapper}>
                    <img src={menuLogo} alt="Kued Logo" className={classes.menuLogo} />
                    <Text bold style={{ color: 'white' }}>Kued for private servers.</Text>
                    <Text caption bold style={{ color: 'white' }}>v1.0.0</Text>
                  </div>
                </Menu>
              </Fragment>
            ) : (
              <nav className={classes.menuItems}>
                <MenuItems />
              </nav>
            )
        }
      </Fragment>
    );
  }
}

export default TopNavigation;
