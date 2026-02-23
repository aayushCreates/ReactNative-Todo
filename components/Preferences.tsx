import { createSettingsStyles } from "@/assets/styles/settings.styles";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo, useState } from "react";
import { Switch, Text, View } from "react-native";

const Preferences = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] =
    useState<boolean>(true);
  const [isAutoSync, setIsAutoSync] = useState<boolean>(true);

  const { colors, isDarkMode, toggleDarkMode } = useTheme();
  const settingsStyles = useMemo(() => createSettingsStyles(colors), [colors]);

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>

      {/* Dark mode */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="moon" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={"#fff"}
          trackColor={{
            false: colors.border,
            true: colors.primary,
          }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* Notification mode */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.warning}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="notifications" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Notifications</Text>
        </View>
        <Switch
          value={isNotificationEnabled}
          onValueChange={() => setIsNotificationEnabled(!isNotificationEnabled)}
          thumbColor={"#fff"}
          trackColor={{
            false: colors.border,
            true: colors.warning,
          }}
          ios_backgroundColor={colors.border}
        />
      </View>

      {/* Sync mode */}
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.success}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="sync" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Auto Sync</Text>
        </View>
        <Switch
          value={isAutoSync}
          onValueChange={()=> setIsAutoSync(!isAutoSync)}
          thumbColor={"#fff"}
          trackColor={{
            false: colors.border,
            true: colors.success,
          }}
          ios_backgroundColor={colors.border}
        />
      </View>
    </LinearGradient>
  );
};

export default Preferences;
