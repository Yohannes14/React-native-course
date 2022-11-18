import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';

const Stack = createStackNavigator();
const BottonTabs = createBottomTabNavigator();

function ExpensesOverview(){
  return <BottonTabs.Navigator>
     <BottonTabs.Screen name ="RecentExpense" component={RecentExpenses} />
     <BottonTabs.Screen name ="AllExpenses" component={AllExpenses} />

  </BottonTabs.Navigator>
}

export default function App() {
  return (
    <>
     <StatusBar style="auto" />
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen  name ="ExpensesOverview" component={ExpensesOverview}/>
        <Stack.Screen name ="ManageExpense" component ={ManageExpenses} />
      </Stack.Navigator>

     </NavigationContainer>
    </>
    
  );
}

