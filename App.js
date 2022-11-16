
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
     <>
     <StatusBar style='light' />
     <NavigationContainer>
     <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor:'white',
     // contentStyle: {backgroundColor: '#3f2f25'}
     
     }}>
        {/* <Stack.Screen name="Categories" component={CategoriesScreen} /> */}
        <Stack.Screen  
            name="All Categories" 
            component={CategoriesScreen} 
            // options ={{
            //   title: 'All Categories',
            //  }}
            
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
      </Stack.Navigator>
     </NavigationContainer>
     </>
  );
}  

const styles = StyleSheet.create({});

