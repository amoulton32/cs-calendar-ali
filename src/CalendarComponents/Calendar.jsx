import React from "react";
import CalCell from "./CalCell";
import "./Calendar.css";
import {
  startOfMonth,
  endOfMonth,
  getDaysInMonth,
  format,
  getDay,
  getYear,
  sub,
  add,
  setDate,
} from "date-fns";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Calendar(props) {
  const selDate = props.value;
  const firstOfMonth = startOfMonth(selDate);
  const lastOfMonth = endOfMonth(selDate);
  const daysInMonth = getDaysInMonth(selDate);
  const emptyStart = getDay(firstOfMonth);
  const emptyEnd = 6 - getDay(lastOfMonth);

  // labels
  const monthName = format(selDate, "MMMM");
  const curYear = getYear(selDate);

  // button functionality
  const prevMonth = () => props.onChange(sub(selDate, { months: 1 }));
  const nextMonth = () => props.onChange(sub(selDate, { months: -1 }));
  const prevYear = () => props.onChange(sub(selDate, { years: 1 }));
  const nextYear = () => props.onChange(add(selDate, { years: 1 }));
  
  const handleClickDay = (dayNum) => {
    const date = setDate(selDate, dayNum);
    props.onChange(date);
  };

  const handleToday = () => props.onChange(new Date());

  return (
    <div className="calendar-container">
      <div className="cal-title">
        <img src="https://pub-mediabox-storage.rxweb-prd.com/exhibitor/logo/exh-3d935634-c54b-4ac3-899b-bdc8376a33e2/desktop-large/3d5149ba-0d2b-4f3c-bfb9-bec14c96dbcb.png" />
        <h1> CALENDAR</h1>
        <button className="today-button" onClick={handleToday}>
          Today
        </button>
      </div>
      <div className="cal-header">
        <h4 className="month-title">
          {monthName} {curYear}
        </h4>
        <div className="month-buttons">
          <button className="clickable" onClick={prevMonth}>
            {"<"}
          </button>
          <button className="clickable" onClick={nextMonth}>
            {">"}
          </button>
        </div>
      </div>

      <div className="grid">
        {/* Day titles */}
        {weekDays.map((day) => {
          return (
            <CalCell key={day} className="day-titles">
              {day}
            </CalCell>
          );
        })}

        {/* {empty cells @ start of month} */}
        {Array.from({ length: emptyStart }, (_, index) => {
          return <CalCell key={index}></CalCell>;
        })}

        {/* Date number cells */}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const dayNum = index + 1;
          const isSelDate = dayNum === selDate.getDate();
          return (
            <CalCell
              key={dayNum}
              className={`clickable ${isSelDate ? "selected-date" : ""}`}
              onClick={() => handleClickDay(dayNum)}
            >
              {dayNum}
            </CalCell>
          );
        })}

        {/* {empty cells @ end of month} */}
        {Array.from({ length: emptyEnd }, (_, index) => {
          return <CalCell key={index}></CalCell>;
        })}
      </div>

      {/* year nav buttons */}
      <div className="year-buttons">
        <button className="clickable" onClick={prevYear}>
          {"<<"}
        </button>
        <p>Year</p>
        <button className="clickable" onClick={nextYear}>
          {">>"}
        </button>
      </div>
    </div>
  );
}

export default Calendar;
