
import { View, Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';

const NumberContainer = ({name}) => {
  return (
   <View style ={styles.container}>
    <Text style ={styles.numberText}>{name}</Text>
   </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container : {
        borderWidth: 4,
        borderColor:Colors.accent500,
        padding:24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
       // fontFamily: 'bold',
        color: Colors.accent500,
        fontSize:36,
       // fontWeight: 'bold',


    },
})