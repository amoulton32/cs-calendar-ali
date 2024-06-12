import { useState } from "react";
import Calendar from "./CalendarComponents/Calendar";
import SelectedDate from "./CalendarComponents/SelectedDate";
import Footer from "./Footer";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <>
      <div className="app">
        <Calendar value={currentDate} onChange={setCurrentDate} />
        <SelectedDate value={currentDate} />
      </div>
      <Footer />
    </>
  );
}

export default App;
