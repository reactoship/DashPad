import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
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
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const nextEvents = async () => {
      const nextEvent = await getCalendar();
      setCalendar(nextEvent);
    };
    nextEvents();
  }, []);

  let today = calendar.filter(
    holiday => holiday.originalStartDate === new Date()
  );

  let upcoming = calendar.filter(
    holiday => holiday.originalStartDate !== new Date()
  );
  console.log(upcoming, "****");

  return (
    <SafeAreaView style={styles.widget}>
      <ScrollView>
        <Text style={styles.themedText}>On Today's Agenda</Text>
        {today.length ? (
          today.map(holiday => {
            return (
              <Text styles={styles.themedText} key={holiday.id}>
                {holiday.title}
              </Text>
            );
          })
        ) : (
          <Text style={styles.themedText}>No events today</Text>
        )}
        <Text style={styles.themedText}>Upcoming Events</Text>

        {upcoming.length ? (
          upcoming.map(holiday => (
            <Text style={styles.themedText} key={holiday.id}>
              {holiday.title}
            </Text>
          ))
        ) : (
          <Text style={styles.themedText}>Go make some plans</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calendar;
