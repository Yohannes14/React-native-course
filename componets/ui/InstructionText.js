import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const InstructionText = ({name, style}) => {
  return (
    <Text style ={[styles.instructionText, style]}>{name}</Text>
  )
}

export default InstructionText;

const styles =StyleSheet.create({
    instructionText: { 
        //fontFamily: 'bold',
        color: Colors.accent500,
        fontSize: 24,
     }
})