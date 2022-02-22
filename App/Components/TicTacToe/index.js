import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Frame from './Frame';

const TicTacToe = () => {
  /*
    1 => player 1 and X
   -1 => player 2 and O
    0 => Empty Grid
    */

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameState, setGameState] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    Reset();
  }, []);

  const Reset = () => {
    setGameState([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setWinner('');
  };

  const renderMove = (row, col) => {
    let value = gameState[row][col];
    switch (value) {
      case 1:
        return 'X';
      case -1:
        return 'O';
      default:
        return '';
    }
  };

  const onGridPress = (row, col) => {
    if (gameState[row][col] !== 0) {
      return;
    }

    //Set value for current grid
    let arrCopy = gameState.slice();
    arrCopy[row][col] = currentPlayer;
    setGameState(arrCopy);

    //Change Current Player
    setCurrentPlayer(prev => (prev === 1 ? -1 : 1));
    let winner = getWinner();
    if (winner === 1) {
      alert('player 1 has won');
      setWinner(1);
      setCurrentPlayer(1);
      // Reset();
    } else if (winner === -1) {
      alert('player 2 has won');
      setWinner('2');
      setCurrentPlayer(-1);
      // Reset();
    }
  };

  const getWinner = () => {
    let sum;

    //check rows
    for (let i = 0; i < 3; i++) {
      sum = gameState[i][0] + gameState[i][1] + gameState[i][2];

      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }

      //check columns
      sum = gameState[0][i] + gameState[1][i] + gameState[2][i];

      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }

      //check diagonals
      sum = gameState[0][0] + gameState[1][1] + gameState[2][2];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }

      sum = gameState[2][0] + gameState[1][1] + gameState[1][2];
      if (sum === 3) {
        return 1;
      } else if (sum === -3) {
        return -1;
      }

      //No winners
    }
    return 0;
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View>
            <Frame
              grid1={{borderLeftWidth: 0, borderTopWidth: 0}}
              grid2={{borderTopWidth: 0}}
              grid3={{borderRightWidth: 0, borderTopWidth: 0}}
              renderMove={renderMove}
              positions={{
                grid1: [0, 0],
                grid2: [0, 1],
                grid3: [0, 2],
              }}
              onGridPress={onGridPress}
            />
            <Frame
              grid1={{borderLeftWidth: 0}}
              grid2={{}}
              grid3={{borderRightWidth: 0}}
              renderMove={renderMove}
              positions={{
                grid1: [1, 0],
                grid2: [1, 1],
                grid3: [1, 2],
              }}
              onGridPress={onGridPress}
            />
            <Frame
              grid1={{borderLeftWidth: 0, borderBottomWidth: 0}}
              grid2={{borderBottomWidth: 0}}
              grid3={{borderRightWidth: 0, borderBottomWidth: 0}}
              renderMove={renderMove}
              positions={{
                grid1: [2, 0],
                grid2: [2, 1],
                grid3: [2, 2],
              }}
              onGridPress={onGridPress}
            />
          </View>
          <TouchableOpacity
            style={{
              marginTop: 50,
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: '#052f5f',
            }}
            onPress={() => {
              Reset();
              setCurrentPlayer(1);
            }}>
            <Text style={{color: '#FFF'}}>New Game</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default TicTacToe;
