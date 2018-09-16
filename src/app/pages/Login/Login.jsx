import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  withStyles,
} from '@material-ui/core'
import styles from './Login.style'

export class Login extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          login
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Login)
