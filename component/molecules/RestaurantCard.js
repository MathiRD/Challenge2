import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../constants/style';

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate('DetailsScreen', {
            restaurantId: restaurant.id,
          });
        }}
      >
        <Image
          source={{ uri: restaurant.coverImageUrl }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{restaurant.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    width: '93%',
    height: 150,
    flexShrink: 0,
    marginVertical: 10,
    marginHorizontal: 22,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardInfo: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardTitle: {
    color: GlobalStyles.colors.primary0,
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
  },
});

export default RestaurantCard;
