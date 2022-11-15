import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native"
import InstructionText from "../componets/ui/InstructionText";
import PrimaryButton from "../componets/ui/PrimaryButton";
import Title from "../componets/ui/Title";
import Colors from "../constants/Colors";

const  StartGameScreen = ({onPickedNumber}) => {

    const [enteredNumber, setEnteredNumber] =useState('');

    const numberInputHandler =(enteredText) =>{
        setEnteredNumber(enteredText)
    };

  const resetInputHandler =() =>{
    setEnteredNumber('');
  }
  const confirmInputHandler =() =>{
    const chosenNumber = parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
        //show alert..
        Alert.alert('Invalid number', 
         'Number has to be a number between 1 and 99',
         [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
         );
         return;
    }  
    onPickedNumber(chosenNumber);
  };

  return (
    <View style ={styles.rootContainer}>
        <Title name ='Guess My Number'></Title>
    <View style ={styles.inputContainer}>
    <InstructionText name ='Enter Number'/>
        <TextInput style ={styles.textInput} 
        maxLength ={2} 
        keyboardType ="number-pad"
        autoCapitalize="none"
        autoCorrect ={false}
        onChangeText ={numberInputHandler}
        value ={enteredNumber}
        />
        <View style ={styles.buttonsContainer}>
        <View style ={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}
                       name ='Confirm' />
        </View>
        <View style ={styles.buttonContainer}>
        <PrimaryButton
          onPress={resetInputHandler}
         name ='Reset'/>
        </View>
        </View>
    </View>
    </View>
  );
}

export default  StartGameScreen;

const styles =StyleSheet.create({
   rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
   },
   inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal:24,
    padding: 16,
    backgroundColor: Colors.primary800,
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
        borderBottomColor:Colors.accent500,
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer :{
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1,
    }

})