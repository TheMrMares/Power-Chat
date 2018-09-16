import backgroundImg from '../assets/images/nyc-original.jpg'

export default theme => ({ // eslint-disable-line
  progress: {
    left: 'calc(50% - 20px)',
    position: 'absolute',
    top: 'calc(50% - 20px)',
  },
  root: {
    alignItems: 'center',
    background: `url(${backgroundImg})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    minWidth: '100vh',
    overflow: 'hidden',
  },
})
