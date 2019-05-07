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
    backgroundPosition: 'top left',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: 360,
    padding: '2em 0',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
