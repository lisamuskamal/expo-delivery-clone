import { View, Text, Button, StyleSheet } from 'react-native'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheet, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
    const snapPoints = useMemo (() => ['60%'], []);
    const renderBackDrop = useCallback((props:any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []);
    const {dismiss} = useBottomSheetModal();

    return (
    <BottomSheetModal 
        handleIndicatorStyle={{display: 'none'}}
        backgroundStyle = {{borderRadius: 0, backgroundColor: Colors.lightGrey}} 
        overDragResistanceFactor={0} 
        ref={ref} 
        snapPoints={snapPoints} 
        backdropComponent={renderBackDrop}>
        <View style={styles.contentContainer}>
            <View style={styles.toggle}>
            <TouchableOpacity style={styles.toggleActive}>
                <Text style={styles.textActive}>
                    Delivery
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toggleInactive}>
                <Text style={styles.textInactive}>
                    Pickup
                </Text>
            </TouchableOpacity>
            
            </View>

            <Text style={styles.subheader}>
                Your Location
            </Text>

            <Link href={'/(modal)/location-search'} asChild>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Ionicons name="location-outline" color={Colors.medium} size={20}></Ionicons>
                    <Text style={{flex:1}}>
                        Current Location
                    </Text>
                    <Ionicons name="chevron-forward" color={Colors.medium} size={20}></Ionicons>

                </View>
            </TouchableOpacity>
            </Link>


            <Text style={styles.subheader}>
                Arrival Time
            </Text>
            
            <TouchableOpacity>
                <View style={styles.item}>
                    <Ionicons name="time" color={Colors.medium} size={20}></Ionicons>
                    <Text style={{flex:1}}>
                        Now
                    </Text>
                    <Ionicons name="chevron-forward" color={Colors.medium} size={20}></Ionicons>

                </View>
            </TouchableOpacity>

            
            <TouchableOpacity style={styles.button} onPress={() => dismiss ()}>
            <Text style = {styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    </BottomSheetModal>
      
 
  )
});
const styles = StyleSheet.create({
    subheader: {
        fontSize: 16,
        fontWeight: '600',
        margin: 16

    },
    contentContainer: {
        flex: 1,

    },
    item: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderColor: Colors.grey,
        borderWidth: 1
    },
    button :{
        backgroundColor: Colors.primary,
        padding: 16,
        margin: 16,
        borderRadius: 4,
        alignItems: 'center'
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 32

    },
    toggleActive: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30

    },
    toggleInactive: {
        // backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30
    },
    textActive: {
        color: '#fff',
        fontWeight: 'bold'
    },
    textInactive: {
        color: Colors.primary,
        // fontWeight: 'bold'
    },
    buttonText: 
    {color: '#fff',
    fontWeight: 'bold'}
})

export default BottomSheet