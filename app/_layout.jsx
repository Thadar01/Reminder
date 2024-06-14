import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
  return (
    <>
      <GestureHandlerRootView>
        <PaperProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
            <Stack.Screen name="reminder" />
            <Stack.Screen name="time" />
            <Stack.Screen name="addreminder" />
          </Stack>
        </PaperProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default _layout;
