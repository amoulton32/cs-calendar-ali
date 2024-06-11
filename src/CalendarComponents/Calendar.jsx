import CalCell from './CalCell'
import './Calendar.css'

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function Calendar() {
  return (
    <>
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
                return <CalCell className="day-titles">{day}</CalCell>;
            })}
        </div> 
      </div>

    </>
  )
}

export default Calendar
