import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
    const { colors } = useTheme();
    const settingsStyle = createSettingsStyles(colors);

    const clearAllTodos = useMutation(api.todos.clearAllTodos);

    const handleResetApp = async ()=> {
        Alert.alert(
            "Reset App",
            "This will delete all your todos permanently. This action cannot be undone.",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                }, {
                    text: "Delete All",
                    style: "destructive",
                    onPress: async ()=> {
                        try {
                            const result = await clearAllTodos();

                            Alert.alert(
                                "App Reset",
                                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`
                            )
                         }catch(err) {
                             console.log("Error in reset app: ", err);
                             Alert.alert("Error", "Failed to reset app");
                         }
                    }
                }
            ]
        )
    }

  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyle.section}>
      <Text style={settingsStyle.sectionTitleDanger}>DangerZone</Text>

      <TouchableOpacity style={[settingsStyle.actionButton, {
        borderBottomWidth: 0
      }]}
      onPress={handleResetApp}
      activeOpacity={0.7}>
        <View style={settingsStyle.actionButton}>
        <LinearGradient colors={colors.gradients.danger} style={settingsStyle.actionButton}>
            <Ionicons name="trash" size={18} color={colors.textMuted} />
        </LinearGradient>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
