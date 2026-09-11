import type { Task } from "@/utils/task-schema";
import { View, Text } from "react-native";
import { TaskItem } from "./TaskItem";

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
    <View>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </View>
  );
}
