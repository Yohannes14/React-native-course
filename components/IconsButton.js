
import { Pressable, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const IconsButton = ({icon, color, onPress}) => {
  return (
    <Pressable style ={({pressed}) => pressed && styles.pressed} 
    onPress={onPress}>
    <Ionicons name={icon} size ={24} color ={color} />
    </Pressable>
  )
}

export default IconsButton;

const styles = StyleSheet.create({
   pressed: {
    opacity: 0.7,
   }
});