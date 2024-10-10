import { Ionicons } from "@expo/vector-icons";

interface TabIconProps {
  isFocused: boolean;
  routeName: string;
}

const TabIcon: React.FC<TabIconProps> = ({ isFocused, routeName }) => {
  let iconName: React.ComponentProps<typeof Ionicons>["name"];

  switch (routeName) {
    case "index":
      iconName = isFocused ? "home" : "home-outline";
      break;
    case "gallery":
      iconName = isFocused ? "images" : "images-outline";
      break;
    case "create":
      iconName = isFocused ? "add-circle" : "add-circle-outline";
      break;
    case "modify":
      iconName = isFocused ? "construct" : "construct-outline";
      break;
    case "profile":
      iconName = isFocused ? "person" : "person-outline";
      break;
    case "team":
      iconName = isFocused ? "people" : "people-outline";
      break;
    case "setting":
      iconName = isFocused ? "settings" : "settings-outline";
      break;

    default:
      iconName = "home";
  }

  return (
    <Ionicons
      name={iconName}
      size={isFocused ? 40 : 24}
      color={isFocused ? "#001F3F" : "white"}
    />
  );
};

export default TabIcon;
