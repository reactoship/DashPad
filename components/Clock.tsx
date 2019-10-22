import React, { useState, useEffect } from "react";
import { AppRegistry, View, Text, StyleSheet, Platform } from "react-native";
import styles from "../Styles";

const getCurrentTime = () => {
  let hour: string | number = new Date().getHours();
  let minutes: string | number = new Date().getMinutes();
  let seconds: string | number = new Date().getSeconds();
  let am_pm: string = "pm";

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

  return `${hour}:${minutes}:${seconds} ${am_pm}`;
};

const Clock = props => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <View style={styles.widget}>
      <Text style={styles.themedText}>{time}</Text>
    </View>
  );
};


export default Clock;

