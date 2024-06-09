import { SafeAreaView, Text, FlatList, Image, View } from "react-native";
import { Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import styles from "@/styles/onboarding.style";
import RText from "@/components/RText";
import RTouchableOpacity from "@/components/RTouchableOpacity";
import { Link, router } from "expo-router";

const slides = [
  {
    id: "1",
    image: require("@/assets/images/global.png"),
    title: "Global trading platform for recycled plastic",
    subtitle:
      "We enable buyers and sellers to efficiently trade recycled plastics with confidence, bringing increased opportunity for both parties.",
  },
  {
    id: "2",
    image: require("@/assets/images/plasticbales.png"),
    title: "Plastic Bales",
    subtitle:
      "Bales trading on the RPX are primarily any whole polyethylene terephthalate (PET) bottle with a screw-neck top that contains",
  },
  {
    id: "3",
    image: require("@/assets/images/sustainable.png"),
    title: "Sustainable Global Hub for Recycled Plastics",
    subtitle:
      "We are a global marketplace for recycled plastic, with a wide range of plastic types and grades available.",
  },
];

export default function OnboardingScreen({ navigation }: { navigation: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef<FlatList<any>>(null);
  const { height, width } = Dimensions.get("window");

  const Header = () => (
    <View style={styles.bars}>
      <View style={{ justifyContent: "space-between" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlide === index && {
                  backgroundColor: "black",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );

  const updateSlide = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlide(currentIndex);
  };

  const goNext = () => {
    const nextSlide = currentSlide + 1;
    if (nextSlide !== slides.length) {
      const offset = nextSlide * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlide(nextSlide);
    }
  };

  const Slide = ({ item }: { item: (typeof slides)[number] }) => (
    <View style={styles.imgContainer}>
      <View style={styles.container1}>
        <Image style={styles.img} source={item.image} />
      </View>
      <View style={{ flexDirection: "column", gap: 20 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>

      {currentSlide === slides.length - 1 ? (
       <Link href="/role" style={styles.links}>
          <RText color="#fff" fontSize="14" fontWeight="medium" textStyle={styles.textCenter}>
            Get started
          </RText>
       </Link>
        
      ) : (
        <RTouchableOpacity onPress={goNext} backgroundColor="black" width="90%">
          <RText color="#fff" fontSize="14" fontWeight="medium">
            Next
          </RText>
        </RTouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.generalContainer}>
      <Header />
      <FlatList
        data={slides}
        horizontal
        ref={ref}
        onMomentumScrollEnd={updateSlide}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
}
