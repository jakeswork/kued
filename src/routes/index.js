import Home from './Home';
import Support from './Support';
import Servers from './Servers';
import Playing from './Playing';

export default [
  {
    path: '/',
    Component: Home,
    title: 'Kued | Elevate your arena experience',
  },
  {
    path: '/support',
    Component: Support,
    title: 'Kued | How can we help?',
  },
  {
    path: '/servers',
    Component: Servers,
    title: 'Kued | Servers',
  },
  {
    path: '/playing',
    Component: Playing,
    title: 'Kued | Playing',
  },
];
