
interface CloseBtnProps {
  onClick?: () => void;
  className?: string;
  colorStops?: string[];
}

export default function CloseBtn({ 
  onClick, 
  className = '', 
  colorStops = ['#FFFFFF', '#D3D3D3', '#FFD700', '#FFA500', '#DAA520']
}: CloseBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`
        absolute top-2 right-2
        w-8 h-8
        flex items-center justify-center
        transition-transform duration-200 ease-in-out
        hover:scale-110 focus:outline-none
        ${className}
      `}
      aria-label="Close"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-[4px]"
          style={{
            stroke: 'url(#rgbGradient)'
          }}
        />
        <defs>
          <linearGradient id="rgbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {colorStops.map((color, index) => (
              <stop 
                key={index} 
                offset={`${(index / (colorStops.length - 1)) * 100}%`} 
                stopColor={color} 
              />
            ))}
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}