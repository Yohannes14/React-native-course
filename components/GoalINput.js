import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState(" ");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible ={props.showModal} animationType ="slide">
    <View style={styles.inputContainer}>
        <Image style ={styles.images} source ={require('../assets/images/img_fjords.jpg')}/>
      <TextInput
        style={styles.textInput}
        placeholder=" Your course goal!"
        onChangeText={goalInputHandler}
        value ={enteredGoalText}
      />
      <View style ={styles.buttonContainer}>
      <View style ={styles.button} >
      <Button title="Add Goal!" onPress={addGoalHandler} />
      </View>
      <View style ={styles.button}>
      <Button title="Cancel" onPress={props.onCancel} />

      </View>

      </View>
    </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
     flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal:8
  },
images :{
    width: 100,
    height: 100,
    margin: 20
}
});
