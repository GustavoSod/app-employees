import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { View, Text, Image, Pressable } from 'react-native';

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
              <Link href="/modal" asChild>
                <Pressable style={{ marginRight: 20 }}>
                  {({ pressed }) => (
                    <>
                      <AntDesign 
                        name="bells" 
                        size={24} 
                        color="#000" 
                        style={{ opacity: pressed ? 0.5 : 1 }}
                      />
                      <View style={{
                        position: 'absolute', 
                        top: -6, 
                        right: -4, 
                        backgroundColor: '#0500FF', 
                        borderRadius: 10, 
                        width: 18, 
                        height: 18, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                      }}>
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: '800' }}>02</Text>
                      </View>
                    </>
                  )}
                </Pressable>
              </Link>
            ),
          }} 
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', headerTitle:'Notificações'}} />
      </Stack>
    </ThemeProvider>
  );
}
