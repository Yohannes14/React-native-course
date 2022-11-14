import {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NumberContainer from '../componets/game/NumberContainer';
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

const GameScreen = ({userNumber}) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuesss, setCurrentGuess] = useState(initialGuess);

 
  return (
    <View style ={styles.screen}>
     <Title  name ="Oppennet's  Guess"/>
      <NumberContainer name ={currentGuesss} />
  
     <View>
      <Text>Higher or lower?</Text>
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