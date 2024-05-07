import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native";
const SplashScreen =() => {
    const navigation = useNavigation();
    useEffect(()=> {
        const timeout = setTimeout(navigateToWelcome, 4000);
        return () => clearTimeout(timeout);
    }, []);
    const navigateToWelcome = () => {
        navigation.navigate('Welcome');
    };
    return (
                <View style={{ 
                    flex: 1, 
                    backgroundColor: '#636363', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                    }}>
                    <Text style={{
                        color: '#FFF',
                        fontWeight: 'bold'
                    }}> Entering Fine Print...</Text>
                </View>

    );
};
export default SplashScreen;