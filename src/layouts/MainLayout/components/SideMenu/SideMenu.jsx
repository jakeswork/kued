import React, { Component, Fragment } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FiX, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { propTypes, defaultProps } from './types';
import viewport from '../../../../utils/viewport';
import logo from '../../../../assets/kued-logotype.png';
import Text from '../../../../components/Text';
import MenuItems from '../../../../utils/MenuItems';

class SideMenu extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    isMobileViewport: false,
    isOpen: true,
  }

  componentDidMount() {
    this.updateViewportState();
    window.addEventListener('resize', this.updateViewportState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportState);
  }

  updateViewportState = () => {
    this.setState({
      isMobileViewport: viewport.isMobile(),
      isOpen: !viewport.isMobile(),
    });
  }

  render() {
    const { isOpen, isMobileViewport } = this.state;
    const { classes } = this.props;

    return (
      <Fragment>
        {isMobileViewport && (
          <FiMenu
            className={classes.menuIcon}
            data-test-id="openMenuButton"
            onClick={() => this.setState({ isOpen: !isOpen })}
          />
        )}
        <Menu
          left
          isOpen={isOpen}
          className={classes.burgerMenu}
          customBurgerIcon={false}
          customCrossIcon={false}
          noOverlay
          data-test-id="sideMenu"
          itemListClassName={classes.menuList}
        >
          {isMobileViewport && (
            <FiX
              className={classes.menuIcon}
              data-test-id="closeMenuButton"
              onClick={() => this.setState({ isOpen: false })}
              style={{ color: 'white' }}
            />
          )}
          <Link to="/" className={classes.logo}>
            <img src={logo} alt="Kued Logo" className={classes.logoImg} />
          </Link>
          <div className={classes.menuItems}>
            <MenuItems />
          </div>
          <div className={classes.sideMenuFooter}>
            <Text caption style={{ color: 'white' }}>v1.0.0</Text>
          </div>
        </Menu>
      </Fragment>
    );
  }
}

export default SideMenu;
