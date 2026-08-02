"use client";

import { useEffect, useRef } from "react";

export default function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?bf3def07762c959906268fe6699";
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="trustindex-widget"
      data-widget-id="bf3def07762c959906268fe6699"
    />
  );
}