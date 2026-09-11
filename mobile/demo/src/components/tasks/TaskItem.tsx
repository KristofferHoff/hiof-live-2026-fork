import type { Task } from "@/utils/task-schema";
import { View, Text } from "react-native";

type TaskItemProps = {
  task: Task;
  onToggle?: (id: string) => void;
};

export function TaskItem({ task }: TaskItemProps) {
  const { id, title, done } = task;

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{id}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
      {done ? (
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "green" }}>
          Done
        </Text>
      ) : (
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "red" }}>
          Not Done
        </Text>
      )}
    </View>
  );
}
