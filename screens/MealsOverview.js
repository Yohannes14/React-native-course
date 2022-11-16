import { StyleSheet, Text, View } from "react-native"

const MealsOverview = () => {
  return (
    <View style ={styles.container}>
        <Text> Meals Over</Text>

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