import { Image, TouchableOpacity,View } from "react-native";
import { Link } from "expo-router";
import styles from "./screenheader.style";
import { icons } from "../../../constants";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <View style={{flexDirection:'row'}}> 
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
     
    </TouchableOpacity>

    </View>
  );
};

export default ScreenHeaderBtn;