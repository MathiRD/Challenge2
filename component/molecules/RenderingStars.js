import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet} from 'react-native'

const RenderingStars = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const remainingStar = Math.floor(5 - rating);
  
    return (
      <View style={styles.containerStars}>
        {Array.from({ length: filledStars }).map((_, index) => (
          <Ionicons
            key={index}
            name="star-sharp"
            size={20}
            color="orange"
            style={styles.starIcon}
          />
        ))}
        {rating % 1 !== 0 && (
          <Ionicons
            key={'half-star'}
            name="star-half-sharp"
            size={20}
            color="orange"
          />
        )}
        {Array.from({ length: remainingStar }).map((_, index) => (
          <Ionicons
            key={filledStars + (rating % 1 !== 0 ? 1 : 0) + index}
            name="star-sharp"
            size={20}
            color="orange"
          />
        ))}
      </View>
    );
  };

const styles = StyleSheet.create({
    containerStars: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 18
    },
    starIcon: {
        marginRight: 5
    }
  });



export default RenderingStars;