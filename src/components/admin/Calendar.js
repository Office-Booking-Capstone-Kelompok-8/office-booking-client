import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import './styles.css';

const CalendarComponent = ({ chooseDate }) => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => setDate(date);

  useEffect(() => {
    const dateString = date.toLocaleDateString();
    const dateSplit = dateString.split('/');
    const dateJoin = [...[dateSplit[2], dateSplit[0], dateSplit[1]]].join('-');
    chooseDate(dateJoin);
  }, [date]);

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
