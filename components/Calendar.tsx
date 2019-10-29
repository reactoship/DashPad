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
  // console.log(upcoming, ")))))))))");
  return upcoming;
};

console.log(getCalendar(), "@@@@@");

const Calendar = () => {
  const [calendar, grabEvents] = useState([]);

  useEffect(() => {
    const nextEvents = async () => {
      const nextEvent = await getCalendar();
      grabEvents(nextEvent);
    };
    nextEvents();
  }, []);
  console.log(calendar, "$$$$$$$");

  return (
    <View style={styles.widget}>
      <Text style={styles.themedText}>
        {calendar.length ? calendar[0].title : null}
      </Text>
    </View>
  );
};

export default Calendar;
