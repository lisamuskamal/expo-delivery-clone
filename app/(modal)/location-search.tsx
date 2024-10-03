import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { Colors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';

// process.env.EXPO_PUBLIC_GOOGLE_API_KEY

const LocationSearch = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState ({
        latitude: 37.78825, 
        longitude: -122.4324, 
        latitudeDelta: 0.0421, 
        longitudeDelta: 0.0922
    })
  return (
    <View style={{flex:1}}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails = {true}
      onPress={(data, details) => {
        const point = details?.geometry?.location;
        // 'details' is provided when fetchDetails = true
        if (!point) return;
        setLocation({
            ...location,
            latitude: point.lat,
            longitude: point.lng,

        })
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
        language: 'en',
      }}
      renderLeftButton={() => (
        <View style = {styles.boxIcon}>
            <Ionicons name="search-outline" size={24} color={Colors.medium}>

            </Ionicons>
            </View>
      )
         }
      styles={{
        container: {
            flex: 0
        },
        textInput: {
            backgroundColor: Colors.grey,
            paddingLeft: 35
        },
        textInputContainer: {
            backgroundColor: '#fff',
            padding: 8,
            borderRadius: 10
        },
        
      }}
    />
        <MapView showsUserLocation={true} style={styles.map} region={location}/>

            <View style={styles.absoluteBox}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
            </View>
    </View>
  )
}

const styles =StyleSheet.create ({
    map: {
        flex:1,

    },
    absoluteBox: {
        position: 'absolute',
        bottom: 20,
        width: '100%'
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 16,
        margin: 16,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    boxIcon: {
        position: 'absolute',
        left: 15,
        top: 18,
        zIndex: 1
    }

})

export default LocationSearch   