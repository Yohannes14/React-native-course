import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import OutLinedButton from "../ui/OutLinedButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";
import { getMapPreview } from "../../utils/location";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";

const LocationPicker = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [pickedLocation, setPickedLocation] = useState({});
    const isFocused = useIsFocused();
  //permission
  const [lpInfo, requestPermission] = useForegroundPermissions();


  useEffect(() => {
    if(isFocused && route.params) {
    const mapPickedLocation = {
        lat: route.params.pickedLat,
         lng: route.params.pickedLng
        };
        setPickedLocation(mapPickedLocation)
    }
  
  }, [route, isFocused])

  async function verifyPermissions() {
    if (lpInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (lpInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
        lat:location.coords.latitude,
        lng:location.coords.longitude
    });
  }

  const pickonMaphandler = () => {
    navigation.navigate("Map");
  };

  let locationPreview =<Text>No location picked yet.</Text>
  if(locationPreview){
    locationPreview =(
    <Image style ={styles.image}  sorce ={{
        uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)
    }}/>
    );

  }

  return (
    <View>
      <View style={styles.mapPreview}>
        {locationPreview}
      </View>
      <View style={styles.action}>
        <OutLinedButton onPress={getLocationHandler} icon="location">
          Locate User
        </OutLinedButton>
        <OutLinedButton onPress={pickonMaphandler} icon="map">
          Pick on Map
        </OutLinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: 'hidden'
  },
  action: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: '100%',
    height: '100%'
  }
});
