import React from 'react';
import { StyleSheet, SafeAreaView, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logInAsync } from 'expo-google-app-auth';
import { State, signIn } from '../store/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {};

export const HomeScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: State) => state);

  const handleSignIn = async () => {
    try {
      const result = await logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        iosClientId: IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      });
      if (result.type === 'success') {
        dispatch(signIn({username: result.user.name}));
      } else {
        return { cancelled: true };
      }
    } catch (err) {
      return { error: true };
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {auth.username
        ? <Text>Signed in as {auth.username}!</Text>
        : <Button title="SignIn with Google" onPress={handleSignIn} />
      }
    </SafeAreaView>
  );
};
