import { View, Text, SafeAreaView, Button, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";

const Reward = () => {
  return (
    <SafeAreaView className="flex-1 justify-center  ">
      <View className=" h-[50%] items-center">
        <View className="flex-row ">
          <View className="bg-[#B99CF1] rounded-[100%] w-6 h-6 mr-2 items-center justify-center p-1">
            <FontAwesome6 name="check" size={13} color="white" />
          </View>

          <Text className="text-xl text-white">Signup Setup Success</Text>
        </View>
        <View className="mt-7 w-[60%] items-center">
          <Text className="text-3xl text-white">You get 240 points</Text>
        </View>
        <View className=" w-[60%] items-center">
          <Text className="text-3xl text-white"> Congrats Emma !</Text>
        </View>
        <View>
          <Text className="mt-3 text-white">
            For completing the SignUp Process,we gift you 240 points Get 240
            points.
          </Text>
        </View>
        <View className="w-[95%] mt-10 ">
          <LinearGradient
            colors={["#9860E4", "#613D90"]}
            style={{
              alignItems: "center",
              borderRadius: 100,
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text>Claim</Text>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reward;
