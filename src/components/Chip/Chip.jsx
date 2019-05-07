import React, { Component } from 'react';

import { propTypes, defaultProps } from './types';
import Text from '../Text';
import Tooltip from '../Tooltip';

class Chip extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    isHovered: false,
  };

  render() {
    const { isHovered } = this.state;
    const { classes, children, tooltip } = this.props;

    return (
      <div
        data-test-id="chip-root"
        className={classes.root}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <Text caption bold style={{ color: 'white' }}>{ children }</Text>
        {
          tooltip && (
            <Tooltip visible={isHovered} data-test-id="tooltip">
              { tooltip }
            </Tooltip>
          )
        }
      </div>
    );
  }
}

export default Chip;
