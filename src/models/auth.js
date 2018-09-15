import Immutable from 'immutable'

const auth = {
  effects: {
    updateSignedUser(payload) {
      this.updateUser(payload)
    },
  },
  reducers: {
    updateUser(state, payload) {
      const user = Immutable.fromJS(payload)
      return {
        ...state,
        isSigned: !user.isEmpty(),
        signedUser: user,
      }
    },
  },
  state: {
    isSigned: false,
    user: Immutable.Map(),
  },
}

export default auth
