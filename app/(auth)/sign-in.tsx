import React, { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { HInput } from "@/components/HForm";
import RText from "@/components/RText";
import { useNavigation } from "@react-navigation/native";
import BackButton from "@/components/BackButton";
import RTouchableOpacity from "@/components/RTouchableOpacity";
import styles from "@/styles/Signup.style";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { login } from "@/api/auth";
import Toast from "react-native-toast-message";
import { router } from "expo-router";
import Loader from "@/components/loader";
import { LoginPayload } from "@/types/api";

export default function SignIn() {
  const [isChecked, setIsChecked] = useState(true);
  const { user, isAuthenticated, isEmailVerified } = useAppSelector((state) => state.auth);
  const [inputDisabled, setInputDisabled] = useState(false);

  const setCheckboxVal = (val: Boolean) => {
    setIsChecked(!val);
  };

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [userData, setUserData] = React.useState({
    companyemail: "",
    password: "",
  });

  useEffect(() => {
    if (userData.companyemail && userData.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userData]);

  const dispatch = useAppDispatch();

  function handleSubmit({ }) {
    console.log("login details:",userData);
    
    setLoading(true)
    dispatch(login(userData))
    .unwrap()
    .then(() => {
      setLoading(false)
      router.push("/dashboard")
    })
    .catch((err) => {
      setLoading(false)
      Toast.show({
        type: 'error',
        props: {message: err?.msg}
      })
      console.log(err);
      
    })
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.topBar}>
        <BackButton />
      </View>

      <View style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.started}>
            <RText fontSize="20">Welcome </RText>
            <RText fontSize="10" width="80%" color="gray">
              To stay connected with us, please login with your personal details
            </RText>
          </View>

          <HInput
            width="100%"
            placeholder="Enter companyemail address"
            label="Email Address"
            type={2}
            textType="companyemail"
            onChangeText={(text: any) =>
              setUserData({
                ...userData,
                companyemail: text.toLowerCase(),
              })
            }
            value={userData.companyemail}
          />

          <HInput
            width="100%"
            placeholder="Enter password"
            label="Password"
            type={2}
            textType="password"
            onChangeText={(text: any) =>
              setUserData({
                ...userData,
                password: text,
              })
            }
            value={userData.password}
          />

          <TouchableOpacity
            style={{ justifyContent: "flex-end", flexDirection: "row" }}
            onPress={() => navigation.navigate("ForgotPasswordScreen1")}
          >
            <RText color="gray" fontSize="10" fontWeight="medium">
              Forgot password?
            </RText>
          </TouchableOpacity>

          <RTouchableOpacity
            style={styles.button}
            backgroundColor="black"
            disabled={disabled}
            onPress={handleSubmit}
            loading={loading}
          >
            <RText fontSize="14" color="white" fontWeight="semibold">
              Sign in
            </RText>
          </RTouchableOpacity>

          <View style={styles.footerContainerSignIn}>
            <RText>Dont have an account?</RText>
            <TouchableOpacity onPress={() => router.push("/sign-up")}>
              <RText color="black" fontSize="10">
                Sign Up
              </RText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
      <Loader visible={loading} />
    </SafeAreaView>
  );
}
