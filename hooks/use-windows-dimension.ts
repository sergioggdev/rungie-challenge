import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 500,
    height: 500,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};
