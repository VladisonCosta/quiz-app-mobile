import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'SOLARSPACEDEMO-Regular': require('@/assets/fonts/SOLARSPACEDEMO-Regular.otf'),
    'SPACEMISSION': require('@/assets/fonts/SPACEMISSION.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
     <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
     </Stack>

  )
}
