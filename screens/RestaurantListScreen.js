import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect} from 'react';


const RestaurantListScreen = ({ navigation }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState([true]);
    
    
    
    const navigateToDetals = () => {
        navigation.navigate('RestaurantsDetails');
    };

    const NavigateToInitialScreen = () => {
        navigation.navigate('InitialScreen')
    }

    useEffect(() => {
        axios.get('https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev')
            .then(response => {
                setRestaurants(response.data.body.restaurants);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    })

    return (
        <View  style={styles.container}>
            <View  style={styles.textProvisory}>
                <Text style={styles.RestaurantCardText} >Hello</Text>
                <TouchableOpacity onPress={NavigateToInitialScreen}>
                    <Text style={styles.RestaurantCardText} >Go back</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={restaurants}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Image source={{ uri: item.CoverImageUrl }}/>
                        <View>
                            <Text style={styles.RestaurantCardText}>{item.name}</Text>
                        </View>
                        <FlatList
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c2c2e',
        flex: 1,

    },
    textProvisory: {
        marginTop: 100,
        alignItems: 'center',
    },
    RestaurantCardText: {
        color: '#fff'
    }
});

export default RestaurantListScreen;