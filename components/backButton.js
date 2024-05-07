import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import { colors } from '../themes'

export default function BackButton() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=> navigation.goBack()} className="bg-white rounded-full h-8 w-8">
            <ChevronLeftIcon size="30" color={colors.button} />
        </TouchableOpacity>
    )
}