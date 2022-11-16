import { useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import List from "../components/mealDetail/List";
import Subtitle from "../components/mealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  
  // add button on headers
   function headerButtonPressHandler(){
    console.log('Presss')
   }
  useLayoutEffect(() => {
    navigation.setOptions({
     headerRight: () =>{
        return <Button title ="Tap me!" onPress={headerButtonPressHandler} />
     }
    });

    }, [navigation, headerButtonPressHandler]);
 
  
  return (
    <ScrollView style ={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailsText}
      />
      <View style ={styles.listOutContainer}>
      <View style ={styles.listContainer}>
        <Subtitle name="Ingredients" />
        <List data={selectedMeal.ingredients} />

        <Subtitle name=" Steps" />
        <List data={selectedMeal.steps} />
      </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  detailsText: {
    color: "black",
  },
  listContainer : {
    maxWidth: '80%',
  },
  listOutContainer: {
    alignItems: 'center',
  }
});
