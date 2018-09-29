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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    const { id, value } = evt.target
    this.setState({
      [id]: value,
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    const { history } = this.props
    const { loginEmail, loginPassword } = this.state
    history.push('/')
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h1>Login</h1>
          <h2>Email</h2>
          <Input
            id="loginEmail"
            onChange={this.handleChange}
            placeholder="Your email"
            type="email"
          />
          <h2>Password</h2>
          <Input
            id="loginPassword"
            onChange={this.handleChange}
            placeholder="Your password"
            type="password"
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
