import { shape, node, string } from 'prop-types';

export const propTypes = {
  classes: shape({}).isRequired,
  emoji: node,
  label: string.isRequired,
};

export const defaultProps = {
  emoji: null,
};
