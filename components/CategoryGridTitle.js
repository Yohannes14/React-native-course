import { Platform, Pressable, StyleSheet, Text, View} from "react-native";

const CategoryGridTitle = ({ title, color }) => {
  return (
    <View style ={styles.gridItem}>
      <Pressable android_ripple={{color: '#ccc'}}
      style ={({pressed}) =>[styles.button, pressed ? styles.buttonPressed : null, ]}>
        <View style ={[styles.innerContainer, {backgroundColor: color}]}> 
          <Text style ={styles.title}> {title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4, // for android
        shadowColor: 'black', // for ios
        shadowOpacity: 0.25, // for ios
        shadowOffset: {width: 0, height: 2}, // for ios
        shadowRadius: 8,  //ios
        overflow: Platform.OS ==='android' ? 'hidden': 'visible',

    },
    button: {
        flex: 1,
    },
    buttonPressed:{
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,

    }

})
