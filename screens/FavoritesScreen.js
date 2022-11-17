
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/mealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/FavoritesContext";
const FavoritesScreen = () => {
  const favoriteContext = useContext(FavoritesContext);

  const  favoriteMealsId = MEALS.filter(meal => favoriteContext.ids.includes(meal.id));

   if(favoriteMealsId.length === 0) {
    return (
      <View style ={styles.rootContainer}>
        <Text style ={styles.text}> You have no favorite meals yet.</Text>
      </View>
    );

   }
   return (
    <MealsList items ={favoriteMealsId} />
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  }

});