import { useState } from 'react'
import Calendar from './CalendarComponents/Calendar'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date("2001-10-03"));
  return (
    <>
      <div className='app'>
        <Calendar value={currentDate} onChange={setCurrentDate}/>
      </div>

    </>
  )
}

export default App
