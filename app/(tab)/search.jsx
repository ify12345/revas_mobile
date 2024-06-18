import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HSearchInput } from '@/components/HForm'
import RText from '@/components/RText'
import styles from '@/styles/styles'

const Search = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSetActive = (index, title) => {
    if (activeItem === index) {
      setActiveItem(null);
      setSearchText('');
    } else {
      setActiveItem(index);
      setSearchText(title);
    }
  };

  const categories = [
    {
      title: "PE-HD",
      image: require('@/assets/images/PD.png')
    },
    {
      title: "PE-HD2",
      image: require('@/assets/images/PD.png')
    },
    {
      title: "PE-LD",
      image: require('@/assets/images/PD.png')
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20 }}>
      <HSearchInput placeholder='Search for material or commodity' value={searchText} onChangeText={setSearchText} />
      <View style={{ flexDirection: "column", gap: 20, paddingVertical: 30 }}>
        <ScrollView contentContainerStyle={styles.tagsContainer}>
          <RText fontSize='14'>Category</RText>
          <ScrollView
            contentContainerStyle={styles.tagsContainer1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((el, index) => (
              <TouchableOpacity
                style={[styles.tag, activeItem === index && styles.activeTag]}
                onPress={() => handleSetActive(index, el.title)}
                key={index}
              >
                <RText>{el?.title}</RText>
                <Image source={el?.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ScrollView>
        <View style={styles.tag2}>
          <RText>Recents</RText>
          <TouchableOpacity>
            <RText fontSize='10' color='gray'>Clear All</RText>
          </TouchableOpacity>
        </View>
        <View className="border-pink-600 border-spacing-3">
            <Text>hi</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search;
