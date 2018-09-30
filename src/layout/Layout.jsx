import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import firebase from '../firebase'
import styles from './Layout.module.scss'

export class Layout extends React.Component {
  static propTypes = {
    getClearSignedUser: PropTypes.func,
  }

  signOut() {
    const { getClearSignedUser } = this.props
    getClearSignedUser()
    firebase.auth().signOut()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        Wrapper
      </div>
    )
  }
}

const mapDispatch = ({
  auth: { getClearSignedUser, getUpdateSignedUser },
}) => ({
  getClearSignedUser,
  getUpdateSignedUser,
})


export default connect(null, mapDispatch)(Layout)
