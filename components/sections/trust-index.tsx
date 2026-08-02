"use client";

import { useEffect, useRef } from "react";

export default function TrustIndex() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?e9cb2cf774b8840dff5692cb923";
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
      data-widget-id="e9cb2cf774b8840dff5692cb923"
    />
  );
}