import backgroundImage from '../../assets/background-image.jpg';

export default theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.colorSecondary,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '130% 130%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: 300,
    padding: '2em',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
