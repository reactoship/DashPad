import React, { useState } from "react";
import { AppRegistry, View, Text, StyleSheet, Platform } from "react-native";

const Clock = props => {
  const [date, getDate] = useState(null);

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = "pm";

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = "am";
    }

    return `${hour}:${minutes}:${seconds}:${am_pm}`;
  };

  return (
    <View style={props.style}>
      <Text>This is a Clock</Text>
    </View>
  );
};

export default Clock;
