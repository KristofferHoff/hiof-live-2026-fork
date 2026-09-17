import { Empty } from "@/components/shared/Empty";
import { Loading } from "@/components/shared/Loading";
import { TaskLayout } from "@/components/tasks/TaskLayout";
import { TaskList } from "@/components/tasks/TaskList";
import { tasks } from "@/data/tasks";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const [allMyTasks, setAllMyTasks] = useState(tasks);

  const myAwesomeFunction = (data: { message: string; id: number }) => {
    console.log("Hello from Index.tsx");
    console.log(data);
  };

  // function myAwesomeFunction() {
  //   console.log("Hello from Index.tsx");
  // }

  return (
    <View style={styles.container}>
      <TaskLayout>
        <TaskList tasks={allMyTasks} />
      </TaskLayout>
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
