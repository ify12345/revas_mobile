import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useGlobalContext } from "@/context/AuthContext";
import RText from "@/components/RText";
import {
  BuildingOfficeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  DocumentIcon,
  DocumentTextIcon,
  UserCircleIcon,
} from "react-native-heroicons/solid";
import styles from "@/styles/styles";
import RTouchableOpacity from "@/components/RTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

export default function ProfileEdit() {
  const navigation = useNavigation();
  const { userInfo } = useGlobalContext();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        paddingHorizontal: 50,
      }}
    >
      <View style={styles.profileTopBar}>
        <RText fontSize="18">Profile</RText>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          display: "flex",
          flexDirection: "column",
          gap: 15,
        }}
      >
        <View style={styles.profileDetailContainer}>
          <UserCircleIcon color="gray" size={100} />
          <View style={styles.userInfo}>
            <RText fontSize="10" color="gray">
              Tap to change photo
            </RText>
          </View>
        </View>

        <View style={styles.profileDetailContainer1}>
          <View style={styles.profileContainer2}>
            <View style={styles.userInfo}>
              <RText fontSize="10" color="gray">
                Full Name
              </RText>
              <RText fontSize="18" color="black">
                {userInfo.firstname} {userInfo.lastname}
              </RText>
            </View>
          </View>
        </View>

        <View style={styles.profileDetailContainer1}>
          <View style={styles.profileContainer2}>
            <View style={styles.userInfo}>
              <RText fontSize="10" color="gray">
                Company name
              </RText>
              <RText fontSize="12" color="black">
                {userInfo.companyname}
              </RText>
            </View>
          </View>
          <ChevronRightIcon size={15} color="black" />
        </View>

        <Link href="/account/editrole">
          <View style={styles.profileDetailContainer1}>
            <View style={styles.profileContainer2}>
              <View style={styles.userInfo}>
                <RText fontSize="10" color="gray">
                  Role
                </RText>
                <RText fontSize="12" color="black">
                  {userInfo.role}
                </RText>
              </View>
            </View>
            <ChevronRightIcon size={15} color="black" />
          </View>
        </Link>

        <View style={styles.profileDetailContainer1}>
          <View style={styles.profileContainer2}>
            <View style={styles.userInfo}>
              <RText fontSize="10" color="gray">
                Company Email
              </RText>
              <RText fontSize="12" color="black">
                {userInfo.companyemail}
              </RText>
            </View>
          </View>
          <ChevronRightIcon size={15} color="black" />
        </View>

        <View style={styles.profileDetailContainer1}>
          <View style={styles.profileContainer2}>
            <View style={styles.userInfo}>
              <RText fontSize="10" color="gray">
                Phone Number
              </RText>
              <RText fontSize="12" color="black">
                {userInfo.phonenumber}
              </RText>
            </View>
          </View>
          <ChevronRightIcon size={15} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}
