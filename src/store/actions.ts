import actionCreatorFactory from 'typescript-fsa';
import { GoogleUser } from 'expo-google-app-auth';

const actionCreator = actionCreatorFactory();

export type State = {
  username?: string,
}

export const signIn = actionCreator<Partial<State>>('SIGN_IN');
