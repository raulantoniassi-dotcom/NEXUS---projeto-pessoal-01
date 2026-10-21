import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from "expo-router/ui";

import {
  Pressable,
  View,
  StyleSheet,
} from "react-native";

import { Colors, MaxContentWidth, Spacing } from "@/constants/theme";

import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: "100%" }} />

      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Dashboard</TabButton>
          </TabTrigger>

          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explorar</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

export function TabButton({
  children,
  isFocused,
  ref: _ref,
  ...props
}: TabTriggerSlotProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.tabButton,
        isFocused && styles.activeTab,
        pressed && styles.pressed,
      ]}
    >
      <ThemedText
        style={[
          styles.tabText,
          isFocused && styles.activeTabText,
        ]}
      >
        {children}
      </ThemedText>
    </Pressable>
  );
}

export function CustomTabList(props: TabListProps) {
  return (
    <View {...props} style={styles.tabListContainer}>
      <View style={styles.innerContainer}>
        <ThemedText style={styles.brandText}>
          NEXUS
        </ThemedText>

        <View style={styles.navigation}>
          {props.children}
        </View>

        <View style={styles.status}>
          <View style={styles.statusDot} />
          <ThemedText style={styles.statusText}>
            Workspace
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 100,
    zIndex: 10,
    paddingHorizontal: 24,
    paddingVertical: 14,
    alignItems: "center",
  },

  innerContainer: {
    width: "100%",
    maxWidth: 1440,
    minHeight: 64,
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: "#15151D",
    borderWidth: 1,
    borderColor: "#292936",
    flexDirection: "row",
    alignItems: "center",
    gap: 28,
  },

  brandText: {
    color: "#B9A0FF",
    fontSize: 21,
    fontWeight: "900",
    letterSpacing: 4,
  },

  navigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  tabButton: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: "#30234B",
  },

  tabText: {
    color: "#A4A4B5",
    fontSize: 14,
    fontWeight: "500",
  },

  activeTabText: {
    color: "#D4C5FF",
    fontWeight: "700",
  },

  status: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B70FF",
  },

  statusText: {
    color: "#A4A4B5",
    fontSize: 12,
  },

  pressed: {
    opacity: 0.7,
  },
});