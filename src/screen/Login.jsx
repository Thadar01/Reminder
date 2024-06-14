import { View, Text } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
const Login = ({ close }) => {
  const [show, setShow] = useState("true");
  const securePassword = () => {
    setShow(!show);
  };
  return (
    <View>
      <View className="flex-row">
        <View className="ml-2 mt-1">
          <AntDesign name="close" size={24} color="white" onPress={close} />
        </View>
        <View className=" w-[80%] flex items-center justify-center">
          <Text className="text-white text-3xl">Customizedai.io</Text>
        </View>
      </View>
      <View className="my-8">
        <TextInput
          placeholder="Enter email address"
          className="bg-[#FFFFFF1A] text-white rounded-full p-5 m-2 mx-4"
          placeholderTextColor={"#A799B4"}
        />
        <View className="bg-[#FFFFFF1A] text-white rounded-full h-[55px] m-2 mx-4 flex-row  items-center">
          <TextInput
            placeholder="Enter Password"
            className=" text-white w-[70%] m-3 mr-10 p-2"
            placeholderTextColor={"#A799B4"}
            secureTextEntry={show}
          />
          <View className="flex items-end ">
            <Text
              className="text-white w-[40px] h-[25px] text-center p-1"
              onPress={securePassword}
            >
              Show
            </Text>
          </View>
        </View>
      </View>
      <View className=" flex items-center">
        <Text className="text-white text-[11px]">
          We'll send you email to comfirm. Standard messsage and data rates
          apply.
        </Text>
      </View>
      <View>
        <View className="mt-8 mx-3">
          <LinearGradient
            colors={["#9860E4", "#613D90"]}
            style={{
              alignItems: "center",
              borderRadius: 100,
              height: 50,
              justifyContent: "center",
            }}
          >
            <Text className="text-white text-xl font-bold">Sign Up</Text>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Login;
