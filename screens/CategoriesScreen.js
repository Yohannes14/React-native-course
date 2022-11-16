import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({navigation}) => {

    function renderCategoryItem(itemDate) {

        const pressHandler= () =>{
            navigation.navigate("MealsOverview");
    
        }
        return (
            <CategoryGridTitle title ={itemDate.item.title}
                color ={itemDate.item.color}
                onPress ={pressHandler} />
        );
    
    };

  return (
     <FlatList data ={CATEGORIES}
            keyExtractor ={item => item.id}
            renderItem ={renderCategoryItem}
            numColumns ={2}
     />
  )
}

export default CategoriesScreen;
