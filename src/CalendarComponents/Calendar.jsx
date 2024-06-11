import React from 'react';
import CalCell from './CalCell'
import './Calendar.css'
import { startOfMonth, endOfMonth, differenceInDays, getMonth , getDaysInMonth, format, getDay, getYear, sub} from 'date-fns'

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


function Calendar(props) {
  // date passed in via props.value
  // formatting days on calendar w empty spaces 
  const selDate = props.value
  const firstOfMonth = startOfMonth(selDate)
  const lastOfMonth = endOfMonth(selDate)
  const daysInMonth = getDaysInMonth(selDate)
  const emptyStart = getDay(firstOfMonth)
  const emptyEnd = 6 - getDay(lastOfMonth)

// labels
  const monthName = format(selDate, 'MMMM');
  const curYear = getYear(selDate)

//   button functionality
const prevMonth = () => props.onChange(sub(selDate, {months: 1}))
const nextMonth = () => props.onChange(sub(selDate, {months: -1}))
const prevYear = () => props.onChange(sub(selDate, {years: 1}))
const nextYear = () => props.onChange(sub(selDate, {years: -1}))



  return (
 
      <div className="calendar-container">
        <h1>Clubspot Calendar</h1>       
        <div className='grid'>
            <CalCell onClick={prevYear}> {"<<"}{curYear - 1}</CalCell>
            <CalCell onClick={prevMonth}>{"<"}</CalCell>
            <CalCell className='month-title'>{monthName} {curYear}</CalCell>
            <CalCell onClick={nextMonth}>{">"}</CalCell>
            <CalCell onClick={nextYear}>{curYear +1}{">>"} </CalCell>

            {/* DAYS TITLES */}
            {weekDays.map((day) => {
                return <CalCell key={day} className="day-titles">{day}</CalCell>;
            })}

          {/* {empty cells @ start of month} */}
          {Array.from({ length: emptyStart }, (_, index) => {
              return (
                  <CalCell key={index} ></CalCell>
              );
           })}

            {/* number cells */}
            {Array.from({ length: daysInMonth }, (_, index) => {
              const dayNum = index + 1;
              return (
                  <CalCell key={index} date={new Date(selDate.getFullYear(), selDate.getMonth(), dayNum)}>
                      {dayNum}
                  </CalCell>
              );
          })}

           {/* {empty cells @ end of month} */}
           {Array.from({ length: emptyEnd }, (_, index) => {
              return (
                  <CalCell key={index} ></CalCell>
              );
           })}


        </div> 
      </div>

    
  )
}

export default Calendar
