'use client'
import { useEffect, useRef, useState } from "react"

export default function useScrollReveal(options?:IntersectionObserverInit) {
  const ref= useRef<HTMLDivElement  | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    const observer = new IntersectionObserver(([entry])=>{
      // const entry= entries[0]
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    },options||{threshold:0.2});

    if(ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  },[options])
  return {ref, visible}
}
