import { Button, Pressable, StyleSheet, Text, View } from "react-native"

const PrimaryButton = (props) => {
    const pressHandler =()=>{
        console.log('Pressed!')
    }
  return (
    <View style ={styles.buttonOuterContainer}>
    <Pressable
    style ={({pressed}) => 
    pressed ? [styles.buttonInnerContainer, styles.pressed]:
     styles.buttonInnerContainer} 
    onPress={pressHandler}
    android_ripple ={{color: '#644202'}}>
        <Text style ={styles.buttonText}>{props.name}</Text>
  
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