import Immutable from 'immutable'
import firebase from '../firebase'

const users = {
  effects: {
    async getUsersListAsync() {
      const data = await firebase.firestore()
        .collection('users')
        .get()
      const mappedData = data.docs.map(user => ({ ...user.data(), id: user.ref.id }))
      this.updateUsersList(mappedData)
    },
  },
  reducers: {
    updateUsersList(state, payload) {
      return {
        ...state,
        usersList: Immutable.fromJS(payload),
      }
    },
  },
  state: {
    usersList: Immutable.List(),
  },
}

export default users
