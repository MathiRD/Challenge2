import { View, StyleSheet, Image } from 'react-native';
import { RenderingStarsProp } from '../../types/types';

const RenderingStars = ({ rating }: RenderingStarsProp) => {
  const filledStars = Math.floor(rating);

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
    marginRight: 8,
    width: 15,
    height: 15,
  },
  starIconHalf: {
    marginRight: 8,
    width: 8,
    height: 15,
  },
});

export default RenderingStars;
