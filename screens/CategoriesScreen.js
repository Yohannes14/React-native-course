import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemDate) {
    return (
        <CategoryGridTitle title ={itemDate.item.title}
            color ={itemDate.item.color} />
    );

};

const CategoriesScreen = () => {
  return (
     <FlatList data ={CATEGORIES}
            keyExtractor ={item => item.id}
            renderItem ={renderCategoryItem}
     />
  )
}

export default CategoriesScreen;