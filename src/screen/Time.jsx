import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
const Time = ({
  hour,
  min,
  onChangeHour,
  onChangeMin,
  am,
  setAM,
  setHour,
  setMin,
}) => {
  const [selectHour, setSelectHour] = useState("#36343B");
  const [selectMinute, setSelectMinute] = useState("#36343B");
  const [borderHour, setBorderHour] = useState("none");
  const [borderMinute, setBorderMinute] = useState("none");

  return (
    <SafeAreaView className="mt-[-20px]">
      <View className=" ] flex justify-center items-center">
        <View className="flex-row">
          <View className="w-[96px] h-[59px]">
            <TextInput
              style={[
                styles.input,
                { backgroundColor: selectHour },
                { borderColor: borderHour },
              ]}
              placeholder="00"
              placeholderTextColor={"white"}
              value={hour}
              onChangeText={setHour}
              keyboardType="numeric"
              maxLength={2}
              onFocus={() => {
                setSelectHour("#8D59D3");
                setBorderHour("#D0BCFF");
              }}
              onBlur={() => {
                setSelectHour("#36343B");
                setBorderHour("transparent");
                {
                  onChangeHour;
                }
              }}
            />
            <View className="mt-2">
              <Text className="text-[#CAC4D0]">Hour</Text>
            </View>
          </View>
          <View className="w-[24px] h-[28px] flex items-center">
            <Text className="text-white text-[30px]">:</Text>
          </View>
          <View className="w-[96px] h-[59px]">
            <TextInput
              style={[
                styles.input,
                { backgroundColor: selectMinute },
                { borderColor: borderMinute },
              ]}
              placeholder="00"
              placeholderTextColor={"white"}
              value={min}
              onChangeText={setMin}
              keyboardType="numeric"
              maxLength={2}
              onFocus={() => {
                setSelectMinute("#8D59D3");
                setBorderMinute("#D0BCFF");
              }}
              onBlur={() => {
                setSelectMinute("#36343B");
                setBorderMinute("transparent");
                {
                  onChangeMin;
                }
              }}
            />
            <View className="mt-2">
              <Text className="text-[#CAC4D0]">Minute</Text>
            </View>
          </View>
          <View className="w-[104px] h-[24px]  flex-row ml-3">
            <View
              className={`{ ${
                am == "AM"
                  ? "bg-[#230143]  border-b-[1px] border-[#938F99] "
                  : "bg-none"
              } w-[50%]   justify-center items-center}`}
            >
              <Pressable
                className=" flex items-center justify-center w-[100%]"
                onPress={() => {
                  setAM("AM");
                }}
              >
                <Text className="text-white font-bold">AM</Text>
              </Pressable>
            </View>
            <View
              className={`{  ${
                am == "PM"
                  ? "bg-[#230143]  border-b-[1px] border-[#938F99]"
                  : "bg-none"
              } w-[50%]    justify-center items-center}`}
            >
              <Pressable
                className=" flex items-center justify-center w-[100%]"
                onPress={() => setAM("PM")}
              >
                <Text className="text-white font-bold">PM</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 96,
    height: 36,
    textAlign: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "",
    color: "white",
    fontSize: 24,
  },
});
export default Time;
