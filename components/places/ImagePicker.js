import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {launchCameraAsync, PermissionStatus, useCameraPermissions} from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import OutLinedButton from "../ui/OutLinedButton";

const ImagePicker = () => {

    const [pickedImage, setPickedImage] = useState();


    const [cpInf, requestPermission] =useCameraPermissions();

    async function verifyPermission(){
        if(cpInf.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }
        if(cpInf.status === PermissionStatus.DENIED){
            Alert.alert('Insufficient Permissions!',
            'You need to grant camera permissions to use this app.'
            );
            return false ;
        }
        return true;
    }

    async function takeImagehandler(){

        const hasPersmission = await verifyPermission();
        if(!hasPersmission){
            return;
        }
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });

      setPickedImage(image.uri);
    }

  let imagePreview = <Text> No image taken yet.</Text>

  if(pickedImage){
    imagePreview =   <Image style ={styles.image} source={{uri: pickedImage}} />
  }
  return (
    <View>
        <View style ={styles.imagePreview}>{imagePreview}</View>
        <OutLinedButton icon ="camera"  onPress={takeImagehandler}>Take Image</OutLinedButton>
    </View>
  )
} 

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image :{
      width: '100%', 
      height: '100%',
    }
});