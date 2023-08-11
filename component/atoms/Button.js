import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/style';

const Button = ({ children, onClick, style }) => {
  return (
    <View style={style}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onClick}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  buttonText: {
    color: GlobalStyles.colors.primary0,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});

export default Button;
