import React from "react";

interface ProgressIndicatorProps {
  percentage: number;
  time: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  percentage,
  time,
}) => {
  return (
    <div className="relative">
      <div
        className="flex flex-col items-center justify-center gap-y-2"
        style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-1 h-10 bg-red-500 rounded-md relative -mb-4 group">
          <p
            className="absolute z-10 inline-block px-3 py-2 text-sm font-light text-white transition-opacity duration-300 bg-red-500 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 group-hover:visible tooltip"
            style={{
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginBottom: "5px",
            }}
          >
            {time}
            <div className="tooltip-arrow" data-popper-arrow></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
