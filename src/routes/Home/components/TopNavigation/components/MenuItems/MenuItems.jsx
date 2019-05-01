import React, { Fragment } from 'react';

import Button from '../../../../../../components/Button';

export default () => (
  <Fragment>
    <Button flat style={{ color: 'white' }} link="/feed">
      Whos Playing
    </Button>
    <Button flat style={{ color: 'white' }} link="/vote">
      Compatibility
    </Button>
    <Button flat style={{ color: 'white' }} link="/contact">
      Contact
    </Button>
  </Fragment>
);
