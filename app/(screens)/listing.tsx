import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/solid';
import RText from '@/components/RText';
import styles from '@/styles/styles';
import BackButton from '@/components/BackButton';

export default function Listing() {
 
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 5,
      }}>
      <View style={styles.topBar}>
       <RText>Create Listing</RText>
      </View>
      <View
      style={styles.content }>
       
      </View>
    </SafeAreaView>
  );
}
