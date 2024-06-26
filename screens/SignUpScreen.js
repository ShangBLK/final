import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BackButton from '../components/backButton'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../themes'

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');

    const navigation = useNavigation(); 

    const handleSubmit = ()=> {
        if(email && password) {
            //good review
            navigation.goBack();
            navigation.navigate("Home");
        } else {
            //show error
        }
     }
    return (
        <ScreenWrapper>
            <View className="flex justify-between h-full mx-4">
                <View>
                    <View className="relative">
                     <View className="absolute top-0 left-0">
                        <BackButton/>
                    </View>
                    <Text className={`${colors.heading} text=xl font-bold text-center`}>Sign Up</Text>
                    </View>    

                 <View className="flex-row justify-center my-3 mt-5">
                    <Image className="h-72 w-72" source={require('../assets/images/people.png')}/>
                 </View>
                 <View className="space-y-2 mx-2">
                    <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
                    <TextInput value={email} onChangeText={value=> setEmail(value)} className="p-4 bg-white rounded=full mb-3" />
                    <Text className={`${colors.heading} text-lg font-bold`}>Password</Text>
                    <TextInput value={password} secureTextEntry onChangeText={value=> setPassowrd(value)}className="p-4 bg-white rounded=full mb-3" />

                </View>

                 </View>
                <View>
                    <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm">
                        <Text className="text-center text-white text-lg font-bold">Sign-up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}