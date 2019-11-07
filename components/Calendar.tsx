import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
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
  // console.log(upcoming, ")))))))))");
  return upcoming;
};

console.log(getCalendar(), "@@@@@");

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const nextEvents = async () => {
      const nextEvent = await getCalendar();
      setCalendar(nextEvent);
    };
    nextEvents();
  }, []);

  return (
    <View style={styles.widget}>
      {calendar.map(holiday => {
        return (
          <Text style={styles.themedText} key={holiday.id}>
            {holiday.title}
          </Text>
        );
      })}
    </View>
  );
};

export default Calendar;
