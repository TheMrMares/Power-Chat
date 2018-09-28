import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
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
  }

  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    const { getClearSignedUser, getUpdateSignedUser } = this.props
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        await getUpdateSignedUser(user.uid)
      } else {
        getClearSignedUser(Immutable.Map())
      }
      this.setState({
        loading: false,
      })
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    const { loading } = this.state
    return (
      <div>
        {!loading && (
          firebase.auth().currenUser
            ? <Switch>
                <Route component={Layout} exact path="/" />
                <Redirect to="/" />
              </Switch>
            : <Switch>
                <Route component={Register} exact path="/register" />
                <Route component={Login} exact path="/login" />
                <Redirect to="/login" />
              </Switch>
        )}
        {loading && <p>Loading...</p>}
      </div>
    )
  }
}

const mapState = ({ auth }) => ({
  signedUser: auth.signedUser,
})

const mapDispatch = ({
  auth: { getClearSignedUser, getUpdateSignedUser },
}) => ({
  getClearSignedUser,
  getUpdateSignedUser,
})


export default withRouter(connect(mapState, mapDispatch)(App))
