import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/style';
import { ButtonProps } from '../../types/types';

const Button = ({ children, onClick, style }: ButtonProps) => {
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
    paddingVertical: 10,
  },
  buttonText: {
    color: GlobalStyles.colors.primary0,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
  },
});

export default Button;
