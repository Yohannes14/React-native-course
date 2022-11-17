import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
   return ( <Drawer.Navigator
           screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
           headerTintColor:'white',
          // sceneContainerStyle: {backgroundColor: '#3f2f25'}
           }}
           >
        <Drawer.Screen name ="Categories" component={CategoriesScreen} options ={{title:'All Categories'}} />
        <Drawer.Screen name ="Favories" component={FavoritesScreen} />

        </Drawer.Navigator>
   );
}


export default function App() {
  return (
     <>
     <StatusBar style='light' />
     <NavigationContainer>
     <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor:'white',
     //contentStyle: {backgroundColor: '#3f2f25'}
     
     }}>
        {/* <Stack.Screen name="Categories" component={CategoriesScreen} /> */}
        <Stack.Screen  
            name="Drawer" 
            component={DrawerNavigator} 
            options ={{
              //title: 'All Categories',
              headerShown :false,
             }}
            
            /> 
 
        <Stack.Screen 
           name ="MealsOverview" 
           component ={MealsOverview} 
          //  options ={{
          //   title: 'All Meals OverView',
          //   }}
          // options ={({route, navigation})=>{
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId
          //   };
          // }}
           
           />
            <Stack.Screen 
           name ="MealsDetails" 
           component ={MealDetailScreen}
          //  options ={{
          //   headerRight: () => {
          //     return <Button onPress={} title ='Tap me!' />
          //   },
          //  }}
           />
      </Stack.Navigator>
     </NavigationContainer>
     </>
  );
}  

const styles = StyleSheet.create({});

