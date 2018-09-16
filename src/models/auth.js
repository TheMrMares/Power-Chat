import Immutable from 'immutable'
import firebase from '../firebase'

const auth = {
  effects: {
    getClearSignedUser() {
      this.updateUser(Immutable.Map())
    },
    async getUpdateSignedUser(uid) {
      const userData = await firebase.firestore().collection('users').doc(uid).get()
      const rewrittenData = { ...userData.data(), id: userData.ref.id }
      this.updateUser(rewrittenData)
    },
  },
  reducers: {
    updateUser(state, payload) {
      const user = Immutable.fromJS(payload)
      return {
        ...state,
        signedUser: user,
      }
    },
  },
  state: {
    user: Immutable.Map(),
  },
}

export default auth
