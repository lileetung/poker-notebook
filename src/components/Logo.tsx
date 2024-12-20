const Logo = ({ className = "w-8 h-8 text-emerald-400" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M12 8L14.5 12L12 16L9.5 12L12 8Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default Logo; 