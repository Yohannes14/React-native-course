import { useState } from "react";
import {
       FlatList, 
        StyleSheet,
        View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prev) => 
    [...prev, {text:enteredGoalText, id:Math.random().toString()}]);
  };
  return ( 
    <View style={styles.appContainer}>
      <GoalInput onAddGoal ={addGoalHandler}/>
      <View style={styles.goalContainer}>
        {/* Optimizing list with flatlist */}
      <FlatList data ={courseGoals} renderItem= {itemData =>{ 
        return <GoalItem text ={itemData.item.text}/>;
      }}
        keyExtractor ={(item, index) => {
          return item.id;
        }}
         alwaysBounceVertical ={false}
       
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  }
});
