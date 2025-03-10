import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'; // ✅ FullCalendar for scheduling
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import DatePicker from 'react-datepicker'; // ✅ React DatePicker as an alternative
import 'react-datepicker/dist/react-datepicker.css';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Scheduler = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      
      {/* Date Picker */}
      <div className="mb-4 flex justify-center">
        <DatePicker
          selected={currentDate}
          onChange={(date) => setCurrentDate(date)}
          dateFormat="yyyy/MM/dd"
          className="border p-2 rounded"
        />
      </div>

      {/* FullCalendar Component */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={scheduleData}
        editable
        selectable
        dateClick={(info) => setCurrentDate(new Date(info.date))}
        height="650px"
      />
    </div>
  );
};

export default Scheduler;
