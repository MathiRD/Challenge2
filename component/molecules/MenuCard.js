import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/style';

const Menu = ({ item }) => {
  return (
    <View style={styles.menuCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.menuImage} />
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    borderColor: GlobalStyles.colors.buttonPrincipal,
    height: 164,
    width: 170,
    marginHorizontal: 19,
    marginVertical: 10,
    backgroundColor: GlobalStyles.colors.primary900,
    borderRadius: 8,
  },
  menuImage: {
    width: '100%',
    height: 104,
    borderRadius: 8,
  },
  cardText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    padding: 10,
    color: GlobalStyles.colors.primary0,
  },
});

export default Menu;
