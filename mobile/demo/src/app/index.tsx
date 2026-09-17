import { Empty } from "@/components/shared/Empty";
import { Loading } from "@/components/shared/Loading";
import { TaskLayout } from "@/components/tasks/TaskLayout";
import { TaskList } from "@/components/tasks/TaskList";
import { tasks } from "@/data/tasks";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, type Task } from "react-native";

export default function Index() {
  const [allMyTasks, setAllMyTasks] = useState(tasks);

  const myAwesomeFunction = (data: { message: string; id: number }) => {
    console.log("Hello from Index.tsx");
    console.log(data);
  };

  // function myAwesomeFunction() {
  //   console.log("Hello from Index.tsx");
  // }

  function handleRegisterTask(taskName: string) {
    const newTask = {
      id: (allMyTasks.length + 1).toString(),
      title: taskName,
      done: false, // Randomly set done status for demonstration
    };

    setAllMyTasks((prevTasks) => [...prevTasks, newTask]);
  }

  useEffect(() => {
    // TODO: Fetch tasks from an API

    const fetchTasksFromApi = async () => {
      try {
        const response = await fetch("https://api.example.com/tasks");
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data: Task[] = await response.json();
        setAllMyTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasksFromApi();

    console.log("Current tasks:", allMyTasks);
  }, []);

  return (
    <View style={styles.container}>
      <TaskLayout>
        <TaskList tasks={allMyTasks} onRegister={handleRegisterTask} />
      </TaskLayout>
      <Text>Antall tasks: {allMyTasks.length}</Text>
      {/* <Loading label={"Her laster vi ..."} />
      <Empty title={"Intet å vise"} onPress={myAwesomeFunction} />

      <Text>Edit src/app/index.tsx to edit this screen.</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 8,
  },
});
