import { View, Text } from "react-native";
import React from "react";
import ReminderSchedule from "../src/screen/ReminderSchedule";
import { StatusBar } from "expo-status-bar";
import Reminder from "../src/screen/Reminder";
import AddReminder from "../src/screen/AddReminder";
export default function index() {
  return (
    <>
      <StatusBar style="dark" />
      <AddReminder />
    </>
  );
}
