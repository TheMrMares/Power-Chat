import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import styles from './Register.module.scss'

export class Register extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h1>Register</h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2>Email</h2>
              <input
                name="registerEmail"
                onChange={this.handleChange}
                placeholder="Your email"
                type="email"
              />
              <input
                name="registerRepeatEmail"
                onChange={this.handleChange}
                placeholder="Repeat your email"
                type="email"
              />
              <h2>Nickname</h2>
              <input
                name="registerNickname"
                onChange={this.handleChange}
                placeholder="Your nickname"
                type="text"
              />
            </div>
            <div className={styles.column}>
              <h2>Personal</h2>
              <input
                name="registerFirstname"
                onChange={this.handleChange}
                placeholder="Firstname"
                type="text"
              />
              <input
                name="registerSurname"
                onChange={this.handleChange}
                placeholder="Surname"
                type="text"
              />
            </div>
            <div className={styles.column}>
              <h2>Password</h2>
              <input
                name="registerPassword"
                onChange={this.handleChange}
                placeholder="Your password"
                type="password"
              />
              <input
                name="registerRepeatPassword"
                onChange={this.handleChange}
                placeholder="Repeat your password"
                type="password"
              />
            </div>
          </div>
          <Button
            onClick={this.handleSubmit}
            size="normal"
            uppercase
          >
            register
          </Button>
          <p>Have you already got an account?</p>
          <Link to="/login">Sign in.</Link>
        </form>
      </div>
    )
  }
}

export default Register
