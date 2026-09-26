import { LinearGradient } from 'expo-linear-gradient';
import { Stack, router } from 'expo-router';
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DiscordButton } from '../components/DiscordButton';
import { HeroImage } from '../components/HeroImage';
import { IntroText } from '../components/IntroText';

export default function Index() {
  const insets = useSafeAreaInsets()

  return (
    <LinearGradient 
    colors={['#0E1647', '#0A1033']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={[styles.container, {paddingTop: insets.top}]}>
      <Stack.Screen options={{ headerShown: false }} />
      <HeroImage />

      <View style={styles.contentContainer}>
        <IntroText />
        <DiscordButton onPress={() => router.push('/home')} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  contentContainer: {
    flex: 1,
    gap: 48,
  },
});
