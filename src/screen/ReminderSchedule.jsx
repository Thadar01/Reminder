import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ReminderSchedule = () => {
  return (
    <ImageBackground source={require("../images/bg1.png")} className="flex-1">
      <SafeAreaView>
        <View className="bg-[#0A031F]h-[85%] mt-3">
          <View className="flex-row justify-between m-3">
            <View>
              <AntDesign name="arrowleft" size={24} color="white" />
            </View>
            <Text className="text-white text-[22px]">Yoon Me (Assitant)</Text>
            <View className="mr-3">
              <SimpleLineIcons name="menu" size={20} color="white" />
            </View>
          </View>
          <View className="flex items-center mt-5">
            <Text className="text-[#B8B2BD] text-[12px]">
              24 Jan 2024, Monday
            </Text>
          </View>
          <View className="h-[42px] flex-row justify-end m-4">
            <View className="bg-[#8D59D3] w-[210px] justify-center rounded-2xl mr-3">
              <Text className="text-[#89F8FF] ml-3 text-[14px] font-bold">
                @reminder
              </Text>
            </View>

            <Image
              source={require("../images/image1.jpg")}
              className="w-[40px] h-[40px] rounded-full"
            />
          </View>
          <View>
            <View>
              <LinearGradient
                colors={["#23014380", "#12002280"]}
                className="w-[40px] h-[40px] rounded-full items-center justify-center"
              >
                <AntDesign name="user" size={24} color="white" />
              </LinearGradient>
            </View>
            <View></View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ReminderSchedule;
