import { Empty } from "@/components/shared/Empty";
import { Loading } from "@/components/shared/Loading";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const myAwesomeFunction = (data: { message: string; id: number }) => {
    console.log("Hello from Index.tsx");
    console.log(data);
  };

  // function myAwesomeFunction() {
  //   console.log("Hello from Index.tsx");
  // }

  return (
    <View style={styles.container}>
      <Loading label={"Her laster vi ..."} />
      <Empty title={"Intet å vise"} onPress={myAwesomeFunction} />

      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
