import type { Task } from "@/utils/task-schema";
import { View, Text, StyleSheet } from "react-native";
import { TaskItem } from "./TaskItem";
import { Theme } from "@/constants/theme";
import { TaskRegister } from "./TaskRegister";

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <View>
        <Text>No tasks available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TaskRegister />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Theme.spacing.sm,
    padding: Theme.spacing.lg,
  },
});
