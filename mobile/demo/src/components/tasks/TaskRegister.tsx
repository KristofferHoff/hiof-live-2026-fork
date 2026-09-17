import { Theme } from "@/constants/theme";
import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  type TextInputChangeEvent,
} from "react-native";

export function TaskRegister() {
  const [title, setTitle] = useState("");

  function onTextUpdate(text: string) {
    console.log("Text updated:", text);
    setTitle(text);
  }

  function onChangeEvent(event: TextInputChangeEvent) {
    console.log("Change event:", event);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Register</Text>
      <Text>Du skrev {title}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task name"
        value={title}
        onChangeText={onTextUpdate}
        onChange={onChangeEvent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Theme.spacing.sm,
    padding: Theme.spacing.lg,
    backgroundColor: Theme.background,
  },
  title: {
    fontSize: Theme.fontSize.lg,
    fontWeight: "bold",
    color: Theme.text,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
  },
});
