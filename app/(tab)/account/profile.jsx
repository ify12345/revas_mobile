import { View, Text, Image, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useGlobalContext } from "@/context/AuthContext";
import RText from '@/components/RText'
import { BuildingOfficeIcon, ChevronLeftIcon, ChevronRightIcon, CreditCardIcon, DocumentIcon, DocumentTextIcon, UserCircleIcon } from 'react-native-heroicons/solid'
import styles from '@/styles/styles'
import RTouchableOpacity from '@/components/RTouchableOpacity';
import { useNavigation } from '@react-navigation/native'
import { router } from 'expo-router';



export default function Profile() {
  const navigation = useNavigation();
  const { userInfo } = useGlobalContext();
  const handleReset =()=>{
    router.push('/account/editprofile')
  }

  return (
    <SafeAreaView
    style={{
         flex: 1,
         flexDirection: "column", 
         backgroundColor:"white",
         paddingHorizontal: 50
       }}
     >
       <View style={styles.profileTopBar}>
         <RText fontSize='18'>My Account</RText>
       </View>

       <View style={styles.profileContainer}>

          <TouchableOpacity style={styles.profileContainer1}
          onPress={handleReset}>
            <View style={styles.profileContainer2}>
               <UserCircleIcon color="gray" size={30} />
               <View style={styles.userInfo}>
                <RText fontSize='18' color='black'>{userInfo.firstname} {userInfo.lastname}</RText>
                <RText fontSize='10' color='gray'>Profile details</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </TouchableOpacity>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <CreditCardIcon color={"green"}  size={30}/>
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>Bank details</RText>
                <RText fontSize='10' color='gray'>Add/Update Bank details</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <BuildingOfficeIcon size={30} color={'blue'}/>
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>Manage Company</RText>
                <RText fontSize='10' color='gray'>Company management</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>

          <View style={styles.profileContainer1}>
            <View style={styles.profileContainer2}>
               <DocumentTextIcon size={30}  color={'purple'}/>
               <View style={styles.userInfo}>
                <RText fontSize='12' color='black'>Uploaded Documents</RText>
                <RText fontSize='10' color='gray'>View uplloaded documents</RText>
               </View>
            </View>
            <ChevronRightIcon size={15} color="black"/>
          </View>
        



       </View>
        <RTouchableOpacity
         backgroundColor='#'
         onPress={()=>navigation.navigate('SignIn')}
         >
          <RText 
          color='red'
          >
          Sign out
          </RText>

        </RTouchableOpacity>
 
    </SafeAreaView>
  )
}