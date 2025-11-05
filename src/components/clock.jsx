import { useEffect, useState } from "react";
import { Clock as ClockIcon } from "lucide-react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex align-items-center text-white-50">
      <ClockIcon size={16} className="me-2" />
      <span className="small fw-medium">
        {time.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: true 
        })}
      </span>
    </div>
  );
};

export default Clock;
