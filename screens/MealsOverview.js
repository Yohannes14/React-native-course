import { StyleSheet, Text, View } from "react-native"

const MealsOverview = ({route}) => {
  // get from category screen
  const catId = route.params.categoryId;
  return (
    <View style ={styles.container}>
        <Text> Meals Over--{catId}</Text>

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