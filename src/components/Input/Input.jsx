import React, { Component } from 'react';
import classNames from 'classnames';

import { propTypes, defaultProps } from './types';

class Input extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  state = {
    isFocused: false,
  };

  render() {
    const {
      classes,
      placeholder,
      className,
      ...props
    } = this.props;
    const { isFocused } = this.state;

    return (
      <div className={classNames(classes.root, className)}>
        {
          placeholder && (
            <span
              data-test-id="placeholder"
              className={
                classNames(
                  classes.placeholder,
                  { [classes.placeholderActive]: isFocused },
                )
              }
            >
              { placeholder }
            </span>
          )
        }
        <input
          ref={(ref) => { this.input = ref; }}
          onFocus={() => this.setState({ isFocused: true })}
          onBlur={() => this.setState({ isFocused: this.input.value.length > 0 })}
          className={
            classNames(
              classes.input,
              { [classes.inputActive]: isFocused },
            )
          }
          {...props}
        />
      </div>
    );
  }
}

export default Input;
