// import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet, Image } from 'react-native';
import { RenderingStarsProp } from '../../types/types';

const RenderingStars = ({ rating }: RenderingStarsProp) => {
  const filledStars = Math.floor(rating);
  const remainingStar = Math.floor(5 - rating);

  return (
    <View style={styles.containerStars}>
      {Array.from({ length: filledStars }).map((_, index) => (
        <Image
          key={index}
          source={require('../../assets/icons/star.png')}
          style={styles.starIcon}
        />
      ))}
      {rating % 1 !== 0 && (
        <Image
          key={'half-star'}
          source={require('../../assets/icons/half-star.png')}
          style={styles.starIconHalf}
        />
      )}
      {Array.from({ length: remainingStar }).map((_, index) => (
        <Ionicons
          key={filledStars + (rating % 1 !== 0 ? 1 : 0) + index}
          name="star"
          style={styles.starIcon}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 18,
  },
  starIcon: {
    marginRight: 5,
    width: 15,
    height: 15,
  },
  starIconHalf: {
    marginRight: 5,
    width: 8,
    height: 15,
  },
});

export default RenderingStars;
