import React, { useReducer } from 'react';
import { View } from 'react-native';

import List from './List';
//import Input from './Input';
import Title from './Title';
import { actionCreators, reducer, initialState } from './team';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Title>Company Manage</Title>
      <List
        teams={state.teams}
        onPressTeam={(id) => dispatch(actionCreators.remove(id))}
      />
    </View>
  );
}