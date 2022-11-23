import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlaces';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar  style='dark'/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
         name ="AllPlaces" 
        component={AllPlaces}
        options ={({navigation}) =>({
          headerRight: ({tintColor}) =>(
          <IconButton 
          icon="add"
           size ={24} 
           color ={tintColor}
           onPress ={() => navigation.navigate('AddPlace') }
            /> ),
        })}
        />
        <Stack.Screen  name ="AddPlace" component={AddPlaces}/>
      </Stack.Navigator>

    </NavigationContainer>
    </>
  );
}

