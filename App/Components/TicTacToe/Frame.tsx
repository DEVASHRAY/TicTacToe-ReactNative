import React from 'react';
import Grid from './grid';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface Props {
  grid1: {};
  grid2: {};
  grid3: {};
  onGridPress: (row: number, col: number) => void;
  positions: {
    grid1: [number, number];
    grid2: [number, number];
    grid3: [number, number];
  };
  renderMove: (row: number, col: number) => string;
  winner: boolean;
}

const Frame: React.FC<Props> = ({
  grid1,
  grid2,
  grid3,
  renderMove,
  positions,
  onGridPress,
  winner,
}) => {
  
  return (
    <>
      <View style={styles.frame}>
        <TouchableOpacity
          disabled={winner}
          onPress={() => onGridPress(positions.grid1[0], positions.grid1[1])}>
          <Grid
            specificStyle={grid1}
            gridValue={renderMove(positions.grid1[0], positions.grid1[1])}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={winner}
          onPress={() => onGridPress(positions.grid2[0], positions.grid2[1])}>
          <Grid
            specificStyle={grid2}
            gridValue={renderMove(positions.grid2[0], positions.grid2[1])}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={winner}
          onPress={() => onGridPress(positions.grid3[0], positions.grid3[1])}>
          <Grid
            specificStyle={grid3}
            gridValue={renderMove(positions.grid3[0], positions.grid3[1])}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Frame;

const styles = StyleSheet.create({
  frame: {
    flexDirection: 'row',
  },
});
