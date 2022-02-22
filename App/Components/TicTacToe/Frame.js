import React from 'react';
import Grid from './grid';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Frame = ({
  grid1,
  grid2,
  grid3,
  renderMove,
  positions,
  onGridPress = {onGridPress},
}) => {
  return (
    <>
      <View style={styles.frame}>
        <TouchableOpacity
          onPress={() => onGridPress(positions.grid1[0], positions.grid1[1])}>
          <Grid
            specificStyle={grid1}
            gridValue={renderMove(positions.grid1[0], positions.grid1[1])}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onGridPress(positions.grid2[0], positions.grid2[1])}>
          <Grid
            specificStyle={grid2}
            gridValue={renderMove(positions.grid2[0], positions.grid2[1])}
          />
        </TouchableOpacity>

        <TouchableOpacity
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
