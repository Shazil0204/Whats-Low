import {
  Button,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
interface BackSideComponent {
  onPressFlip: () => void;
  url: string;
}

const CardBack: React.FC<BackSideComponent> = ({ onPressFlip, url }) => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        padding: 20,
      }}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={{
          uri: url,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 0,
          borderBottomRightRadius: 25,
          overflow: "hidden",
        }}
      >
        <TouchableOpacity
          onPress={onPressFlip}
          style={{
            padding: 5,
          }}
        >
          <Ionicons name="sync-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardBack;

const styles = StyleSheet.create({});
