import { StyleSheet } from "react-native";
import { COLORS, SIZES, width, height } from "@/assets/constants/index";

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  Top:{
    borderBottomColor:"#F8F5F9",
    borderBottomWidth:"0.4px",
    paddingBottom: "16px"
  },
  container1: {
    flexDirection: "column",
    // justifyContent: "space-between",
    flex: 1,
  },
  started: {
    flexDirection: "column",
    gap: 4,
    marginBottom: SIZES.medium,
  },
  container: {
    flexDirection: "column",
    marginHorizontal: SIZES.small,
    marginVertical: SIZES.xLarge,
    gap: SIZES.medium,
  },
  button: {
    marginVertical: SIZES.medium,
  },
  checkBox: {
    flexDirection: "row",
    gap: SIZES.large,
    marginVertical: SIZES.small,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  footerContainerSignIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  home:{
    flexDirection:'row',
    width: '100',
    justifyContent:"space-between",
    marginHorizontal: SIZES.small,
    alignItems:'center',
  },
  homehead:{
      backgroundColor: "#EADDFF",
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      paddingHorizontal:9,
      paddingVertical: 20,
      gap:5,
      marginHorizontal: SIZES.small,
  },
  home2:{
    flexDirection:'row',
    width: '100',
    justifyContent:"space-between",
    marginHorizontal: SIZES.small,
    alignItems:'center',
    marginTop:SIZES.large,
    marginBottom: 10
  },
  profileTopBar:{
     marginHorizontal: 50,
     paddingVertical: 10
  },
  profileContainer:{
    flexDirection: "column",
    gap:SIZES.large,
    paddingVertical:SIZES.large,
    marginHorizontal: 10,
  },
  profileContainer1:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between",
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da'
    
    

  },
  profileDetailContainer1:{
    width:'100%',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  
  profileContainer2:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    alignContent:"center",
    gap: 15,
    paddingBottom: 8
  },
  profileDetailContainer:{
    flexDirection:"column",
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
    alignContent:"center",
    gap: 15,
    paddingBottom: 8
  },
  userInfo:{
    flexDirection:"column",
    gap:5,

  },
  tagsContainer:{
    flexDirection:"column",
    gap:4
  },
  tagsContainer1:{
    flexDirection:"row",
    gap:4,
    
  },
  tag:{
    borderWidth:1,
    borderColor:"#d6d7da",
    flexDirection:"row",
    alignItems:"center",
    padding:6,
  },
  activeTag:{
    borderWidth:2,
    borderColor:"purple",
  },
  tag2:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"100%"
  },
  formContainer:{
     flexDirection:"column",
     display:'flex',
     gap:20,
     paddingHorizontal:10,
     paddingVertical:30
  },
  form:{
    flexDirection:"column",
    gap:3,

  
  }
});

export default styles;
