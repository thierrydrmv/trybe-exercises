import { useEffect } from 'react';
function useTimer(callback, time) {
  useEffect(() => {
    const interval = setInterval(() => {
      callback()
    }, time)

    return () => {
      clearInterval(interval)
    };
  },[callback, time]);
}

export default useTimer;