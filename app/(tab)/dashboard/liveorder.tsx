import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RText from "@/components/RText";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import styles from "@/styles/styles";
import { HDropdown, HInput } from "@/components/HForm";
import RTouchableOpacity from "@/components/RTouchableOpacity";
import { router } from "expo-router";

const LiveOrder = () => {
  const [formData, setFormData] = useState({
    plastic: "",
    volume: "",
    duration: "",
    price: "",
    destination: "",
    paymentTerms: "",
    shippingTerms: "",
  });
  const productsOptions = ["PET/PETE", "HDPE", "LDPE", "PP"];
  const volumeOptions = ["10,000", "20,000", "50,000"];
  const durationOptions = ["2days", "1hour"];
  const destinationOptions = ["Port", "Concierge"];
  const shippingTermsOptions = ["One-off", "frequently"];

  const goback = () => {
    router.back();
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 5,
      }}
    >
      <View style={styles.Top}>
        <TouchableOpacity onPress={goback} style={styles.topBar}>
          <ChevronLeftIcon color="black" size={18} />
          <Text style={{ fontSize: 25, fontWeight: 600 }}>Place Live Order</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.formContainer}>
          <HDropdown
            placeholder="Type of Plastic"
            label={"Enter Type of Plastic"}
            options={productsOptions}
            onSelect={(productsOptions) =>
              setFormData({
                ...formData,
                plastic: productsOptions,
              })
            }
            selectedOption={formData.plastic}
            width="100%"
          />

          <View style={localStyles.rowContainer}>
            <HDropdown
              placeholder="Volume in Tonnes"
              label="Volumes"
              width={"50%"}
              options={volumeOptions}
              onSelect={(volumeOptions) =>
                setFormData({
                  ...formData,
                  volume: volumeOptions,
                })
              }
              selectedOption={formData.volume}
            />
            <View style={localStyles.durationContainer}>
              <HDropdown
                placeholder="Duration"
                label="Duration"
                options={durationOptions}
                onSelect={(durationOptions) =>
                  setFormData({
                    ...formData,
                    duration: durationOptions,
                  })
                }
                selectedOption={formData.duration}
                width={"50%"}
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
            <HDropdown
              placeholder="Destination"
              label="Enter the destination"
              width={"100%"}
              options={destinationOptions}
              onSelect={(destinationOptions) =>
                setFormData({
                  ...formData,
                  destination: destinationOptions,
                })
              }
              selectedOption={formData.destination}
            />
          </View>

          <HInput
            placeholder="Payment Terms"
            label="Enter payment terms"
            type={2}
            width={"100%"}
          />

          <HDropdown
            placeholder="Shipping Terms"
            label="Enter Shipping terms"
            options={shippingTermsOptions}
            onSelect={(shippingTermsOptions) =>
              setFormData({
                ...formData,
                shippingTerms: shippingTermsOptions,
              })
            }
            selectedOption={formData.shippingTerms}
            width={"100%"}
          />
          <RTouchableOpacity backgroundColor="black">
            <RText color="white">Proceed</RText>
          </RTouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    gap: 10,
    display: "flex",
    width: "100%",
  },
  durationContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
  },
});

export default LiveOrder;
