import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#121212",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
  applyBtn: {
      backgroundColor:'#66347F',
      height:50,
      width:390,
      textAlign:"center",
      alignItems:'center',
      padding:15,
      alignSelf:'center',
     borderWidth:0,
     borderRadius:20,
     marginBottom:10
    
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  },
});

export default styles;
