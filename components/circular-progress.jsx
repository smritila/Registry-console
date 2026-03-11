"use client";

import { cn } from "@/lib/utils";

export function CircularProgress({
  value,
  max,
  size = 40,
  strokeWidth = 3,
  className,
  color = "green",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = max > 0 ? (value / max) * 100 : 0;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorClasses = {
    green: "stroke-emerald-500",
    red: "stroke-red-500",
    yellow: "stroke-amber-500",
    blue: "stroke-blue-500",
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className="stroke-muted"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          className={colorClasses[color]}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
            transition: "stroke-dashoffset 0.5s ease",
          }}
        />
      </svg>
      <span className="absolute text-[10px] text-muted-foreground">
        {value}/{max}
      </span>
    </div>
  );
}
