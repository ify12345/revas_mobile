import React, { useEffect,useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { HInput } from "@/components/HForm";
import RText from "@/components/RText";
import { useNavigation } from "@react-navigation/native";
import BackButton from "@/components/BackButton";
import RTouchableOpacity from "@/components/RTouchableOpacity";
import styles from "@/styles/Signup.style";
import { useAppDispatch } from "@/redux/store";
import { login } from "@/api/auth";
import Toast from "react-native-toast-message";
import { router } from "expo-router";







export default function SignIn(){
  const navigation: any = useNavigation();
  
  const [isChecked, setIsChecked] = useState(true);

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
    email: "",
    password: "",
});

useEffect(() => {
  if (userData.email && userData.password) {
      setDisabled(false);
  } else {
      setDisabled(true);
  }
}, [userData]);

const dispatch = useAppDispatch()
const handleSubmit = async () => {
 
  setLoading(true)
  console.log(userData);
  
  dispatch(login(userData))
  .then(() => {
    setLoading(false)
    navigation.navigate('BottomTab')
  })
  .catch(err => {
    setLoading(false)
    console.log(err)
    Toast.show({
      type: 'error',
      props: {message: err?.msg}
    })
  })
};


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
          width='100%'
            placeholder="Enter email address"
            label="Email Address"
            type={2}
            textType='email'
            onChangeText={(text: any) =>
              setUserData({
                  ...userData,
                  email: text.toLowerCase(),
              })
          }
          value={userData.email}
          />

          <HInput
            width='100%'
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
    </SafeAreaView>
  );
};

