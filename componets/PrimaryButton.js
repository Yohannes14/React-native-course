import { Button, Pressable, StyleSheet, Text, View } from "react-native"

const PrimaryButton = ({name, onPress}) => {
   
  return (
    <View style ={styles.buttonOuterContainer}>
    <Pressable
    style ={({pressed}) => 
    pressed ? [styles.buttonInnerContainer, styles.pressed]:
     styles.buttonInnerContainer} 
    onPress={onPress}
    android_ripple ={{color: '#644202'}}>
        <Text style ={styles.buttonText}>{name}</Text>
  
    </Pressable>
    </View>
   
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
     buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',

     },
     buttonInnerContainer: {
         backgroundColor: '#72063c',
         paddingVertical: 8,
         paddingHorizontal: 16,
         elevation:2, // only on android
     },
     buttonText :{
        color: 'white',
        textAlign: "center",
     },
     pressed :{
        opacity: 0.75,
        
     }
});