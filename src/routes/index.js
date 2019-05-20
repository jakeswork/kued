import Home from './Home';
import Support from './Support';
import Servers from './Servers';
import Playing from './Playing';

export default [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/support',
    Component: Support,
  },
  {
    path: '/servers',
    Component: Servers,
  },
  {
    path: '/playing',
    Component: Playing,
  },
];
