import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const RestaurantListScreen = ({ navigation }) => {
    const navigateToDetals = () => {
        navigation.navigate('RestaurantsDetails');
    };

    const NavigateToInitialScreen = () => {
        navigation.navigate('InitialScreen')
    }

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <TouchableOpacity onPress={NavigateToInitialScreen}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    }
});

export default RestaurantListScreen;