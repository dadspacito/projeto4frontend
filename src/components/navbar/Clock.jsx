import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import './Clock.css';


function MyClock() {
  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState(new Date());
 
  const formatter = new Intl.DateTimeFormat ('en-EU', {
    weekday: 'long',
     year: 'numeric', 
     month: 'long',
      day: 'numeric',
    });
 
    const formattedDate = formatter.format(date);
  
 
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div  ><Clock size={100} value={value} />  </div>
      <div className="date"> {formattedDate} </div>
    </div>
  );
}

export default MyClock;