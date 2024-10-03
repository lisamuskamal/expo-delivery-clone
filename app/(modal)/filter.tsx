import { View, Text, StyleSheet, TouchableOpacityComponent, TouchableOpacity, ListRenderItem, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import categories from '@/assets/data/filter.json';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Category {
    name: string;
    count: number;
    checked?:boolean;
}

const ItemBox = () => (
    <><View style={styles.itemContainer}>
        <TouchableOpacity style={styles.item}>
            <Ionicons name="arrow-down" color={Colors.medium} size={20}></Ionicons>
            <Text style={{ flex: 1 }}>
                Sort
            </Text>
            <Ionicons name="chevron-forward" color={Colors.medium} size={22}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Ionicons name="fast-food-outline" color={Colors.medium} size={20}></Ionicons>
            <Text style={{ flex: 1 }}>
                Hygiene rating
            </Text>
            <Ionicons name="chevron-forward" color={Colors.medium} size={22}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Ionicons name="pricetag-outline" color={Colors.medium} size={20}></Ionicons>
            <Text style={{ flex: 1 }}>
                Sort
            </Text>
            <Ionicons name="chevron-forward" color={Colors.medium} size={22}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
            <Ionicons name="nutrition-outline" color={Colors.medium} size={20}></Ionicons>
            <Text style={{ flex: 1 }}>
                Sort
            </Text>
            <Ionicons name="chevron-forward" color={Colors.medium} size={22}></Ionicons>
        </TouchableOpacity>



    </View>
    <Text style={styles.header}>
            Categories
        </Text></>
);
const Filter = () => {

    const navigation = useNavigation();
    const [items, setItems] = useState<Category[]>(categories);
    const [selected, setSelected] = useState<Category[]>(categories);
    const flexWidth = useSharedValue(0);
    const scale = useSharedValue(0);

    useEffect(() => {
        const hasSelected = selected.length > 0;
        const selectedItems = items.filter((item) => item.checked);
        const newSelected = selectedItems.length > 0;

        if(hasSelected !== newSelected) {
            flexWidth.value = withTiming(newSelected ? 100: 0);
            scale.value = withTiming(newSelected ? 1: 0);
        }

        setSelected(selectedItems)
    }, [items]);

    const handleClearAll = () => {
        const updatedItems = items.map((item) => {
            item.checked = false;
            return item;
        })
        setItems(updatedItems); // Add this line
    };

    const animatedStyles = useAnimatedStyle (() => {
        return {
            width: flexWidth.value,
            opacity: flexWidth.value > 0 ? 1 : 0,
        };
    })
    const animatedText = useAnimatedStyle (() => {
        return {
            transform: [{scale: scale.value}]
        };
    })

    const renderItem : ListRenderItem<Category> = ({item, index}) => (
        <View style={styles.row}>
        <Text style={styles.itemText}>{item.name} ({item.count})</Text>
        <BouncyCheckbox
        isChecked = {items[index].checked}
        fillColor={Colors.primary}
        unFillColor='#fff'
        useBuiltInState = {false}
        iconStyle={{borderColor:Colors.primary, borderRadius:4}}
        innerIconStyle={{borderColor:Colors.primary, borderRadius:4}}
        onPress={() => {
            const isChecked = items[index].checked;

            const updatedItems = items.map ((item) => {
                if (item.name === items[index].name) {
                    item.checked =! isChecked;
            }
        return item;
        });

        setItems(updatedItems);
        }}>

        </BouncyCheckbox>
        
    </View>
    );
  return (
    <View style={styles.Container}>
        {/* <Button title="clear" onPress={handleClearAll}/> */}
      <FlatList data={items} renderItem={renderItem} ListHeaderComponent={<ItemBox/>}>


      </FlatList>
    <View style={{height:80}}/>
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
        <Animated.View style={[styles.outlineButton, animatedStyles]}>

        <TouchableOpacity onPress={(handleClearAll)}>
            <Animated.Text style={[animatedText, styles.outlineButtonText]}>Clear All</Animated.Text>
        </TouchableOpacity>
        
        </Animated.View>
        <TouchableOpacity style={styles.fullButton} onPress={() => navigation.goBack()}>
            <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View></View>
    </View>
  );
};

const styles = StyleSheet.create ({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        justifyContent : 'space-between'
    },
    Container: {
        flex:1,
        padding:16,
        backgroundColor:Colors.lightGrey,
    },
    item: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderColor: Colors.grey,
        borderBottomWidth: 1
    },
    itemText: {
        // flex: 1,
        fontSize:16,
        paddingRight:10
    },
    itemContainer: {
        padding:8,
        backgroundColor:'#fff',
        borderRadius: 8,
        marginBottom:16
    },
    fullButton: {
        padding:16,
        backgroundColor:Colors.primary,
        color: '#fff',
        alignItems: 'center',
        borderRadius: 8,
        flex: 1,
        height: 56
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#fff',
        padding: 10,
        elevation:10,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: -10
        }
    },

    footerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16 
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center'
    },
    outlineButton: {
        borderColor: Colors.primary,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height:56
        
    },
    outlineButtonText: {
        color:Colors.primary,
        fontWeight: 'bold',
        fontSize: 16
    }

})

export default Filter