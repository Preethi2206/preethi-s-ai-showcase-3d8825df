const SectionDivider = () => (
  <div className="relative h-24 overflow-hidden">
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="absolute bottom-0 w-full h-full"
    >
      <defs>
        <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(174 72% 52%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(174 72% 52%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(280 65% 60%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,50 Q360,0 720,50 T1440,50" fill="none" stroke="url(#divGrad)" strokeWidth="1.5" />
      <path d="M0,60 Q360,20 720,60 T1440,60" fill="none" stroke="url(#divGrad)" strokeWidth="0.8" opacity="0.5" />
    </svg>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
  </div>
);

export default SectionDivider;
