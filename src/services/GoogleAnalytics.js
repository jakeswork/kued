import { initialize, pageview as pv, event as ev } from 'react-ga';

const options = {
  gaOptions: {
    cookieDomain: 'auto',
  },
};

export default {
  init: () => initialize(process.env.REACT_APP_GA_TRACKING_ID, options),
  pageview: () => pv(window.location.pathname + window.location.search),
  event: e => ev(e),
};
