import { StyleSheet, Text } from "react-native"
import Colors from "../../constants/Colors";


const Title = ({name}) => {
  return (
    <Text style ={styles.title}>{name}</Text>

  )
}

export default Title;

const styles = StyleSheet.create({
  
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      borderWidth: 2,
      borderColor : 'white',
      marginTop: 14,
      padding: 12,
  
    }
  })