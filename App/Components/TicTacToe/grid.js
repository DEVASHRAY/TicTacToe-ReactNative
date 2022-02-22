import React from 'react';
import X from '../../assests/X.png';
import O from '../../assests/O.png';

import {StyleSheet, Text, View, Image} from 'react-native';

const Grid = ({specificStyle, gridValue: move}) => {
  const renderMoveIcon = () => {
    if (move === 'X') {
      return <Image source={X} style={styles.movesIcon} />;
    } else if (move === 'O') {
      return <Image source={O} style={styles.movesIcon} />;
    }
    return <View />;
  };

  return (
    <>
      <View style={[styles.square, {...specificStyle}]}>
        {renderMoveIcon()}
      </View>
    </>
  );
};

export default Grid;

const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  movesIcon: {
    width: 40,
    height: 40,
  },
});
