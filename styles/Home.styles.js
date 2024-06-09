import { StyleSheet } from "react-native";
import { COLORS, SIZES, width, height } from "@/assets/constants";

const styles = StyleSheet.create({
  topBar: {
    paddingHorizontal: SIZES.medium,    
  },
  safeArea: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'space-between',
    paddingHorizontal: SIZES.large,
    gap: 4,
    width,
    height,
    gap: 25
  },
  text:{
    width: '65%',
    fontWeight: '600'
  },
  text2:{
    width: '90%',
    fontWeight: '400'
  },
  buttonFlex:{
    flexDirection: 'row',
    borderWidth:1,
    borderRadius: 8,
    gap: SIZES.small,
    paddingVertical: 20,
    paddingHorizontal:SIZES.large,
    alignItems:"center"
  },
  buttonFlex2:{
    flexDirection: 'column',
     gap:  4

  },
  inner:{
    width: '70%',
    fontSize: 14
  }

});

export default styles;
