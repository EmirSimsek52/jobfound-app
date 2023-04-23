import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View,ImageBackground,Dimensions } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, images, SIZES } from '../../constants'
import styles from '../../styles/search'
import { ScrollView } from 'react-native-gesture-handler'

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;
const image = {uri: '/assets/images/profile2.jpg'};
const Profile = () => {
    
    const router = useRouter()

    
    return (
      <View style={{backgroundColor:'#121212', flex:1}}>
      
        <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
          <ImageBackground 
          source={images.profile2} resizeMode="cover"  style={{
            
            height: 0.40 * h,
            marginTop:-50,
            borderBottomWidth:0,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            shadowColor: "indigo",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.33,
            shadowRadius: 5,
            
            elevation: 15,
            backgroundColor:'white'
          }}>
            <Stack.Screen
           
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShown:false,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

          
             <View>
              <TouchableOpacity
              onPress={() => router.back()}>
             <Image
              style={{width:40,height:40,marginTop:40,marginLeft:10}}
              source={icons.left}
            />
            </TouchableOpacity>
             </View>
                <Text style={{fontSize:35,textAlign:'center',marginTop:230,color:'#BA55D3',fontWeight:'bold'}}>Emir Simsek</Text>
           </ImageBackground>
           <ScrollView>
            <View 
            style={{width:"90%",
            height:140,
            backgroundColor:'#1F1A24',
            alignSelf:'center',
            marginVertical:5,
            borderRadius:30,
            marginTop:20
            }}>
              <Text style={{color:'white',textAlign:'center',marginVertical:10,fontSize:25,}}>React Developer</Text>
              <Text style={{color:'white',marginHorizontal:20,fontSize:15,marginVertical:10}}>
              I'm a skilled software developer with experience in C# and JavaScript, and expertise in frameworks like React, React Native, Tailwind and Three.js.
                </Text>
            </View>

            <View 
            style={{width:"90%",
            height:150,
            backgroundColor:'#1F1A24',
            alignSelf:'center',
            marginVertical:5,
            borderRadius:30
            }}>
              <Text style={{color:'white',textAlign:'center',marginVertical:10,fontSize:25,}}>
              Contact
                </Text>
              <Text style={{color:'white',marginHorizontal:20,fontSize:15,marginVertical:5}}>
              You can reach me by: emirer2024@gmail.com
                </Text>
                <View style={{flexDirection:'row',marginHorizontal:"30%",marginVertical:20}}>
                  <TouchableOpacity>
                <Image 
                  source={icons.insta}
                  style={{width:50,height:40}}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image 
                  source={icons.linkicon}
                  style={{width:65,height:40}}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image 
                  source={icons.giticon}
                  style={{width:42,height:40}}
                />
                </TouchableOpacity>
                </View>
                <View 
            style={{width:"100%",
            height:170,
            backgroundColor:'#1F1A24',
            alignSelf:'center',
            marginVertical:5,
            borderRadius:30
            }}>
              <Text style={{color:'white',textAlign:'center',marginVertical:10,fontSize:25,}}>Experience</Text>
              <Text style={{color:'white',marginHorizontal:20,fontSize:15,marginVertical:10}}>
                  -Junior Web Developer in Meta 2020-2022

                </Text>
                <Text style={{color:'white',marginHorizontal:20,fontSize:15,marginVertical:10}}>
                  -Businnes Analyts in Microsoft 2018-2020
                  
                </Text>
                <Text style={{color:'white',marginHorizontal:20,fontSize:15,marginVertical:10}}>
                  -React-Native Developer in Shopify 2022-Present
                  
                </Text>
            </View>
            </View>
                
           </ScrollView>
        </SafeAreaView>
        </View>
    )
}

export default Profile