import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
  Pressable,
} from "react-native";
import Calendar from "./components/Calendar"; // Ensure the import matches the export in the Calendar file
import Time from "./Time";

import useStore from "../store";
import { FlatList } from "react-native-gesture-handler";

import { router } from "expo-router";
import { format, parse } from "date-fns";
import { current } from "immer";

const AddReminder = () => {
  const { list, addList, historylist, addHistoryList } = useStore();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());

  const [am, setAM] = useState("AM");
  const [hour, setHour] = useState("");
  const [min, setMin] = useState("");

  const onChangeHour = (text) => {
    setHour(text);
  };

  const onChangeMin = (text) => {
    setMin(text);
  };

  const onChangeDate = ({ type }, selectedDate) => {
    if (type === "set") {
      setDate(selectedDate);
    }
  };
  const clickAdd = () => {
    const Hour = parseInt(hour, 10);
    const minute = parseInt(min, 10);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const UformattedDate = date.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString([], {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    const UformattedTime = hour + ":" + min + " " + am;
    if (title == "") {
      Alert.alert("Requied", "Title is required.", [{ text: "OK" }]);
    } else if (
      UformattedDate == formattedDate ||
      UformattedDate > formattedDate
    ) {
      // console.log(forma);
      let newdata = {
        id: list.length,
        title: title,
        hour: hour,
        min: min,
        date: date,
        am: am,
      };

      addList(newdata);

      router.push("reminder");
      setTitle("");
      setAM("");
      setDate(new Date());
      setHour("");
      setMin("");
    } else {
      let historydata = {
        id: historylist.id,
        title: title,
        hour: hour,
        min: min,
        date: date,
        am: am,
      };
      addHistoryList(historydata);
      router.push("reminder");
      setTitle("");
      setAM("");
      setDate(new Date());
      setHour("");
      setMin("");
    }
  };
  const clickCancle = () => {
    router.push("reminder");
    setTitle("");
    setAM("");
    setDate(new Date());
    setHour("");
    setMin("");
  };
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="bg-[#120022] h-[100%]">
            <View className="flex-row justify-between m-2">
              <View className=" h-[25px]">
                <Pressable onPress={clickCancle} className="h-[25px]">
                  <Text className="text-[#589FFF] text-[16px] font-bold">
                    Cancel
                  </Text>
                </Pressable>
              </View>

              <Text className="text-white text-[16px] font-bold">
                New Reminder
              </Text>

              <View className=" h-[25px] w-[50px] items-center">
                <Pressable onPress={clickAdd} className="h-[25px] w-[50px]">
                  <Text className="text-[#589FFF] text-[16px] font-bold ml-5">
                    Add
                  </Text>
                </Pressable>
              </View>
            </View>
            <View className="flex items-center mt-2">
              <TextInput
                className="w-[355px] h-[58px] bg-[#41334E] rounded-md text-white p-3"
                placeholder="Title"
                placeholderTextColor="white"
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View className="m-4">
              <Text className="text-[20px] text-white font-bold">
                Date & Time
              </Text>
            </View>
            <Calendar date={date} onChangeDate={onChangeDate} />
            <View>
              <Time
                hour={hour}
                min={min}
                setHour={onChangeHour}
                setMin={onChangeMin}
                am={am}
                setAM={setAM}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddReminder;
