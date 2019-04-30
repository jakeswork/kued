import backgroundImage from '../../assets/background-image.jpg';

export default theme => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.colorSecondary,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: 300,
    padding: '2em',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
