import { StyleSheet } from "react-native";
import {
  COLORS,
  SIZES,
  SHADOWS,
  width,
  height,
} from "@/assets/constants/index";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    maxWidth: 270,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    maxWidth: 270,
    textAlign: "center",
    lineHeight: 20,
  },
  bars: {
    paddingVertical: SIZES.large,
  },
  indicator: {
    height: 2,
    width: "30%",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  //   btnContainer: {
  //     paddingVertical: SIZES.large
  //   },
  imgContainer: {
    alignItems: "center",
    width,
    height: "100%",
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    gap: SIZES.large,
  },
  container1: {
    width,
    alignItems: "center",
  },
  img: {
    width: 375,
  },
  generalContainer: {
    height,
    flex: 1,
  },
  button: {
    backgroundColor: "black",
    padding: 18,
    width:"90%",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  links:{
    width: "90%",
    backgroundColor:"black",
    padding: 18,
    borderRadius: 4,
    display:"flex",
    alignItems:"center",
    alignContent:"center",
    justifyContent: "center",
    shadowColor: "#f0f0f0",
    shadowOpacity: 5,
    opacity: 1,
  },
  textCenter:{
    textAlign:"center"
  }
});

export default styles;
