import React from "react";
import { Tabs } from "expo-router";
import { HomeIcon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "react-native-heroicons/solid";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

const TabLayout = () => {
  const colorScheme = useColorScheme();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black", // Set active tint color to black
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <HomeIcon size={24} color={focused ? "black" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <MagnifyingGlassIcon size={24} color={focused ? "black" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="deals"
        options={{
          title: 'Deals',
          tabBarIcon: ({ focused }) => (
            <ShoppingBagIcon size={24} color={focused ? "black" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ focused }) => (
            <UserIcon size={24} color={focused ? "black" : "gray"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
