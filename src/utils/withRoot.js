import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightblue from '@material-ui/core/colors/lightBlue'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'inherit',
        },
      },
    },
    MuiListItemIcon: {
      root: { color: 'inherit' },
    },
  },
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#2B3540',
      light: '#48515A',
      main: '#36404A',
    },
    secondary: lightblue,
    special: {
      dark: '#009FDB',
      main: '#00CCFF',
    },
  },
  typography: {
    subheading: {
      color: 'inherit',
    },
  },
})
function withRoot(Component) {
  function WithRoot(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
