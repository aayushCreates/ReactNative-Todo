import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);
  const allTodos = useQuery(api.todos.getTodos);

  const totalCompletedTodos = allTodos
    ? allTodos.filter((t) => t.isCompleted).length
    : 0;
  const totalTodoCount = allTodos ? allTodos.length : 0;
  const progessPercentage =
    totalTodoCount > 0 ? (totalCompletedTodos / totalTodoCount) * 100 : 0;

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color="#ffffff" />
        </LinearGradient>

        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Today&apos;s Tasks</Text>
          <Text style={homeStyles.subtitle}>
            {totalCompletedTodos} of {totalTodoCount} completed
          </Text>
        </View>
      </View>

      {totalTodoCount > 0 && (
        <View style={homeStyles.progressContainer}>
          <View style={homeStyles.progressBarContainer}>
            <View style={homeStyles.progressBar}>
              <LinearGradient
                colors={colors.gradients.success}
                style={[
                  homeStyles.progressFill,
                  {
                    width: `${progessPercentage}%`,
                  },
                ]}
              />
            </View>
            <Text style={homeStyles.progressText}>
              {Math.round(progessPercentage)}%
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;
