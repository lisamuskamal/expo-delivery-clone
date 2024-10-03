import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import useBasketStore from '@/store/basketStore'
import { FlatList } from 'react-native-gesture-handler';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import ConfettiCannon from 'react-native-confetti-cannon'
import { Link } from 'expo-router';
import SwipeableRow from '@/components/SwipeableRow';

const Basket = () => {
    const {products, total, clearCart, reduceProduct} = useBasketStore();
    const [order, setOrder] = useState(false);

    const fees = {
        service: 2.99,
        delivery: 5.99
    }

    const startCheckOut = () => {
        setOrder(true);
        clearCart();
    };

  return (
    <>
    {order && 
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} fallSpeed={2500} fadeOut={true} autoStart={true} />}
    
    {order && (
        <View style={{marginTop: '50%', padding: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Order Placed!</Text>
            <Link href={'/'} asChild>
            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.footerText}>Back to Home

                </Text>
            </TouchableOpacity>
            </Link>
        </View>
    )} 
    {!order && (
            <>
            <FlatList data={products}
            ListHeaderComponent={<Text style={styles.section}>Items</Text>}
            ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: Colors.grey}}/>}
            renderItem={({item}) => (
                <SwipeableRow onDelete={() => reduceProduct(item)}>
                <View style={styles.row}>
                    <Text style={{color: Colors.primary, fontSize: 18}}>{item.quantity}x</Text>
                    <Text style={{flex:1, fontSize: 18}}>{item.name}</Text>
                    <Text style={{fontSize: 18}}>${item.price * item.quantity} </Text>
                </View>
                </SwipeableRow>
            )}

            ListFooterComponent={
                <View>
                    <View style={{height: 1, backgroundColor: Colors.grey}}></View>
                    <View style={styles.totalRow}>
                    <Text style={styles.total}>Subtotal</Text>
                    <Text style={{fontSize:18}}>${total}</Text>
                    </View>


                    {/* <View style={{height: 1, backgroundColor: Colors.grey}}></View> */}
                    <View style={styles.totalRow}>
                    <Text style={styles.total}>Service Fee</Text>
                    <Text style={{fontSize:18}}>${fees.service}</Text>
                    </View>

                    {/* <View style={{height: 1, backgroundColor: Colors.grey}}></View> */}
                    <View style={styles.totalRow}>
                    <Text style={styles.total}>Delivery Fee</Text>
                    <Text style={{fontSize:18}}>${fees.delivery}</Text>
                    </View>

                    {/* <View style={{height: 1, backgroundColor: Colors.grey}}></View> */}
                    <View style={styles.totalRow}>
                    <Text style={styles.total}>Total Order</Text>
                    <Text style={{fontSize:18, fontWeight: 'bold'}}>${(total + fees.delivery + fees.service ).toFixed(2)}</Text>
                    </View>
                </View>
            }
            
            />

            <View style={styles.footer}>
            <SafeAreaView edges={['bottom']} style={{backgroundColor: '#fff'}}>
                    <TouchableOpacity style={styles.fullButton} onPress={startCheckOut}>
                        <Text style={styles.footerText}>Order Now</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
            </>
        )
    }
    </>
  )
}

const styles = StyleSheet.create( {
    row: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        gap: 20,
        fontSize: 16,
        alignItems: 'center'
    },
    section: {
        fontSize: 20, 
        fontWeight: 'bold',
        margin: 16,
    },
    totalRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff'
    },
    total :{
        color: Colors.mediumDark,
        fontSize: 16
    },
    footer: {
      position: 'absolute',
      backgroundColor: '#fff',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: 10,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -10 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      paddingTop: 20,
    },
  footerText: {
    color:'#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  fullButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  orderButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: 250,
    height: 50,
    justifyContent: 'center',
    marginTop: 40
  }
})

export default Basket