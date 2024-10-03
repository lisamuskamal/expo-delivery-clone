import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import BottomSheet from './BottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>

        <View style={styles.searchField}>
                <Ionicons name="search-outline" size={20} color={Colors.medium}></Ionicons>
            <TextInput style= {styles.input} placeholder='Restaurants, groceries, dishes '/>
        </View>
        <Link href={'/(modal)/filter'} asChild>
            <TouchableOpacity style={styles.optionButton}>
                <Ionicons name="options-outline" size={20} color={Colors.primary}></Ionicons>
            </TouchableOpacity>
        </Link>
        </View>
    </View>
)

const CustomHeader = () => {

    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const openModal = () => {
        bottomSheetRef.current?.present();
    }

  return (
    <SafeAreaView style = {styles.SafeAreaView}>
    <BottomSheet ref={bottomSheetRef}/>
    <View style = {styles.container}>


      <TouchableOpacity onPress={openModal}>
        <Image style={styles.bike} source={require('@/assets/images/bike.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
        <Text style={styles.title}>Delivery . Now</Text>
        <View style={styles.location}>
            <Text style={styles.subtitle}>San Fracisco, CA</Text>
            <Ionicons name='chevron-down' size={15} color={Colors.primary}></Ionicons>

        </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
        <Ionicons name='person-outline' size={20} color={Colors.primary}></Ionicons>
        </TouchableOpacity>

    </View>
    <SearchBar></SearchBar>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    SafeAreaView : {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 20,
        paddingHorizontal: 20

    }, 
    bike : {
        height:40,
        width:40
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize:14,
        color:Colors.medium
    },
    subtitle: {
        fontSize: 18,
        fontWeight:'bold'
    },
    location: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 20
    },
    searchContainer: {
        height: 50,
        backgroundColor: '#fff'
    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal:20,
        alignItems: 'center'
    },
    searchField: {
        flex: 1,
        backgroundColor:Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        paddingLeft: 10
    },
    input: {
        padding: 10,
        color: Colors.mediumDark
    },
    optionButton: {
        padding:10,
        borderRadius:50
    },


})

export default CustomHeader