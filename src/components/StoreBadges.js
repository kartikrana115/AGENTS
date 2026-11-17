function AppleIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.4 2c.1 1-.3 2-.9 2.8-.6.8-1.6 1.4-2.6 1.3-.1-1 .4-2.1 1-2.8.6-.8 1.7-1.4 2.5-1.3Zm2.9 16.6c-.5 1.1-.8 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.4-.9s-2 .9-3.4.9c-1.6 0-2.8-1.6-3.7-3-2.5-4-2.8-8.6-1.1-11.1.9-1.4 2.3-2.3 3.7-2.3 1.4 0 2.3.9 3.4.9 1.1 0 1.8-.9 3.4-.9 1.3 0 2.7.7 3.6 2-.3.2-2.1 1.3-2.1 3.7 0 2.8 2.4 3.7 2.5 3.8-.1.3-.4 1.3-.7 2.1Z" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M6 3.5v17l14-8.5-14-8.5Z" fill="currentColor" />
    </svg>
  );
}

export default function StoreBadges({ stacked = false }) {
  return (
    <div className={`flex items-center gap-3 ${stacked ? "flex-col items-stretch" : "flex-wrap"}`}>
      <a
        href="#"
        className="flex items-center gap-2 rounded-[12px] border border-black bg-black px-4 py-2.5 text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        <AppleIcon />
        <span className="leading-tight text-left">
          <span className="block text-[9px] text-gray-300">Download on the</span>
          <span className="block text-[13px] font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className="flex items-center gap-2 rounded-[12px] border border-black bg-black px-4 py-2.5 text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        <PlayIcon />
        <span className="leading-tight text-left">
          <span className="block text-[9px] text-gray-300">Get it on</span>
          <span className="block text-[13px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
