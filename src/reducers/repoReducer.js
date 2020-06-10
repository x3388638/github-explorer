export const repoInitialState = []

const repoReducer = (state = repoInitialState, { type, paylaod }) => {
  switch (type) {
    case 'appendItems': {
      return [...state, ...paylaod.list]
    }

    case 'initItems': {
      return paylaod.list
    }

    default:
      return state
  }
}

export default repoReducer
