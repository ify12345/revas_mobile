import { Text, TextStyle } from "react-native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

type Prop = {
  children: string;
  fontSize?: "10" | "14" | "16" | "18" | "20" | "22" | "24";
  fontWeight?: "medium" | "semibold" | "extrabold";
  color?: string;
  textStyle?: TextStyle; // Update the type of textStyle
  width?: string;
};

export default  function RText(props: Prop){
  const { fontWeight, fontSize, color, textStyle, children, width } = props;

  function getFontWeight(): TextStyle["fontWeight"] {
    switch (fontWeight) {
      case "medium":
        return "500"; // Medium font weight
      case "semibold":
        return "600"; // Semibold font weight
      case "extrabold":
        return "800"; // Semibold font weight
      default:
        return "normal"; // Default to normal font weight
    }
  }

  function getFontSize(): number {
    switch (fontSize) {
      case "10":
        return 10;
      case "14":
        return 14;
      case "16":
        return 16;
      case "18":
        return 18;
      case "20":
        return 20;
      case "22":
        return 22;
      case "24":
        return 24;
      default:
        return 12; // Default font size
    }
  }

  return (
    <Text
      style={[
        {
          fontWeight: getFontWeight(), 
          fontSize: RFValue(getFontSize()),
          color: color ? color : "#1F1F1F",
          width: width ? width : "auto",
        },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};


