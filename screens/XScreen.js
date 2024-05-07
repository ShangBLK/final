import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BackButton from '../components/backButton'
import ScreenWrapper from '../components/screenWrapper'
import { ratings } from '../constants/index'
import { colors } from '../themes'

export default function XScreen() {
    const [user, setUser] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    const navigation = useNavigation(); 

    const handleAddX = ()=> {
        navigation.goBack();
        if(user & rating && review) {
            //good review
            navigation.goBack();
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
                    <Text className={`${colors.heading} text=xl font-bold text-center`}>Add Reviews</Text>
                    </View>    

                 <View className="flex-row justify-center my-3 mt-5">
                    <Image className="h-72 w-72" source={require('../assets/images/data.png')}/>
                 </View>
                 <View className="space-y-2 mx-2">
                    <Text className={`${colors.heading} text-lg font-bold`}>Username:  </Text>
                    <TextInput value={user} onChangeText={value=> setUser(value)} className="p-4 bg-white rounded=full mb-3" />
                    <Text className={`${colors.heading} text-lg font-bold`}>Review of App:</Text>
                    <TextInput value={review} onChangeText={value=> setReview(value)}className="p-4 bg-white rounded=full mb-3" />
                </View>
                <View className="mx-2 space-x-2">
                    <Text className="text-lg font-bold">Rating</Text>
                    <View className="flex-row flex-wrap items-center">
                        {
                            ratings.map(cat=> {
                                let bgColor = 'bg-white';
                                if(cat.value==rating) bgColor = 'bg-green-200'
                                return (
                                    <TouchableOpacity onPress={()=> setRating(cat.value)} key={cat.value} 
                                    className={`rounded-full ${bgColor} p-4 p-3 mb-2 mr-2`}>
                                        <Text> {cat.title}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>

                 </View>
                <View>
                    <TouchableOpacity onPress={handleAddX} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm">
                        <Text className="text-center text-white text-lg font-bold"> Add Review</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}