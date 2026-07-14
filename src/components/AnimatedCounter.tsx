import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number; // duration in ms
}

export default function AnimatedCounter({ value, duration = 3000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  // Parse the input value, separating numbers from suffixes/prefixes
  // e.g., "50K+" -> numeric: 50, suffix: "K+"
  // e.g., "12,000" -> numeric: 12000, suffix: ""
  const numericMatch = value.match(/[\d,.]+/);
  const numericString = numericMatch ? numericMatch[0].replace(/,/g, '') : '0';
  const targetNumber = parseFloat(numericString);
  
  const suffix = value.replace(/[\d,.]+/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutQuart for a slow, smooth finish
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      const currentCount = targetNumber * easeOut;

      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, targetNumber, duration]);

  // Format the number back (e.g. without decimals if it's a whole number)
  const isDecimal = numericString.includes('.');
  const displayCount = isDecimal 
    ? count.toFixed(1) 
    : Math.floor(count).toString();

  return (
    <span ref={countRef}>
      {displayCount}{suffix}
    </span>
  );
}
