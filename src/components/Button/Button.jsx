import React from 'react';
import { Link } from 'react-router-dom';
import { OutboundLink } from 'react-ga';
import classNames from 'classnames';

import { propTypes, defaultProps } from './types';

const Button = ({
  classes,
  secondary,
  flat,
  children,
  link,
  theme,
  icon,
  analyticsLabel,
  success,
  danger,
  ...props
}) => {
  let className = classes.button;

  if (secondary) className = classes.secondary;

  if (flat) className = classes.flat;

  if (link) {
    if (/^https?:\/\//.test(link)) {
      return (
        <OutboundLink
          {...props}
          role="button"
          className={classNames(className, classes.link)}
          eventLabel={analyticsLabel}
          to={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          { children }
          { icon && React.cloneElement(icon, { className: classes.buttonIcon }) }
        </OutboundLink>
      );
    }

    return (
      <Link
        {...props}
        role="button"
        className={classNames(className, classes.link)}
        to={link}
      >
        { children }
        { icon && React.cloneElement(icon, { className: classes.buttonIcon }) }
      </Link>
    );
  }

  return (
    <button type="button" {...props} className={className}>
      { children }
      { icon && React.cloneElement(icon, { className: classes.buttonIcon }) }
    </button>
  );
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;

export default Button;
