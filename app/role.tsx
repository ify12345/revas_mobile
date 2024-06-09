import React, { useState } from "react";
import { Image, TouchableOpacity, SafeAreaView, View, Text } from "react-native";
import styles from "@/styles/Home.styles";
import RText from "@/components/RText";
import BackButton from "@/components/BackButton";
import RTouchableOpacity from "@/components/RTouchableOpacity";
import { Link, router } from "expo-router";

interface NavigationProps {
  navigation: any;
}

export default function Role(){
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      id: "1",
      text: "Buyer",
      image: require("@/assets/images/buyer.png"),
    },
    {
      id: "2",
      text: "Seller",
      image: require("@/assets/images/seller.png"),
    },
    {
      id: "3",
      text: "Buyer and Seller",
      image: require("@/assets/images/seller.png"),
    },
  ];

  const handleOptionSelect = (id: string) => {
    setSelectedOption(id);
  };

  const handleContinue = () => {
     router.push("/sign-in"); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <BackButton />
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ flexDirection: "column", gap: 35 }}>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <RText fontSize="22" fontWeight="semibold" textStyle={styles.text}>
              How would you like to use Revas?
            </RText>
            <RText fontSize="10" color="gray" textStyle={styles.text2}>
              Let us know how you want to use Revas, you can customize this
              later or make changes.
            </RText>
          </View>

          <View style={{ flexDirection: "column", gap: 10, marginVertical: 6 }}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.buttonFlex,
                  selectedOption === option.id && { backgroundColor: "#6750A4", borderWidth: 0 },
                ]}
                onPress={() => handleOptionSelect(option.id)}
              >
                <Image source={option.image} />
             
                  <Text style={[selectedOption === option.id && { color: 'white' }]}>{option.text}                    
                  </Text>

              </TouchableOpacity>
            ))}
          </View>
        </View>

        <RTouchableOpacity backgroundColor="black" onPress={handleContinue}>
          <RText color="#fff" fontSize="14" fontWeight="medium">
            Continue
          </RText>
        </RTouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


