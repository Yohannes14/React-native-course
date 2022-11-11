import { useState } from "react";
import {Button, 
        FlatList, 
        ScrollView, 
        StyleSheet,
        Text,
        TextInput,
        View } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState(" ");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addInputHandler = () => {
    setCourseGoals((prev) => 
    [...prev, {text:enteredGoalText, id:Math.random().toString()}]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder=" Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal!" onPress={addInputHandler} />
      </View>
      <View style={styles.goalContainer}>
        {/* Optimizing list with flatlist */}
      <FlatList data ={courseGoals} renderItem= {itemData =>{ 
        return(
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
        );
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
