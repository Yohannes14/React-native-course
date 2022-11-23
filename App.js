import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './screens/AllPlaces';
import AddPlaces from './screens/AddPlaces';
import IconButton from './components/ui/IconButton';
import { Colors } from './constants/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar  style='dark'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: Colors.gray700,
        contentStyle: {backgroundColor: Colors.gray700},
      }}>
        <Stack.Screen 
         name ="AllPlaces" 
        component={AllPlaces}
        options ={({navigation}) =>({
          title: 'Your Favorite places',
          headerRight: ({tintColor}) =>(
          <IconButton 
          icon="add"
           size ={24} 
           color ={tintColor}
           onPress ={() => navigation.navigate('AddPlace') }
            /> ),
        })}
        />
        <Stack.Screen  name ="AddPlace" component={AddPlaces}
        options ={{
          title:'Add a new Place',
        }}/>
      </Stack.Navigator>

    </NavigationContainer>
    </>
  );
}

