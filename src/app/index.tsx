import * as Device from 'expo-device';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { usuario } from './Nexus/login';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <ThemedText type="title" style={styles.title}>
           Olá, {usuario}
          </ThemedText>
          <Text style={styles.text}>Aqui está o resumo do dia:</Text>
            <View style={styles.props}>
            <Image 
            source={{uri: "https://upload.wikimedia.org/wikipedia/commons/4/44/Eo_circle_deep-purple_checkmark.svg"}}
            style={styles.img}
            ></Image>
            <Text style={styles.tabela}>
              Tarefas
            </Text>
          </View>
          <View style={styles.props}>
            <Image
            source={{uri: "'"}}
            style={styles.img}></Image>
            <Text style={styles.tabela}>
              Metas
            </Text>
          </View>
        </ThemedView>
        <ThemedView>
        
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 30,
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 90,
  },
  heroSection: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 10,
  },
  title: {
    textAlign: "left"
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  text: {
    fontSize: 20,
    color: "#ffffff",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  props: {
    backgroundColor: "#16161E",
    width: 500,
    height: 159,
    borderRadius: 15,
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.four,
  },
  tabela: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  img: {
    width: 40,
    height: 40,
  },
});
