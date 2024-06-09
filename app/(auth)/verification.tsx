import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import RText from "@/components/RText";
import BackButton from "@/components/BackButton";
import styles from "@/styles/styles";
import OtpInput from "@/components/OtpInput";
import RTouchableOpacity from "@/components/RTouchableOpacity";



export default function Verification({navigation}:any){
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  // const email = route.params?.email || "";
  const mergedOtp = otp.join("");
  const inputs: any = [];

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // value && index < newOtp.length - 1 && inputs[index + 1].focus();
  };

  const handleContinue = async () => {
       
      navigation.navigate("SignIn");

  };

  const handleContinueWithoutVerification = () => {
    
    navigation.push("SignIn");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topBar}>
        <BackButton />
        <RText>Back</RText>
      </View>

      <View style={styles.container1}>
        <View style={styles.container}>
          <View style={styles.started}>
            <RText fontSize="20">Account Verification </RText>
            <RText fontSize="10" width="80%" color="gray">
              Enter the 6-digit code sent to your email
            </RText>
          </View>
          <OtpInput otp={otp} handleChange={handleChange} inputs={inputs} />
       
          <RTouchableOpacity
            backgroundColor="white"
            onPress={handleContinue}
            disabled={mergedOtp.length < 6}
          >
            <RText fontWeight="semibold">
              Continue
            </RText>
          </RTouchableOpacity>

         

          <RTouchableOpacity backgroundColor="black">
            <RText color="white"  fontWeight="semibold">
              Resend code
            </RText>
          </RTouchableOpacity>
          
          <RTouchableOpacity
           
           onPress={handleContinueWithoutVerification}
         >
           <RText color="black"  fontWeight="semibold">
             Continue without verifying
           </RText>
         </RTouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


