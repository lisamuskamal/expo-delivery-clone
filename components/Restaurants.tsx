import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { restaurants } from '@/assets/data/restaurant';
import { Link } from 'expo-router';
import {Colors} from '@/constants/Colors';
import { getRestaurantById } from '@/assets/data/restaurant';

const restaurantId = 1; // Replace with the ID of the restaurant you want to access
const selectedRestaurant = getRestaurantById(restaurantId);

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}>

        
{restaurants.map((restaurant, index) => (
  <Link key={restaurant.id} href={{ pathname: '/details', params: { id: restaurant.id }}} asChild>
    <TouchableOpacity onPress={() => console.log(`Restaurant ID: ${restaurant.id}`)}>
      <View style={styles.categoryCard}>
        <Image source={restaurant.img} style={styles.image} />
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>{restaurant.name}</Text>
          <Text style={{ color: Colors.green }}>
            {restaurant.rating} {restaurant.ratings}
          </Text>
          <Text style={{ color: Colors.medium }}>{restaurant.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Link>
))}

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  categoryCard: {
    width: 300,
    height: 250,
    backgroundColor: '#fff',
    marginEnd: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryText: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    flex: 5,
    width: undefined,
    height: undefined,
  },
  categoryBox: {
    flex: 2,
    padding: 10,
  },
});

export default Restaurants;