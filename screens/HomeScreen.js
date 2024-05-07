import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/emptyList';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../themes';

const Drawer = createDrawerNavigator();

const items = [
        {
            id: 1,
            app: 'App 1',
            review: 'Clean user...'
        },
        {
            id: 2,
            app: 'App 2',
            review: 'Fast and ...'
        },
        {
            id: 3,
            app: 'App 3',
            review: 'Sleek design...'
        },
        {
            id: 4,
            app: 'App 4',
            review: 'Privacy-focused...'
        },

    ]
const Progress = ({step, steps, height}) => {
  const [width, setWidth] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-10000)).current;
  const reactive = React.useRef(new Animated.Value(-10000)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);
  React.useEffect(() => {
    //-width + with * step / steps
    reactive.setValue(-width + (width * step) / steps)
  }, [step, width])
  return (
    <>
    <Text style={{fontFamily: 'Menlo', fontSize: 12, fontWeight: '900', marginBottom: 8,}}>
      {step}/{steps}
    </Text>
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }} 
      style ={{
      height,
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: height,
      overflow: 'hidden',
    }}>
      <Animated.View style={{
        height,
        width: '100%',
        borderRadius: height,
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        left: 0,
        top: 0, 
        transform: [
          {
            translateX: animatedValue, 
          },
        ],
      }}>

      </Animated.View>
    </View>
    </>
  )
}


export default function HomeScreen(route) {
    const navigation = useNavigation();

      const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % (10 + 1))
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, [index])

    return (
        <ScreenWrapper className="flex-1">
            <View className="flex-row justify-between items-center p-4">
                <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}> Fine Print</Text>
 
                <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                    <Text className={colors.heading}> Logout </Text>
                </TouchableOpacity>
                
            </View>
            <View> 
                                                <StatusBar hidden/>
          <Progress step={index} steps={10} height={18} />
            </View>
            <View className="flex-row justify-center items-center mb-5">
            </View>
            <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
                <Image source={require('../assets/images/hand.png')} className="w-60 h-60"/>
            </View>
            <View className="px-4 space-y-4">
                <View className="flex-row justify-between item-center">
                    <Text className={`${colors.heading} dont-bold text-xl`}> Reviews</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('AddReview')}className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                         <Text className={colors.heading}> Add Review </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 430}}>
                    <FlatList 
                        data={items}
                        numColumns={2}
                        ListEmptyComponent={<EmptyList message={"Your have not reviewed any apps yet..."} />}
                        keyExtractor={item=> item.id}
                        showsVerticalScrollIndicator = {false}
                        columnWrapperStyle={{
                            justifyContent: 'space-between'
                        }}
                        className="mx-1"
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity onPress={()=> navigation.navigate('PastReviews', {...item})}className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                                    <View>
                                        <Image source={randomImage()} className="w-36 h-36 mb-2"/>
                                        <Text className={`${colors.heading} font-bold`}>{item.app}</Text>
                                        <Text className={`${colors.heading} text-xs`}>{item.review}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>

            
        </ScreenWrapper>
    )
}