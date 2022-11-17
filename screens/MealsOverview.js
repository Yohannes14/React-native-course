import { useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";
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

 return <MealsList items ={displayedMeals}/>
  
}

export default MealsOverview;
