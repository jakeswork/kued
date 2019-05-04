import { shape, node, func } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  children: node,
  onClose: func,
};

export const defaultProps = {
  children: null,
  onClose: () => {},
};
