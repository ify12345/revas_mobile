import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RText from "@/components/RText";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import styles from "@/styles/styles";
import { useNavigation } from "@react-navigation/native";
import { HDropdown, HInput } from "@/components/HForm";

import RTouchableOpacity from "@/components/RTouchableOpacity";

const LiveOrder = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["PET/PETE", "HDPE", "LDPE", "PP"];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const goback = () => {
    navigation.navigate("BottomTabNavigator");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 5,
      }}
    >
      <TouchableOpacity onPress={goback} style={styles.topBar}>
        <ChevronLeftIcon color="black" size={18} />
        <Text style={{ fontSize: 25, fontWeight: 600 }}>Place Live Order</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <RText fontSize="10">Type of Plastic</RText>
        <HDropdown
          label="Role"
          options={options}
          onSelect={(option) =>
            setFormData({
              ...formData,
              role: option,
            })
          }
          selectedOption={formData.role}
          width="100%"
        />

        <View style={localStyles.rowContainer}>
          <HInput
            placeholder="Volume in Tonnes"
            label="Volume(in Tonnes)"
            type={2}
            width={"50%"}
          />
          <View style={localStyles.durationContainer}>
            <RText fontSize="10">Duration</RText>
            <RDropDown
              options={options}
              placeholder="Select an option"
              label="label"
              onSelect={handleSelect}
              width={"100%"}
            />
          </View>
        </View>
        <HInput
          placeholder="$4000"
          label="Price(In USD)"
          type={2}
          width="100%"
        />
        <View>
          <RText fontSize="10">Destination</RText>
          <RDropDown
            options={options}
            placeholder="Destination"
            label="Destination"
            onSelect={handleSelect}
            width={"100%"}
          />
        </View>

        <HInput
          placeholder="Payment Terms"
          label="Enter payment terms"
          type={2}
          width={"100%"}
        />

        <HInput
          placeholder="Shipping Terms"
          label="Enter Shipping terms"
          type={2}
          width={"100%"}
        />
        <RTouchableOpacity backgroundColor="black">
          <RText color="white">Proceed</RText>
        </RTouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    gap: 5,
    width: "100%",
  },
  durationContainer: {
    flex: 1,
    marginLeft: 5,
    flexDirection: "column",
    gap: 5,
    justifyContent: "space-between",
  },
});

export default LiveOrder;
