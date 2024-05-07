import React from 'react'
import { Text, View } from 'react-native'
import { colors } from '../themes'

export default function UserReviewsCard({item}) {
    return (
        <View className="flex-row justify-between items-center p-3 px-5 mb-3 bg-red-300 rounded-2xl">
            <View>
                <Text className={`${colors.heading} font-bold`}>{item.user}</Text>
                <Text className={`${colors.heading} text-xs`}>Rating: {item.rating}</Text>
            </View>
            <View>
                <Text>"{item.review}"</Text>
            </View>
            
        </View>
    )
}