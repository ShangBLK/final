import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from '../screens';
import AddReviewScreen from '../screens/AddReviewScreen';
import HomeScreen from '../screens/HomeScreen';
import PastReviewsScreen from '../screens/PastReviewsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import XScreen from '../screens/XScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Logout" component={WelcomeScreen} />
      </Drawer.Navigator>
    );
  }



export default function AppNavvigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen options={{headerShown: false }} name="Root" component={Root}/>
        <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignIn" component={SignInScreen} />
        <Stack.Screen options={{headerShown: false, presentation: 'modal'}} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={{headerShown: false}} name="Splash" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="AddReview" component={AddReviewScreen} />
        <Stack.Screen options={{headerShown: false}} name="X" component={XScreen} />
        <Stack.Screen options={{headerShown: false}} name="PastReviews" component={PastReviewsScreen} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}