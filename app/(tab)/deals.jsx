import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "@/styles/styles";

export default function Deals() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const options = ["All Listing", "Ongoing", "Completed"];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 5,
        marginHorizontal: 20
      }}
    >
      <View style={styles.Top}>
        <Text style={{ fontSize: 25, fontWeight: "600" }}>Deals</Text>
      </View>

      <View style={localStyles.switchContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentSlide(index)}
            style={[
              localStyles.optionButton,
              currentSlide === index && localStyles.activeOptionButton,
            ]}
          >
            <Text
              style={[
                localStyles.optionText,
                currentSlide === index && localStyles.activeOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  switchContainer: {
    flexDirection: "row",
    justifyContent: "justify-between",
    marginVertical: 10,
    backgroundColor: "#F6F6F6",
    padding:8,
    width:"100%"
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
    alignItems:"center",
    width:"33.3%"
  },
  activeOptionButton: {
    backgroundColor: "black",
  },
  optionText: {
    color: "black",
    fontSize: 16,
  },
  activeOptionText: {
    color: "white",
  },
});
