import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import './styles.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => setDate(date);
  console.log(date);
  return (
    <Calendar
      value={date}
      onChange={onChange}
      tileClassName={(date, view) => {
        if (
          new Date(date.date).getTime() === new Date('11/22/2022').getTime()
        ) {
          return 'highlight';
        }
      }}
    />
  );
};

export default CalendarComponent;
