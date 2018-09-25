import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  withStyles,
} from '@material-ui/core'
import styles from './Login.style'
import abc from './Login.module.scss'

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
        <p className={abc.testClass}>XDD</p>
      </div>
    )
  }
}

export default withStyles(styles)(Login)
