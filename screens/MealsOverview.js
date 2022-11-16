import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverview = ({route, navigation}) => {
  // get from category screen
  const catId = route.params.categoryId;

  // display meals
  const displayedMeals = MEALS.filter((mealItem) =>{
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // to find title on headers

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catId).title;
  
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation])


  const renderMealItem =(itemData)=>{
    const item =itemData.item;
    const mealItemProps ={
      title: item.title,
      imgUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
      
    };

    return <MealItem {...mealItemProps}
          //  title ={itemData.item.title}
            />
  };

  return (
    <View style ={styles.container}>
      <FlatList data ={displayedMeals}
          keyExtractor ={item => item.id}
          renderItem ={renderMealItem} />

    </View>
  )
}

export default MealsOverview;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});