import { View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

const Calendar = ({ date, onChangeDate }) => {
  // Convert the date prop to a Date object if it's not already
  const selectedDate = typeof date === "string" ? new Date(date) : date;

  return (
    <View className="mt-[-20px]">
      <DateTimePicker
        mode="date"
        display="spinner"
        value={selectedDate}
        textColor="white"
        onChange={onChangeDate}
      />
    </View>
  );
};

export default Calendar;
