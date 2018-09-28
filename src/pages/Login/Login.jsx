import React from 'react'
import PropTypes from 'prop-types'
import styles from './Login.module.scss'
import Button from '../../components/Button'
import firebase from '../../firebase'

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
    const { name, value } = evt.target
    this.setState({
      [name]: value,
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
          <input
            name="loginEmail"
            onChange={this.handleChange}
            placeholder="Your email"
            type="email"
          />
          <h2>Password</h2>
          <input
            name="loginPassword"
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
        </form>
      </div>
    )
  }
}

export default Login