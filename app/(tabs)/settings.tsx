import { createSettingsStyles } from "@/assets/styles/settings.styles";
import DangerZone from "@/components/DangerZone";
import Preferences from "@/components/Preferences";
import ProgessStats from "@/components/ProgessStats";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  const { colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView style={settingsStyles.safeArea}>
        <View style={settingsStyles.header}>
        <View style={settingsStyles.titleContainer}>
          <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
              <Ionicons name="settings" size={28} color="#ffffff" />
          </LinearGradient>
          <Text style={settingsStyles.title}>
            Settings
          </Text>
        </View>
        </View>

        <ScrollView style={settingsStyles.scrollView} contentContainerStyle={settingsStyles.content}
        showsVerticalScrollIndicator={false}>

          <ProgessStats />
          <Preferences />
          <DangerZone />

        </ScrollView>

      </SafeAreaView>
    </LinearGradient>
  );
};

export default Settings;
