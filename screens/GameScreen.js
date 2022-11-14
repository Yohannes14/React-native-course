import {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import NumberContainer from '../componets/game/NumberContainer';
import PrimaryButton from '../componets/ui/PrimaryButton';
import Title from '../componets/ui/Title';

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
  
     <View>
      <View>
      <Text>Higher or lower?</Text>
      
      <PrimaryButton 
        onPress={nextGuessHandler.bind(this, 'lower')}
        name  = '-' />
        <PrimaryButton 
        onPress={nextGuessHandler.bind(this,'greater')}
         name = '+' />
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
})