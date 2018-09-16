import React from 'react'
import PropTypes from 'prop-types'
import {
  Paper,
  withStyles,
} from '@material-ui/core'
import styles from './Register.style'

export class Register extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          REgister
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Register)
