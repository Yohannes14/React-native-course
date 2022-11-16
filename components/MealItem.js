import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const MealItem = (
      { title,
        imgUrl,
        duration,
        complexity,
        affordability  
    }) => {
  return (
    <View style ={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}}
       style ={({pressed}) => (pressed ? styles.buttonPressed : null)}
      >
        <View style ={styles.innerContainer}>
        <View> 
          <Image style ={styles.image}
          source={{ uri: imgUrl }} />
          <Text style ={styles.title}>{title}</Text>
        </View>
        <View style ={styles.details}>
            <Text style ={styles.detailsItem}> {duration}m</Text>
            <Text style ={styles.detailsItem}> {complexity.toUpperCase()}</Text>
            <Text style ={styles.detailsItem}> {affordability.toUpperCase()}</Text>
        </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {   
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden': 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black', // for ios
        shadowOpacity: 0.35, // for ios
        shadowOffset: {width: 0, height: 2}, // for ios
        shadowRadius: 16,  //ios

    },
    innerContainer : {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed:{
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailsItem :{
        marginHorizontal: 4,
        fontSize: 12,
    }
});
