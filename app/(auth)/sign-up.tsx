import { useAppDispatch } from "@/redux/store";
import { View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Toast from "react-native-toast-message";
import { RootStackScreenProps } from "@/types/navigation";
import styles from "@/styles/Signup.style";
import BackButton from "../../components/BackButton";
import RText from "../../components/RText";
import { HCheckbox, HDropdown, HInput } from "../../components/HForm";
import RTouchableOpacity from "../../components/RTouchableOpacity";
import { router } from "expo-router";
import Loader from "@/components/loader";
import { SIGNUPFROMDATA } from "@/types/page";
import { AuthContext } from "@/context/AuthContext";

export default function SignUp({ navigation }: RootStackScreenProps<"SignupOne">) {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [countries, setCountries] = useState([]);
  const [countryOptions, setCountryOptions] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const handleToggleCheckbox = (val: Boolean) => {
    setIsChecked(!val);
  };

  const [formData, setFormData] = useState<SIGNUPFROMDATA | any>({
    firstname: "",
    lastname: "",
    companyemail: "",
    companyname: "",
    password: "",
    phonenumber: "",
    role: "",
    countrycode: ""
  });

  useEffect(() => {
    setDisabled(
      !(
        formData.firstname &&
        formData.lastname &&
        formData.companyemail &&
        formData.companyname &&
        formData.role &&
        formData.password &&
        formData.phonenumber &&
        isChecked &&
        formData.countrycode
      )
    );
  }, [formData, isChecked]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => {
        const formattedData = data.map((country: any) => ({
          label: `${country.name} (${country.callingCodes[0]})`,
          value: country.callingCodes[0],
          flag: country.flags.png,
        }));
        setCountries(formattedData);
        setCountryOptions(formattedData.map((country: any) => country.label));
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const { isLoading, register } = useContext(AuthContext);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await register(formData);
    if (response.success) {
      router.push("/verification");
    } else {
      Toast.show({
        type: "error",
        text1: "Registration error",
        text2: response.error.message,
      });
    }
    setLoading(false);
  };

  const roleOptions = ['buyer', 'seller', 'buyer and seller'];

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <BackButton />
        </View>

        <View style={styles.container1}>
          <View style={styles.container}>
            <View style={styles.started}>
              <RText>Sign up for free</RText>
              <RText fontSize="20">Get Started</RText>
            </View>

            <HInput
              label="First name"
              type={2}
              width="100%"
              placeholder="Enter full name"
              onChangeText={(text: any) => setFormData({ ...formData, firstname: text })}
              value={formData.firstname}
            />
            <HInput
              label="Last name"
              type={2}
              width="100%"
              placeholder="Enter last name"
              onChangeText={(text: any) => setFormData({ ...formData, lastname: text })}
              value={formData.lastname}
            />
            <HDropdown
              placeholder="Role"
              label="Enter your role"
              options={roleOptions}
              onSelect={(roleOptions) => setFormData({ ...formData, role: roleOptions })}
              selectedOption={formData.role}
              width="100%"
            />
            <HInput
              width="100%"
              label="Company Name"
              type={2}
              placeholder="Enter Company name"
              onChangeText={(text: any) => setFormData({ ...formData, companyname: text })}
              value={formData.companyname}
            />
            <HInput
              label="Company Email"
              width="100%"
              type={2}
              placeholder="Enter company email"
              onChangeText={(text: any) => setFormData({ ...formData, companyemail: text.toLowerCase() })}
              value={formData.companyemail}
            />

            <View style={styles.phoneInputContainer}>
              <HDropdown
                placeholder="Country Code"
                label="Country Code"
                options={countryOptions}
                onSelect={(label: string) => {
                  const country = countries.find((country: any) => country.label === label);
                  setSelectedCountry(country);
                  setFormData({ ...formData, countrycode: country.value, phonenumber: `+${country.value}` });
                }}
                selectedOption={formData.countrycode}
                width="30%"
              />
              {selectedCountry && <Image source={{ uri: selectedCountry.flag }} style={styles.countryFlag} />}
              <HInput
                width="65%"
                label="Phone number"
                type={2}
                placeholder="Enter your Phone number"
                onChangeText={(text: any) => setFormData({ ...formData, phonenumber: `+${formData.countrycode}${text.replace(/^\+\d+/, '')}` })}
                value={formData.phonenumber}
              />
            </View>

            <HInput
              label="Password"
              width="100%"
              type={2}
              textType="password"
              placeholder="Enter your password"
              onChangeText={(text: any) => setFormData({ ...formData, password: text })}
              value={formData.password}
            />

            <View style={styles.checkBox}>
              <HCheckbox checked={isChecked} setChecked={handleToggleCheckbox} />
              <RText width="80%" fontSize="10" fontWeight="medium" color="#777777">
                I have read and accept the company's Terms & Conditions and Privacy Policy.
              </RText>
            </View>

            <RTouchableOpacity
              backgroundColor="black"
              disabled={disabled}
              onPress={handleSubmit}
              loading={isLoading}
              style={styles.button}
            >
              <RText color="white">Create an account</RText>
            </RTouchableOpacity>
          </View>

          <View style={styles.footerContainer}>
            <RText>Already have an account?</RText>
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <RText color="black" fontSize="10" fontWeight="medium">
                Sign In
              </RText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Loader visible={isLoading} />
    </SafeAreaView>
  );
}

