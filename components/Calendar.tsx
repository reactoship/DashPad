import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import styles from "../Styles";
import * as calendar from "expo-calendar";
import * as Permissions from "expo-permissions";

const getCalendar = async () => {
  await Permissions.askAsync("calendar");
  const events = await calendar.getCalendarsAsync("event");

  const calendarIDs = [];
  events.forEach(calendar => calendarIDs.push(calendar.id));

  let day = new Date();
  let fourDaysOut = new Date(day);
  fourDaysOut.setDate(day.getDate() + 4);

  const upcoming = await calendar.getEventsAsync(calendarIDs, day, fourDaysOut);

  return upcoming;
};

const Calendar = () => {
  const [calendar, grabEvents] = useState([]);

  useEffect(() => {
    grabEvents(getCalendar());
  }, []);
  console.log(calendar, "$$$$$$$");

  return (
    <View style={styles.widget}>
      <Text style={styles.themedText}>This is a Calendar</Text>
    </View>
  );
};

export default Calendar;
