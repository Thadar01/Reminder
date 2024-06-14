import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import useStore from "../store";
import { FlatList } from "react-native-gesture-handler";
import { format } from "date-fns";
import AddReminder from "./AddReminder";
const Reminder = () => {
  const { list, deleteList, historylist, deleteHistory } = useStore();
  const deleteHandelar = (id) => {
    deleteList(id);
    console.log("del");
  };
  const deleteHistorylist = (id) => {
    deleteHistory(id);
  };
  const [scheduleStyle, setScheduleStyle] = useState({
    color: "text-[#B309AF]",
    line: "bg-[#B309AF]",
  });
  const [historyStyle, setHistoryStyle] = useState({
    color: "text-white",
    line: "bg-black",
  });

  //ScheduleStyle
  const clickSchedule = () => {
    setScheduleStyle({
      color: "text-[#B309AF]",
      line: "bg-[#B309AF]",
    });

    setHistoryStyle({
      color: "text-white",
      line: "bg-black",
    });
  };
  //HistoryStyle
  const clickHistory = () => {
    setScheduleStyle({
      color: "text-white",
      line: "bg-black",
    });

    setHistoryStyle({
      color: "text-[#B309AF]",
      line: "bg-[#B309AF]",
    });
    // historyList(list.date, list.hour, list.min, list.am);
    // // console.log("history", historylist);
  };
  const List = () => {
    if (scheduleStyle.color === "text-[#B309AF]") {
      return (
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View className="flex-row justify-between m-2 border border-[#3F4040] border-x-0 border-t-0 border-b-[0.4px] h-[45px] items-center ">
              <View>
                <Text className="text-[#BEBFBF] mb-1 text-[12px]">
                  {format(item.date, "MM/dd/yy")},{" "}
                  {(item.hour < 10 ? "0" : "") + item.hour}:
                  {(item.min == 0 ? "00" : item.min < 10 ? "0" : "") + item.min}{" "}
                  {item.am}
                </Text>
                <Text className="text-white  text-[12px]">{item.title}</Text>
              </View>
              <View className="flex-row">
                <View className="mr-1">
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={20}
                    color="#1A75FF"
                  />
                </View>
                <View className="mr-2">
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={20}
                    color="#FF4646"
                    onPress={() => deleteHandelar(item.id)}
                  />
                </View>
              </View>
            </View>
          )}
        />
      );
    } else if (historyStyle.color === "text-[#B309AF]")
      return (
        <FlatList
          data={historylist}
          renderItem={({ item }) => (
            <View className="flex-row justify-between m-2 border border-[#3F4040] border-x-0 border-t-0 border-b-[0.4px] h-[45px] items-center ">
              <View>
                <Text className="text-[#BEBFBF] mb-1 text-[12px]">
                  {format(item.date, "MM/dd/yy")},{" "}
                  {(item.hour == 0 ? "00" : item.hour < 10 ? "0" : "") +
                    item.hour}
                  :
                  {(item.min == 0 ? "00" : item.min < 10 ? "0" : "") + item.min}{" "}
                  {item.am}
                </Text>
                <Text className="text-white  text-[12px]">{item.title}</Text>
              </View>
              <View className="flex-row">
                <View className="mr-1">
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={20}
                    color="#1A75FF"
                  />
                </View>
                <View className="mr-2">
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={20}
                    color="#FF4646"
                    onPress={() => deleteHistorylist(item.id)}
                  />
                </View>
              </View>
            </View>
          )}
        />
      );
  };
  const newReminder = () => {
    router.push("/");
  };
  return (
    <SafeAreaView>
      <View className="bg-[#230143] h-[374px] w-[295px] rounded-xl m-3">
        <Text className="text-[#D721D2] m-3">AI Agent 1 (Reminder)</Text>
        <View className="flex justify-center items-center">
          <View className="bg-[#0F001E] w-[271px] h-[324px] rounded-xl">
            <Text className="text-[#89F8FF] text-[16px] font-bold m-3">
              Reminder
            </Text>
            <View>
              <View className="flex-row  w-[40%] ml-3 justify-between">
                <View>
                  <Text
                    className={`${scheduleStyle.color}`}
                    onPress={clickSchedule}
                  >
                    Schedule
                  </Text>
                  <View
                    className={`${scheduleStyle.line} w-[12px] h-[2px] m-2 ml-5 rounded-tl-none rounded-tr-none rounded-bl-full rounded-br-full`}
                  >
                    <Text>-</Text>
                  </View>
                </View>

                <View>
                  <Text
                    className={`${historyStyle.color}`}
                    onPress={clickHistory}
                  >
                    History
                  </Text>
                  <View
                    className={` ${historyStyle.line} w-[12px] h-[2px] m-2 ml-3 rounded-tl-none rounded-tr-none rounded-bl-full rounded-br-full`}
                  >
                    <Text>-</Text>
                  </View>
                </View>
              </View>
            </View>
            <List />

            <View className="flex-row m-3 mt-5">
              <View className="mr-2">
                <AntDesign
                  name="pluscircle"
                  size={16}
                  color="rgba(26, 117, 255, 1)"
                  onPress={newReminder}
                />
              </View>
              <Text
                className="text-[#1A75FF] font-bold h-3"
                onPress={newReminder}
              >
                New reminder
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reminder;
