import { StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../componets/PrimaryButton";

const  StartGameScreen = () => {
  return (
    <View style ={styles.inputContainer}>
        <TextInput style ={styles.textInput} maxLength ={2} />
       <PrimaryButton> Reset</PrimaryButton>
       <PrimaryButton> Confirm</PrimaryButton>
    </View>
  );
}

export default  StartGameScreen;
const styles =StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal:24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0 , height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    textInput: {
        height: 50,
        width: 60,
        fontSize: 32,
        borderBottomColor:"#ddb52f",
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },

})