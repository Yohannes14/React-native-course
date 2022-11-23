import { Alert, Button, View } from "react-native";
import {launchCameraAsync, PermissionStatus, useCameraPermissions} from 'expo-image-picker';

const ImagePicker = () => {
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
      console.log(image);
    }

  return (
    <View>
        <View>

        </View>
        <Button title ="Take image" onPress={takeImagehandler} />
    </View>
  )
}

export default ImagePicker;