import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  BellIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import styles from "@/styles/styles";
import RText from "@/components/RText";
import RTouchableOpacity from "@/components/RTouchableOpacity";
import CloseSvg from "@/assets/images/CloseSvg";
import { useAppSelector } from "@/redux/store";
import { AuthContext, useGlobalContext } from "@/context/AuthContext";
import { Link, router } from "expo-router";

export default function DashBoard({ navigation }: any) {
  const [greeting, setGreeting] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { userInfo } = useGlobalContext();

  console.log(userInfo.role);
  const handleListing = () => {
    setModalVisible(false);
    router.push("/dashboard/listing");
  };

  function handleClose() {
    setModalVisible(!modalVisible);
  }

  const liveOrder = () => {
    setModalVisible(false);
    router.push("/dashboard/liveorder");
  };
  const searchRoute = ()=>{
    router.push("/dashboard/search")
  }
  const marketPlace = [
    {
      id: "1",
      image: require("@/assets/images/recycle.png"),
      topic: "Plastic Recycling Waste",
      types: "Recyclates",
      volume: "Recyclates",
      Duration: "2 weeks",
      Price: "$2,300",
      code: "DQL1+",
    },
    {
      id: "2",
      image: require("@/assets/images/recycle.png"),
      topic: "Plastic Recycling Waste",
      types: "Recyclates",
      volume: "Recyclates",
      Duration: "DSS3",
      Price: "On Request",
      code: "DQL1+",
    },
    {
      id: "3",
      image: require("@/assets/images/recycle.png"),
      topic: "Plastic Recycling Waste",
      types: "Recyclates",
      volume: "Recyclates",
      Duration: "DSS3",
      Price: "On Request",
      code: "DQL1+",
    },
  ];
  useEffect(() => {
    // Function to determine the time of the day
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        return "Good Morning";
      } else if (hour >= 12 && hour < 17) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    };

    // Set the greeting message
    setGreeting(getGreeting());
  }, []);

  const styless = StyleSheet.create({
    centeredView: {
      flex: 1,
    },
    modalView: {
      flex: 1,
      flexDirection: "column",
      gap: 20,
      backgroundColor: "rgba(41, 39, 40, 0.74)",
    },
    btn: {
      marginVertical: 100,
      marginHorizontal: 20,
    },
  });
  return (
    <SafeAreaView
      style={{ backgroundColor: "#FFF", flex: 1, paddingHorizontal: 10 }}
    >
      {userInfo.emailverified !== true ? (
        <View style={styles.homehead}>
        <Image
          source={require("@/assets/images/review.png")}
          style={{ width: 30, height: 30 }}
        />
        <View>
          <RText>Your account is currently under review. </RText>
          <RText>Click to verify your account </RText>
        </View>
      </View>
      ): null}
      

      <View style={styles.home}>
        <View>
          <RText textStyle={{fontWeight:300}} fontSize="16">{greeting}</RText>

          <RText textStyle={{fontWeight:600}} fontSize="24" color="black">
            {userInfo.firstname}
            {userInfo.lastname} 
          </RText>
        </View>

        <View style={{flexDirection:"row"}}>
          <RTouchableOpacity
        onPress={searchRoute}>
            <MagnifyingGlassIcon color="#667185"  />
          </RTouchableOpacity>
          <RTouchableOpacity>
            <BellIcon color="black" />
          </RTouchableOpacity>
        </View>
      </View>

      <View style={styles.home2}>
        <RText textStyle={{fontWeight:600}} fontSize="20" color="black">
          Market Place
        </RText>

        <TouchableOpacity
          style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
        >
          <RText color="gray" fontSize="10">
            see all 
          </RText>
          <ChevronRightIcon size={10} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ flexDirection: "column", gap: 6, paddingHorizontal: 6 }}>
          {marketPlace.map((item, id) => {
            return (
              <TouchableOpacity
                key={id}
                style={{
                  flexDirection: "column",
                  borderWidth: 1,
                  borderColor: "#BEC0CA",
                  borderRadius: 5,
                  gap: 5,
                  paddingVertical: 15,
                  paddingHorizontal: 10,
                }}
                onPress={() =>
                  navigation.replace("Product", {
                    code: item.code,
                    title: item.topic,
                  })
                }
              >
                <Link href="/dashboard/detail">
                  <View style={{ paddingVertical: 1 }}>
                    <RText fontSize="14">{item.topic}</RText>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <Image
                      source={item.image}
                      style={{ width: 80, height: 80 }}
                    />

                    <View
                      style={{
                        flexDirection: "column",
                        gap: 8,
                        marginHorizontal: 20,
                      }}
                    >
                      <View style={{ flexDirection: "column", gap: 2 }}>
                        <Text style={{ color: "#79747e", fontSize: 10 }}>
                          Type of plastics
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: "600" }}>
                          {item.types}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "column", gap: 2 }}>
                        <Text style={{ color: "#79747e", fontSize: 10 }}>
                          Duration
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: "600" }}>
                          {item.Duration}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "column",
                        gap: 8,
                        marginHorizontal: 20,
                      }}
                    >
                      <View style={{ flexDirection: "column", gap: 2 }}>
                        <Text style={{ color: "#79747e", fontSize: 10 }}>
                          Volume(In tones)
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: "600" }}>
                          {item.volume}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "column", gap: 2 }}>
                        <Text style={{ color: "#79747e", fontSize: 10 }}>
                          Price(in USD)
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: "600" }}>
                          {item.Price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Link>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <Pressable
        style={{ position: "absolute", bottom: 0, right: 10 }}
        onPress={() => setModalVisible(true)}
      >
        <PlusCircleIcon color="purple" size={60} />
      </Pressable>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styless.centeredView}>
          <View style={styless.modalView}>
            <TouchableOpacity
              onPress={() => handleClose()}
              hitSlop={90}
              style={styless.btn}
            >
              <CloseSvg color="white" height="80px" />
            </TouchableOpacity>

            {userInfo.role === "Buyer " || userInfo.role === "Buyer and Seller" ? (
              <TouchableOpacity
                onPress={liveOrder}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 160,
                  right: 20,
                  gap: 4,
                }}
              >
                <RText color="white" fontSize="10">
                  Place live order
                </RText>
                <ShoppingCartIcon color="white" size={30} />
              </TouchableOpacity>
            ) : null}
           
            <TouchableOpacity
                onPress={handleListing}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  position: "absolute",
                  bottom: 200,
                  right: 20,
                  gap: 4,
                }}
              >
                <RText color="white" fontSize="10">
                  Create listing
                </RText>
                <ClipboardDocumentListIcon color="white" size={30} />
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
