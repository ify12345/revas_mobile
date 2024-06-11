import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import RText from "@/components/RText";
import styles from "@/styles/styles";
import { HInput } from "@/components/HForm";

import RTouchableOpacity from "../../components/RTouchableOpacity";
import { Country } from "@/types";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { register } from "@/api/auth";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { RegisterPayload } from "@/types/api";
import Loader from "@/components/loader";

//   import FileUpload from "../../components/FileUpload";

export default function ProfileSetup() {
  const { user } = useAppSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<{ label: string; value: string; } | undefined>(undefined);
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    // Fetch the list of countries
    fetch("https://revas-backend.onrender.com/api/locations/countries")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
  const dispatch = useAppDispatch();
  function handleSubmit({}) {
    const formData = {
      ...user,
      id: "1",
    };
    console.log("set up", formData);

    setLoading(true);
    dispatch(register(formData))
      .unwrap()
      .then(() => {
        setLoading(false);
        router.push("/verification");
      })
      .catch((err) => {
        setLoading(false);
        Toast.show({
          type: "error",
          props: { message: err?.msg },
        });
        console.log(err);
      });
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 2,
      }}
    >
      <View style={styles.topBar}>
        <BackButton />
      </View>

      <ScrollView style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.started}>
            <RText fontSize="20">Set up your account </RText>
            <RText fontSize="10" width="80%" color="gray">
              To stay connected with us, please login with your personal details
            </RText>
          </View>

          <HInput
            width="100%"
            placeholder="Enter your country"
            label="Country"
            type={2}
          />
          <HInput
            width="100%"
            placeholder="Enter factory capacity in tonnes"
            label="Factory capacity (monthly)"
            type={2}
          />
        </View>
      </ScrollView>

      <RTouchableOpacity
        style={styles.button}
        backgroundColor="black"
        // disabled={disabled}
        onPress={handleSubmit}
        // loading={loading}
      >
        <RText fontSize="14" color="white" fontWeight="semibold">
          Submit
        </RText>
      </RTouchableOpacity>

      <Loader visible={loading} />
    </SafeAreaView>
  );
}
