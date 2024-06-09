import { StyleSheet } from "react-native";
import { COLORS, SIZES, width, height } from "@/assets/constants";

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.medium,  
  },
  container1: {
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  started: {
    flexDirection: "column",
    gap: 4,
    marginBottom: SIZES.medium,
  },
  container: {
    flexDirection: "column",
    marginHorizontal: SIZES.medium,
    marginVertical: SIZES.xLarge,
    gap: SIZES.medium,
  },
  button: {
    marginVertical: SIZES.medium,
  },
  checkBox: {
    flexDirection: "row",
    gap: SIZES.large,
    marginVertical: SIZES.small,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  footerContainerSignIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
