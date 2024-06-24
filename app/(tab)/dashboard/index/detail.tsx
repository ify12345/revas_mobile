import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import RText from '@/components/RText';
import RTouchableOpacity from '@/components/RTouchableOpacity';
import { router } from 'expo-router';

export default function ProductMore() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, flexDirection:"column",gap:8,justifyContent:'space-between'}}>
        <View style={styles.container}>
       <TouchableOpacity onPress={() => router.back()} >
        <ChevronLeftIcon color={'black'}/>
       </TouchableOpacity>
          <Text style={{fontSize:20, fontWeight:"700"}}>Plastic Recycling Waste</Text>
        </View>
        <Image style={{width:"90%", height:150, marginHorizontal:20}} source={require('@/assets/images/recyclates.png')}/>
        
        <View style={styles.container2}>
          <RText style={{fontSize:20, fontWeight:"200"}}>Types of Plastic</RText>
          <RText style={{fontSize:20, fontWeight:"400"}}>rPET Flakes</RText>
        
        </View>
        <View style={styles.container2}>
          <RText style={{fontSize:20, fontWeight:"200"}}>Volume in(Tones)</RText>
          <RText style={{fontSize:20, fontWeight:"400"}}>500</RText>
        
        </View>
        <View style={styles.container2}>
          <RText style={{fontSize:20, fontWeight:"200"}}>Duration</RText>
          <RText style={{fontSize:20, fontWeight:"400"}}>2 weeks</RText>
        
        </View>
        <View style={styles.container2}>
          <RText style={{fontSize:20, fontWeight:"200"}}>Price</RText>
          <RText style={{fontSize:20, fontWeight:"400", color:"#006C1E"}}>$3,334.</RText>
        
        </View>
        <View style={styles.container2}>
          <RText style={{fontSize:20, fontWeight:"200"}}>Location</RText>
          <RText style={{fontSize:20, fontWeight:"400"}}>Kaduna</RText>
        
        </View>
        <View style={styles.container3}>
            <RTouchableOpacity style={{backgroundColor: "black", marginHorizontal: 10 , padding: 20,marginVertical:20,width:"100%"}} 
            onPress={()=>navigation.navigate('')}>
                    <RText style={{color: 'white', RtextAlign: "center"}}>Proceed to Order</RText>
            </RTouchableOpacity>
            <RTouchableOpacity style={{backgroundColor:"#FFF0F0", marginHorizontal: 10 , padding: 20,width:"100%"}} >
                    <RText style={{color: 'red', RtextAlign: "center"}}>Cancel</RText>
            </RTouchableOpacity>
     
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical:10
    },
    container2:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        marginHorizontal: 20,
        borderBottomWidth:1,
        borderBottomColor: "gray",
        paddingVertical:20
    },
    container3:{
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        marginHorizontal: 20,       
        paddingVertical:20
    }
});