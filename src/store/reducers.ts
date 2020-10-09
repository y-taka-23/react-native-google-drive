import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { State, signIn } from './actions';

const initialState: State = {
  username: null,
}

export const reducer = reducerWithInitialState(initialState)
  .case(signIn, (state, payload) => ({...state, ...payload}))
