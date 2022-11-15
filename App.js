import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] =useState(0);

  const [gameIsOver, setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };
  function startNewGameHandler(){
    setUserNumber(null);
   setGuessRounds(0);

  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen 
      
      userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNUmber={userNumber}
           roundsNumber ={guessRounds}
           onStartNewGame ={startNewGameHandler} />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* repecting device screen restrictions wuth safeAreaView */}
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    //backgroundColor: '#ddb52f',
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
