import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import firebase from '../../firebase'
import styles from './Login.module.scss'
import Input from '../../components/Input'

export class Login extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  }

  constructor() {
    super()
    this.state = {
      loginEmail: { data: '', error: '' },
      loginPassword: { data: '', error: '' },
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    const { history } = this.props
    const { loginEmail, loginPassword } = this.state
    let overallCondition = false
    if (loginEmail.data === '') {
      this.setState({
        loginEmail: {
          data: loginEmail.data,
          error: 'Email cannot be empty',
        },
      })
      overallCondition = true
    }
    if (loginPassword.data === '') {
      this.setState({
        loginPassword: {
          data: loginPassword.data,
          error: 'Password cannot be empty',
        },
      })
      overallCondition = true
    }
    if (overallCondition === true) return
    firebase.auth().signInWithEmailAndPassword(loginEmail.data, loginPassword.data)
    history.push('/')
  }

  handleChange(evt) {
    const { id, value } = evt.target
    this.setState({
      [id]: {
        data: value,
        error: '',
      },
    })
  }

  render() {
    const {
      loginEmail,
      loginPassword,
    } = this.state
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h1>Login</h1>
          <h2>Email</h2>
          <Input
            error={loginEmail.error}
            id="loginEmail"
            onChange={this.handleChange}
            placeholder="Your email"
            type="email"
            value={loginEmail.data}
          />
          <h2>Password</h2>
          <Input
            error={loginPassword.error}
            id="loginPassword"
            onChange={this.handleChange}
            placeholder="Your password"
            type="password"
            value={loginPassword.data}
          />
          <Button
            onClick={this.handleSubmit}
            size="normal"
            uppercase
          >
            login
          </Button>
          <p>Haven&#39;t you got an account?</p>
          <Link to="/register">Sign up.</Link>
        </form>
      </div>
    )
  }
}

export default Login
