import React from 'react'
import PropTypes from 'prop-types'
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'
import firebase from './firebase'
import Login from './pages/Login'
import Register from './pages/Register'
import Layout from './layout'
import './css/global.scss'

export class App extends React.Component {
  static propTypes = {
    getClearSignedUser: PropTypes.func,
    getUpdateSignedUser: PropTypes.func,
    isSigned: PropTypes.bool,
  }

  componentDidMount() {
    const { getClearSignedUser, getUpdateSignedUser } = this.props
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUpdateSignedUser(user.uid)
      } else {
        getClearSignedUser()
      }
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const { isSigned } = this.props
    return (
      <React.Fragment>
        {isSigned
          ? <Switch>
              <Route component={Layout} exact path="/" />
              <Redirect to="/" />
            </Switch>
          : <Switch>
              <Route component={Register} exact path="/register" />
              <Route component={Login} exact path="/login" />
              <Redirect to="/login" />
            </Switch>}
      </React.Fragment>
    )
  }
}

const mapState = ({ auth }) => ({
  isSigned: auth.isSigned,
})

const mapDispatch = ({
  auth: { getClearSignedUser, getUpdateSignedUser },
}) => ({
  getClearSignedUser,
  getUpdateSignedUser,
})


export default withRouter(connect(mapState, mapDispatch)(App))
