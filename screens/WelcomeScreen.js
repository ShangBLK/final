import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../themes'

export default function WelcomeScreen() {
    const navigation = useNavigation();
    return (
        <ScreenWrapper>
            <View className="h-full flex justify-around">
                <View classname="flex-row justify-center mt-10">
                    <Image source={require('../assets/images/feather.png')} className="h-96 w-96 shadow"/>
                </View>
                <View className="mx-5 mb-20">
                    <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>Fine Print</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}className="shadow p-3 rounded-full mb-5" style={{backgroundColor: colors.button}}>
                        <Text className="text-center text-white text-lg font-bold"> Sign-in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}className="shadow p-3 rounded-full" style={{backgroundColor: colors.button}}>
                        <Text className="text-center text-white text-lg font-bold"> Sign-up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    )
}