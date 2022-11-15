import {useEffect, useState} from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import NumberContainer from '../componets/game/NumberContainer';
import InstructionText from '../componets/ui/InstructionText';
import PrimaryButton from '../componets/ui/PrimaryButton';
import Title from '../componets/ui/Title';
import Colors from '../constants/Colors';
 
  // use to generate random number 
  const generateRandomBetween =(min, max, exclude) =>{
    const rndNum = Math.floor(Math.random() * (max-min)) + min;

    if(rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    }else {
      return rndNum;
    }
  }

const GameScreen = ({userNumber, onGameOver}) => {

  let minBoundary = 1;
  let maxBoundary = 100;
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuesss, setCurrentGuess] = useState(initialGuess);
   
  // the check the game is over or not
  useEffect(() => {
       if(currentGuesss === userNumber) {
        onGameOver();

       }
  }, [currentGuesss, userNumber, onGameOver]);

  const nextGuessHandler =(direction) =>{
     // derection => 'lower', 'greater
     if(direction === 'lower' && currentGuesss < userNumber ||
     direction === 'greater' && currentGuesss > userNumber){
      Alert.alert("Don't lie!", "You know that this is wrong...",
      [{text:'Sorry!', style: 'cancel'}]);
      return;
     }

     if(direction === 'lower') {
      maxBoundary = currentGuesss;
     }else{
      minBoundary = currentGuesss + 1;
     }
    
     const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuesss);
     setCurrentGuess(newRndNumber);

  }
 
  return (
    <View style ={styles.screen}>
     <Title  name ="Oppennet's  Guess"/>
      <NumberContainer name ={currentGuesss} />
      <View style ={styles.inputContainer}>
      <InstructionText 
       style={styles.instructionText}
      name ="Higher or lower?" />
      <View style ={styles.buttonsContainer}>
        <View style ={styles.buttonContainer}>
      <PrimaryButton 
        onPress={nextGuessHandler.bind(this, 'lower')}
        name  = {<Ionicons  name ="md-remove" size ={24} color ="white" />}
        />
        </View>
        <View  style ={styles.buttonContainer}>
        <PrimaryButton 
        onPress={nextGuessHandler.bind(this,'greater')}
         name = {<Ionicons  name ="md-add" size ={24} color ="white" />}
         />
         </View>
      </View>
     </View>
     {/* <View>LOG ROUNDS</View> */}
    </View>
   
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen : {
    flex: 1,
    padding: 12,
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
instructionText: {
 marginBottom: 12,
},
buttonsContainer :{
  flexDirection: 'row',
},
buttonContainer:{
  flex: 1,
}
})