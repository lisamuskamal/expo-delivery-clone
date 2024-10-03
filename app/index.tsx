import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Categories from '@/components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import Restaurants from '@/components/Restaurants';
import { Colors } from '@/constants/Colors';

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom:100}}>
        <Categories />
        <Text style={styles.header}> Top picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}> Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 16,
        marginTop: 8
    },
    container: {
        top: 70,
        backgroundColor: Colors.lightGrey
    }
});

export default Page