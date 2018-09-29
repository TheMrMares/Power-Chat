import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { isEmailValid } from '../../utils/formValidation'
import styles from './Register.module.scss'

export class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      registerEmail: { data: '', error: '' },
      registerFirstname: { data: '', error: '' },
      registerNickname: { data: '', error: '' },
      registerPassword: { data: '', error: '' },
      registerRepeatEmail: { data: '', error: '' },
      registerRepeatPassword: { data: '', error: '' },
      registerSurname: { data: '', error: '' },
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    evt.stopPropagation()
    const { state } = this
    let overallCondition = false
    if (!isEmailValid(state.registerEmail.data)) {
      this.setState({
        registerEmail: {
          data: state.registerEmail.data,
          error: 'Your email is incorrect',
        },
      })
      overallCondition = true
    }
    if (state.registerRepeatEmail.data !== state.registerEmail.data) {
      this.setState({
        registerRepeatEmail: {
          data: state.registerRepeatEmail.data,
          error: 'Repeated email have to be same',
        },
      })
      overallCondition = true
    }
    if (!(state.registerNickname.data.length >= 6 && state.registerNickname.data.length <= 16)) {
      this.setState({
        registerNickname: {
          data: state.registerNickname.data,
          error: 'Nickname have to be min. 6 and max. 16 characters',
        },
      })
      overallCondition = true
    }
    if (state.registerFirstname.data === '') {
      this.setState({
        registerFirstname: {
          data: state.registerFirstname.data,
          error: 'Firstname cannot be empty',
        },
      })
      overallCondition = true
    }
    if (state.registerSurname.data === '') {
      this.setState({
        registerSurname: {
          data: state.registerSurname.data,
          error: 'Surname cannot be empty',
        },
      })
      overallCondition = true
    }
    if (!(state.registerPassword.data.length >= 6 && state.registerPassword.data.length <= 24)) {
      this.setState({
        registerPassword: {
          data: state.registerPassword.data,
          error: 'Password have to be min. 6 and max. 16 characters',
        },
      })
      overallCondition = true
    }
    if (state.registerPassword.data !== state.registerRepeatPassword.data) {
      this.setState({
        registerRepeatPassword: {
          data: state.registerRepeatPassword.data,
          error: 'Passwords must be same',
        },
      })
      overallCondition = true
    }

    if (overallCondition === true) {
      return
    }
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
    const { state } = this
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h1>Register</h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2>Email</h2>
              <Input
                error={state.registerEmail.error}
                id="registerEmail"
                label="Email"
                onChange={this.handleChange}
                placeholder="example@domain.com"
                type="email"
                value={state.registerEmail.data}
              />
              <Input
                error={state.registerRepeatEmail.error}
                id="registerRepeatEmail"
                label="Repeat email"
                onChange={this.handleChange}
                placeholder="example@domain.com"
                type="email"
                value={state.registerRepeatEmail.data}
              />
              <h2>User</h2>
              <Input
                error={state.registerNickname.error}
                id="registerNickname"
                label="Nickname"
                onChange={this.handleChange}
                placeholder="HappyNickname123"
                type="text"
                value={state.registerNickname.data}
              />
            </div>
            <div className={styles.column}>
              <h2>Personal</h2>
              <Input
                error={state.registerFirstname.error}
                id="registerFirstname"
                label="Firstname"
                onChange={this.handleChange}
                placeholder="John"
                type="text"
                value={state.registerFirstname.value}
              />
              <Input
                error={state.registerSurname.error}
                id="registerSurname"
                label="Surname"
                onChange={this.handleChange}
                placeholder="Smith"
                type="text"
                value={state.registerSurname.value}
              />
            </div>
            <div className={styles.column}>
              <h2>Password</h2>
              <Input
                error={state.registerPassword.error}
                id="registerPassword"
                label="Choose password"
                onChange={this.handleChange}
                placeholder="******"
                type="password"
                value={state.registerPassword.data}
              />
              <Input
                error={state.registerRepeatPassword.error}
                id="registerRepeatPassword"
                label="Repeat password"
                onChange={this.handleChange}
                placeholder="******"
                type="password"
                value={state.registerRepeatPassword.data}
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
