import { Alert, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";
import OutLinedButton from "../ui/OutLinedButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

const LocationPicker = () => {
  //permission
  const [lpInfo, requestPermission] = useForegroundPermissions();

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
    console.log(location);
  }

  const pickonMaphandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
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
  },
  action: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
