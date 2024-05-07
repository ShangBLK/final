import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BackButton from '../components/backButton'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../themes'

export default function AddReviewScreen() {
    const [app, setApp] = useState('');
    const [des, setDes] = useState('');

    const navigation = useNavigation(); 

    const handleAddReview = ()=> {
        if(app && des) {
            //good review
            navigation.navigate("Home");
        } else {
            //show error
        }
     }
    return (
        <ScreenWrapper>
            <View className="flex justify-between h-full mx-4">
                <View>
                    <View className="relative mt-5">
                     <View className="absolute top-0 left-0">
                        <BackButton/>
                    </View>
                    <Text className={`${colors.heading} text=xl font-bold text-center`}>Add Application</Text>
                    </View>    

                 <View className="flex-row justify-center my-3 mt-5">
                    <Image className="h-72 w-72" source={require('../assets/images/data.png')}/>
                 </View>
                 <View className="space-y-2 mx-2">
                    <Text className={`${colors.heading} text-lg font-bold`}>App Name:  </Text>
                    <TextInput value={app} onChangeText={value=> setApp(value)} className="p-4 bg-white rounded=full mb-3" />
                    <Text className={`${colors.heading} text-lg font-bold`}>Description of App:</Text>
                    <TextInput value={des} onChangeText={value=> setDes(value)}className="p-4 bg-white rounded=full mb-3" />

                </View>

                 </View>
                <View>
                    <TouchableOpacity onPress={handleAddReview} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm">
                        <Text className="text-center text-white text-lg font-bold"> Add App</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}