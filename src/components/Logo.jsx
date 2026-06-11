export default function Logo() {
  return (
    <svg 
      viewBox="0 0 16 16" 
      className="w-8 h-8"
      fill="none"
    >
      <rect x="2" y="2" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.9)"/>
      <rect x="9" y="2" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.6)"/>
      <rect x="2" y="9" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.6)"/>
      <rect x="9" y="9" width="5" height="5" rx="1.5" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}
