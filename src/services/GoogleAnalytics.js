import ReactGA from 'react-ga';

ReactGA.initialize('UA-139610124-1');

ReactGA.pageview(window.location.pathname + window.location.search);
