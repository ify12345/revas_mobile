import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ChevronLeftIcon,
} from "react-native-heroicons/solid";
import React, { useState } from "react";
import { HDropdown } from "@/components/HForm";
import RText from "@/components/RText";
import { router } from "expo-router";
import RTouchableOpacity from "@/components/RTouchableOpacity";

const EditRole = () => {
  const roleOptions = ["buyer", "seller", "buyer and seller"];
  const [formData, setFormData] = useState({
    role: "",
  });

  const handleSubmit = async () => {};
  return (
    <SafeAreaView
    style={{
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
    }}>
      <View
         style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
          gap:50,
          paddingHorizontal: 10
        }}>

    

       <TouchableOpacity  onPress={() => router.back()} style={{display:"flex", gap:4, flexDirection:"row"}}>
        <ChevronLeftIcon color={"black"}/>
        <RText fontSize="18">Update Role</RText>
      </TouchableOpacity>

      <View style={{display:"flex", gap:10, flexDirection:"column"}}>
      <HDropdown
        placeholder="Role"
        label="Enter your role"
        options={roleOptions}
        onSelect={(roleOptions) =>
          setFormData({
            ...formData,
            role: roleOptions,
          })
        }
        selectedOption={formData.role}
        width="100%"
      />
      <RTouchableOpacity backgroundColor="black" onPress={handleSubmit}>
        <RText color="white" fontSize="10" fontWeight="medium">
          Update
        </RText>
      </RTouchableOpacity>
      </View>
      </View>

    </SafeAreaView>
  );
};

export default EditRole;

const styles = StyleSheet.create({});
