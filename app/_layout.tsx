import CustomHeader from '@/components/CustomHeader';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import {BottomSheetModalProvider, TouchableOpacity} from '@gorhom/bottom-sheet';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{
          header: () => <CustomHeader/>,
        }}
        />
        <Stack.Screen name="(modal)/filter"
        options= {{
          presentation: 'modal',
          headerTitle: 'Filter',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.lightGrey,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
              <Ionicons name='close-outline' size={28} color={Colors.primary}/>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center'

        }} />
        <Stack.Screen name="(modal)/location-search"
        options= {{
          presentation: 'fullScreenModal',
          headerTitle: 'Select Location',
          headerStyle: {
            backgroundColor: Colors.lightGrey,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
              <Ionicons name='close-outline' size={28} color={Colors.primary}/>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center'
        }} />

        <Stack.Screen name="(modal)/dish"
        options= {{
          presentation: 'modal',
          headerTitle: '',
          headerTransparent: true,

          headerLeft: () => (
            <TouchableOpacity style={{backgroundColor:'#fff', borderRadius: 6}} onPress={() => {navigation.goBack()}}>
              <Ionicons name='close-outline' size={28} color={Colors.primary}/>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center'

        }} />

        <Stack.Screen name="basket"
        options= {{
          presentation: 'modal',
          headerTitle: 'Basket',
          headerTransparent: true,

          headerLeft: () => (
            <TouchableOpacity style={{backgroundColor:'#fff', borderRadius: 6}} onPress={() => {navigation.goBack()}}>
              <Ionicons name='close-outline' size={28} color={Colors.primary}/>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center'

        }} />
        
      </Stack>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
  );
}
