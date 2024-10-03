import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'
import { categories } from '@/assets/data/home'
import { Colors } from '@/constants/Colors'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{padding:15}}>
        {categories.map((category, index) => (
            <View key={index} style={styles.categoryCard}>
            <Image style= {styles.categoryImage} source={category.img} />
            <Text style={styles.categoryText}>{category.text}</Text>
          </View>
))}    
</ScrollView>
  )
}

const styles = StyleSheet.create ({
 categoryCard: {
    width: 100,
    height: 110,
    backgroundColor:'#fff',
    marginEnd: 10,
    elevation:2,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    }, 
    shadowOpacity: 0.06,
    borderRadius: 4
 },
 categoryText: {
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold'
 },
 categoryImage: {
    width: 100,
    height:80
 }
})

export default Categories