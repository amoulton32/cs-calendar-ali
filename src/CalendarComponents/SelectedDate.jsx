import React from "react";
import "./SelectedDate.css";
import { format, differenceInCalendarDays, sub, add } from "date-fns";

function SelectedDate(props) {
  const selDate = props.value;
  const today = new Date();
  const yesterday = sub(today, { days: 1 });
  const tomorrow = add(today, { days: 1 });

  let displayDate;
  const diffInDays = differenceInCalendarDays(selDate, today);

  if (diffInDays === 0) {
    displayDate = "Today";
  } else if (diffInDays === -1) {
    displayDate = "Yesterday";
  } else if (diffInDays === 1) {
    displayDate = "Tomorrow";
  } else {
    displayDate = format(selDate, "MMMM dd, yyyy");
  }

  const handleAddTask = () => {
    alert(
      "This button is currently non-functional and was created merely to demostrate an attractive UI"
    );
  };

  return (
    <div className="selecteddate-container">
      <div className="today-title">
        <h1>Selected Date:</h1>
        <h3>{displayDate}</h3>
      </div>
      <div className="selected-list">
        <h4>Nothing planned yet</h4>
        <button onClick={handleAddTask}>Add tasks</button>
      </div>
    </div>
  );
}

export default SelectedDate;
