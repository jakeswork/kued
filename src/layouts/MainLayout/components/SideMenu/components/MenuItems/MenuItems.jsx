import React, { Fragment } from 'react';

import Button from '../../../../../../components/Button';

export default () => (
  <Fragment>
    <Button flat style={{ color: 'white' }} link="/feed">
      Warmane
    </Button>
    <Button flat style={{ color: 'white' }} link="/vote">
      Other Servers
    </Button>
    <Button flat style={{ color: 'white' }} link="/contact">
      Contact
    </Button>
  </Fragment>
);
