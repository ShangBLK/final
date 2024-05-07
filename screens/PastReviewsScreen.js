import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import BackButton from '../components/backButton'
import EmptyList from '../components/emptyList'
import ScreenWrapper from '../components/screenWrapper'
import UserReviewsCard from '../components/userReviewsCard'
import { colors } from '../themes'
const items = [
    {
        id: 1,
        user: 'User1',
        rating: 9,
        review: 'Nice theme colors'
    },
    {
        id: 2,
        user: 'User2',
        rating: 8,
        review: 'Great user interface design'
    },
    {
        id: 3,
        user: 'User3',
        rating: 7,
        review: 'Smooth navigation experience'
    },
    {
        id: 4,
        user: 'User4',
        rating: 9,
        review: 'Responsive layout and easy to use'
    }
]

export default function PastReviewsScreen(props) {
    const  {app} = props.route.params;
    const navigation = useNavigation();
    return (
        <ScreenWrapper className="flex-1">
            <View className="px-4">
             <View className="relative mt-5">
                <View className="absolute top-2 left-0">
                    <BackButton/>
                </View>
                <View>
                    <Text className={`${colors.heading} text=xl font-bold text-center`}>{app}</Text>

                </View>
  
                </View>  
            <View className="flex-row justify-center items-center rounded-xl mb-4">
                <Image source={require('../assets/images/read.png')} className="w-80 h-80"/>
            </View>
            <View className="space-y-4">
                <View className="flex-row justify-between item-center">
                    <Text className={`${colors.heading} dont-bold text-xl`}> Other User Reviews</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('X')}className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                         <Text className={colors.heading}> Add Review </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 430}}>
                    <FlatList 
                        data={items}
                        ListEmptyComponent={<EmptyList message={"No reviews on this app yet..."} />}
                        keyExtractor={item=> item.id}
                        showsVerticalScrollIndicator = {false}
                        className="mx-1"
                        renderItem={({item}) => {
                            return (
                                <UserReviewsCard item={item}/>
                            )
                        }}
                    />
                </View>
            </View>

            </View>

        </ScreenWrapper>
    )
}