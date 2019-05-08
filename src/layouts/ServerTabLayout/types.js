import {
  shape,
  node,
  arrayOf,
  string,
  func,
} from 'prop-types';

const dropdownOptionType = shape({
  value: string,
  label: string,
});
const dropdownOptionDefault = {
  value: '',
  label: '',
};

export const propTypes = {
  classes: shape({}).isRequired,
  children: node,
  dropdownOptions: arrayOf(dropdownOptionType),
  dropdownOptionDefault: dropdownOptionType,
  dropdownOnChange: func,
};

export const defaultProps = {
  children: null,
  dropdownOptions: [dropdownOptionDefault],
  dropdownOptionDefault,
  dropdownOnChange: () => {},
};
