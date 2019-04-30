import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';

import propTypes from './types';
import Button from '../../../../components/Button';
import logo from '../../../../assets/kued-logotype.png';

class TopNavigation extends Component {
  static propTypes = propTypes;

  state = {
    isMobileViewport: false,
  }

  componentDidMount() {
    this.updateViewportState();
    window.addEventListener('resize', this.updateViewportState);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportState);
  }

  updateViewportState = () => {
    this.setState({ isMobileViewport: window.innerWidth < 376 });
  }

  render() {
    const { classes } = this.props;
    const { isMobileViewport } = this.state;

    return (
      <div className={classes.root}>
        <img src={logo} alt="Kued Logo" className={classes.img} />
        {
          isMobileViewport
            ? (
              <Menu right>
                <Button flat style={{ color: 'white' }} link="/feed">
                  Whos Playing
                </Button>
                <Button flat style={{ color: 'white' }} link="/vote">
                  Compatibility
                </Button>
                <Button flat style={{ color: 'white' }} link="/contact">
                  Contact
                </Button>
              </Menu>
            ) : (
              <div className={classes.menuItems}>
                <Button flat style={{ color: 'white' }} link="/feed">
                  Whos Playing
                </Button>
                <Button flat style={{ color: 'white' }} link="/vote">
                  Compatibility
                </Button>
                <Button flat style={{ color: 'white' }} link="/contact">
                  Contact
                </Button>
              </div>
            )
        }
      </div>
    );
  }
}

export default TopNavigation;
