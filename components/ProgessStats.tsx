import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo } from "react";
import { View, Text } from "react-native";

const ProgessStats = () => {
    const { colors } = useTheme();
    const settingsStyles = useMemo(() => createSettingsStyles(colors), [colors]);

    const allTodos = useQuery(api.todos.getTodos);
    const totalTodos = allTodos ? allTodos.length : 0; 
    const completedTodos = allTodos ? allTodos.filter(todo=> todo.isCompleted).length : 0;
    const activeTodo = totalTodos - completedTodos;
  

  return (
    <LinearGradient style={settingsStyles.section} colors={colors.gradients.surface}>
        <Text style={settingsStyles.sectionTitle}>Progess Stats</Text>

        <View style={settingsStyles.statsContainer}>
            {/* Total Todos */}
        <LinearGradient colors={colors.gradients.background} style={[settingsStyles.statCard, {
            borderLeftColor: colors.primary
        }]}>
            <View style={settingsStyles.statIconContainer}>
                <LinearGradient colors={colors.gradients.primary} style={settingsStyles.statIcon}>
                    <Ionicons name="list" size={20} color="#fff" />
                </LinearGradient>
            </View>

            <View>
                <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
                <Text style={settingsStyles.statLabel}>Total Todos</Text>
            </View>

        </LinearGradient>

        {/* Completed Todos */}
        <LinearGradient colors={colors.gradients.background} style={[settingsStyles.statCard, {
            borderLeftColor: colors.success
        }]}>
            <View style={settingsStyles.statIconContainer}>
                <LinearGradient colors={colors.gradients.success} style={settingsStyles.statIcon}>
                    <Ionicons name="checkmark" size={20} color="#fff" />
                </LinearGradient>
            </View>

            <View>
                <Text style={settingsStyles.statNumber}>{completedTodos}</Text>
                <Text style={settingsStyles.statLabel}>Completed</Text>
            </View>

        </LinearGradient>

        {/* Active Todos */}
        <LinearGradient colors={colors.gradients.background} style={[settingsStyles.statCard, {
            borderLeftColor: colors.warning
        }]}>
            <View style={settingsStyles.statIconContainer}>
                <LinearGradient colors={colors.gradients.warning} style={settingsStyles.statIcon}>
                    <Ionicons name="time" size={20} color="#fff" />
                </LinearGradient>
            </View>

            <View>
                <Text style={settingsStyles.statNumber}>{activeTodo}</Text>
                <Text style={settingsStyles.statLabel}>Active</Text>
            </View>

        </LinearGradient>
        </View>

    </LinearGradient>
  );
};

export default ProgessStats;
