import React from 'react';
import Select from 'react-select';
import { TabPanel } from 'react-tabs';

import { propTypes, defaultProps } from './types';
import theme from '../../utils/theme';

const ServerTabLayout = ({
  classes,
  children,
  dropdownOptions,
  dropdownOptionDefault,
  dropdownOnChange,
  ...props
}) => (
  <TabPanel {...props}>
    <div className={classes.root}>
      <Select
        data-test-id="Select"
        onChange={dropdownOnChange}
        options={dropdownOptions}
        className={classes.select}
        defaultValue={dropdownOptionDefault}
        placeholder="Select Bracket"
        theme={og => ({
          ...og,
          colors: {
            ...og.colors,
            primary25: theme.colorPrimary,
            primary50: theme.colorPrimary,
            primary75: theme.colorPrimary,
            primary: theme.colorPrimary,
          },
        })}
      />
      <div className={classes.inner}>
        { children }
      </div>
    </div>
  </TabPanel>
);

ServerTabLayout.propTypes = propTypes;

ServerTabLayout.defaultProps = defaultProps;

ServerTabLayout.tabsRole = 'TabPanel';

export default ServerTabLayout;
