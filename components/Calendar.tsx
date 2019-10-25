import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../Styles";
// import RNCalendarEvents from "react-native-calendar-events";
import * as Calendar from "expo-calendar";
import * as Permissions from "expo-permissions";

// const getAuth = () => {
//   RNCalendarEvents.authorizationStatus()
//     .then(status => {
//       return status;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

const calendarWwidget = () => {
  // const [authStatus, setAuth] = useState("");
  // useEffect(() => {
  //   setAuth(getAuth());
  // }, []);

  const calEvents = Calendar.getCalendarsAsync("Calendar.EntityTypes.EVENT");
  return (
    <View style={styles.widget}>
      <Text style={styles.themedText}>{calEvents}</Text>
    </View>
  );
};

export default calendarWwidget;
