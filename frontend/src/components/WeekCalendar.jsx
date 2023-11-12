import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, {useState} from 'react'

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
})

const localizer = momentLocalizer(moment);


const WeekCalendar = (props) => {

  const formats = {
    dayFormat: (date, culture, localizer) =>
      localizer.format(date, 'dddd', culture),
  }

  return (
    <div className="week-calendar-container">
      <Calendar
        localizer={localizer}
        events={props.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500}}
        view="week"
        formats={formats}
        min={new Date().setHours(6, 0, 0)}
        max={new Date().setHours(20, 0, 0)}
        toolbar={false}
        step={60}
        dayPropGetter={date => {
          const style = {}
          style.backgroundColor = '#fff'
          return { style }
        }}

        eventPropGetter={event => {
          const style = {}
          style.minWidth = '150%'
          style.borderRadius = '0'
          return { style }
        }}
      />
    </div>
  )
}

export default WeekCalendar
