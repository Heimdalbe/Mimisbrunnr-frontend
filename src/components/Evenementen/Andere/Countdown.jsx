import { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = ({ date }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = date - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor(
        (diff % (1000 * 60)) / 1000
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="countdown">
      <div className='countdown-item'>
        <h1>{days}</h1>
        <h2>days</h2>
      </div>
      <div className='countdown-item'>
        <h1>{hours}</h1>
        <h2>hours</h2>
      </div>
      <div className='countdown-item'>
        <h1>{minutes}</h1>
        <h2>minutes</h2>
      </div>
      <div className='countdown-item'>
        <h1>{seconds}</h1>
        <h2>seconds</h2>
      </div>
    </div>
  );
};

export default Countdown;
