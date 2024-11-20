import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { useColorScheme } from '@/components/useColorScheme';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerTitle: '',
            headerStyle:{
              backgroundColor:"#fff",
            },
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Image 
                  source={{ uri: 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg' }} 
                  style={{
                    width: 40, 
                    height: 40, 
                    borderRadius: 20,
                  }}
                />
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <AntDesign name="bells" size={24} color={"#000"} />
                <View style={{
                  position: 'absolute', 
                  top: -6, 
                  right: -4, 
                  backgroundColor: 'red', 
                  borderRadius: 10, 
                  width: 16, 
                  height: 16, 
                  justifyContent: 'center', 
                  alignItems: 'center',
                }}>
                  <Text style={{ color: 'white', fontSize: 10, fontWeight: '700' }}>1</Text>
                </View>
              </TouchableOpacity>
            ),
          }} 
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
