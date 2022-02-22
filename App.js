import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TicTacToe from './App/Components/TicTacToe';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View>
            <TicTacToe />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
