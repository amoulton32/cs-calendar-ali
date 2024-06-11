import React from 'react';
import CalCell from './CalCell'
import './Calendar.css'

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


function Calendar(props) {
  // date passed in via props.value
  console.log(props.value)
  return (
 
      <div className="calendar-container">
        <h1>Clubspot Calendar</h1>       
        <div className='grid'>
            <CalCell>{"<<"} 2023</CalCell>
            <CalCell>{"<"} jan</CalCell>
            <CalCell className='month-title'>February 2024</CalCell>
            <CalCell>{">"} mar</CalCell>
            <CalCell>{">>"} 2025</CalCell>

            {/* DAYS TITLES */}
            {weekDays.map((day) => {
                return <CalCell key={day} className="day-titles">{day}</CalCell>;
            })}

            {/* number cells */}
            {/* Render calendar cells for days */}
            {Array(35).fill(null).map((_, index) => (
                <CalCell key={index} date={new Date(2024, 1, index + 1)} />
            ))}


        </div> 
      </div>

    
  )
}

export default Calendar
