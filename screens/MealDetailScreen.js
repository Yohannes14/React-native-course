import {  useLayoutEffect } from "react";
import {  Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconsButton from "../components/IconsButton";
import List from "../components/mealDetail/List";
import Subtitle from "../components/mealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/Favorite";
// import { FavoritesContext } from "../store/context/FavoritesContext";

const MealDetailScreen = ({ route, navigation }) => {
  // this for contex api
  // const favoriteContext = useContext(FavoritesContext);
   
  // use redux toolkit
   const favoriteMealsId = useSelector(state => state.favoritMeals.ids);
   const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  
    
  
  // to find favorite
   //use context api
  // const mealIsFavorite = favoriteContext.ids.includes(mealId);

  const mealIsFavorite = favoriteMealsId.includes(mealId);

  // add button on headers 
   function changeFavoriteStatusHandler(){
    if(mealIsFavorite) {
      // context api 
      // favoriteContext.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    }else {
      // context api
      // favoriteContext.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
   }
  useLayoutEffect(() => {
    navigation.setOptions({
     headerRight: () =>{
        return <IconsButton 
        onPress={changeFavoriteStatusHandler}
        icon ={mealIsFavorite ? 'star': 'star-outline'}
         color ="white"/>
        // <Button title ="Tap me!" onPress={changeFavoriteStatusHandler} />
     }
    });

    }, [navigation, changeFavoriteStatusHandler]);
 
  
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
