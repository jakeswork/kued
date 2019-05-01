import React, { Component, Fragment } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FiX, FiMenu } from 'react-icons/fi';

import { propTypes, defaultProps } from './types';
import Viewport from '../../../../utils/Viewport';

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
    this.setState({ isMobileViewport: Viewport.mobile() });
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
        >
          {isMobileViewport && (
            <FiX
              className={classes.menuIcon}
              data-test-id="closeMenuButton"
              onClick={() => this.setState({ isOpen: false })}
            />
          )}
          <nav className={classes.responsiveMenuItems}>
            <div>Menu Item</div>
          </nav>
        </Menu>
      </Fragment>
    );
  }
}

export default SideMenu;
