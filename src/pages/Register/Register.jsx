import React from 'react'
import { Link } from 'react-router-dom'
import firebaseApp from 'firebase/app'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { isEmailValid } from '../../utils/formValidation'
import firebase from '../../firebase'
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
    const { history } = this.props
    const {
      registerEmail,
      registerFirstname,
      registerNickname,
      registerPassword,
      registerRepeatEmail,
      registerRepeatPassword,
      registerSurname,
    } = this.state
    let overallCondition = false
    if (!isEmailValid(registerEmail.data)) {
      this.setState({
        registerEmail: {
          data: registerEmail.data,
          error: 'Your email is incorrect',
        },
      })
      overallCondition = true
    }
    if (registerRepeatEmail.data !== registerEmail.data) {
      this.setState({
        registerRepeatEmail: {
          data: registerRepeatEmail.data,
          error: 'Emails have to be the same',
        },
      })
      overallCondition = true
    }
    if (!(registerNickname.data.length >= 6 && registerNickname.data.length <= 16)) {
      this.setState({
        registerNickname: {
          data: registerNickname.data,
          error: 'Nickname have to be min. 6 and max. 16 characters',
        },
      })
      overallCondition = true
    }
    if (registerFirstname.data === '') {
      this.setState({
        registerFirstname: {
          data: registerFirstname.data,
          error: 'Firstname cannot be empty',
        },
      })
      overallCondition = true
    }
    if (registerSurname.data === '') {
      this.setState({
        registerSurname: {
          data: registerSurname.data,
          error: 'Surname cannot be empty',
        },
      })
      overallCondition = true
    }
    if (!(registerPassword.data.length >= 6 && registerPassword.data.length <= 24)) {
      this.setState({
        registerPassword: {
          data: registerPassword.data,
          error: 'Password have to be min. 6 and max. 16 characters',
        },
      })
      overallCondition = true
    }
    if (registerPassword.data !== registerRepeatPassword.data) {
      this.setState({
        registerRepeatPassword: {
          data: registerRepeatPassword.data,
          error: 'Passwords have to be the same',
        },
      })
      overallCondition = true
    }

    if (overallCondition === true) return
    try {
      const signUp = await firebase
        .auth()
        .createUserWithEmailAndPassword(registerEmail.data, registerPassword.data)
      await firebase.firestore()
        .collection('users')
        .doc(signUp.user.uid)
        .set({
          created: firebaseApp.firestore.FieldValue.serverTimestamp(),
          email: registerEmail.data,
          firstname: registerFirstname.data,
          id: signUp.user.uid,
          nickname: registerNickname.data,
          surname: registerSurname.data,
        })
      history.push('/')
    } catch (error) {
      console.log(error)
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
    const {
      registerEmail,
      registerFirstname,
      registerNickname,
      registerPassword,
      registerRepeatEmail,
      registerRepeatPassword,
      registerSurname,
    } = this.state
    return (
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <h1>Register</h1>
          <div className={styles.row}>
            <div className={styles.column}>
              <h2>Email</h2>
              <Input
                error={registerEmail.error}
                id="registerEmail"
                label="Email"
                onChange={this.handleChange}
                placeholder="example@domain.com"
                type="email"
                value={registerEmail.data}
              />
              <Input
                error={registerRepeatEmail.error}
                id="registerRepeatEmail"
                label="Repeat email"
                onChange={this.handleChange}
                placeholder="example@domain.com"
                type="email"
                value={registerRepeatEmail.data}
              />
              <h2>User</h2>
              <Input
                error={registerNickname.error}
                id="registerNickname"
                label="Nickname"
                onChange={this.handleChange}
                placeholder="HappyNickname123"
                type="text"
                value={registerNickname.data}
              />
            </div>
            <div className={styles.column}>
              <h2>Personal</h2>
              <Input
                error={registerFirstname.error}
                id="registerFirstname"
                label="Firstname"
                onChange={this.handleChange}
                placeholder="John"
                type="text"
                value={registerFirstname.value}
              />
              <Input
                error={registerSurname.error}
                id="registerSurname"
                label="Surname"
                onChange={this.handleChange}
                placeholder="Smith"
                type="text"
                value={registerSurname.value}
              />
            </div>
            <div className={styles.column}>
              <h2>Password</h2>
              <Input
                error={registerPassword.error}
                id="registerPassword"
                label="Choose password"
                onChange={this.handleChange}
                placeholder="******"
                type="password"
                value={registerPassword.data}
              />
              <Input
                error={registerRepeatPassword.error}
                id="registerRepeatPassword"
                label="Repeat password"
                onChange={this.handleChange}
                placeholder="******"
                type="password"
                value={registerRepeatPassword.data}
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
