import React from 'react';
import { FlatList } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { logInAsync } from 'expo-google-app-auth';
import axios from 'axios';
import { State, signIn } from '../store/actions';
import { dummyFiles, DummyFile } from '../../dummy';

type Props = {};

export const HomeScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: State) => state);

  const extractFileKey = (file: DummyFile) => (file.id);

  const renderFileItem = ({ item }: { item: DummyFile }) => (
    <ListItem bottomDivider>
      <Icon name='code' />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
     <ListItem.Chevron />
    </ListItem>
  );

  return (
    <FlatList
      data={dummyFiles}
      keyExtractor={extractFileKey}
      renderItem={renderFileItem}
    />
  );
};
