export default function HeroIllustration(props) {
  return (
    <svg
      viewBox="0 0 480 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx="240" cy="330" rx="170" ry="18" fill="#DBEAFE" />

      {/* soap bubbles */}
      <circle cx="80" cy="90" r="14" fill="#BFDBFE" opacity="0.8" />
      <circle cx="60" cy="130" r="8" fill="#93C5FD" opacity="0.7" />
      <circle cx="410" cy="80" r="12" fill="#BFDBFE" opacity="0.8" />
      <circle cx="430" cy="130" r="7" fill="#93C5FD" opacity="0.7" />
      <circle cx="120" cy="60" r="6" fill="#93C5FD" opacity="0.6" />
      <circle cx="380" cy="50" r="6" fill="#93C5FD" opacity="0.6" />

      {/* car body */}
      <path
        d="M95 250c0-18 10-30 25-36l24-38c8-13 22-21 37-21h118c15 0 29 8 37 21l24 38c15 6 25 18 25 36v22c0 9-7 16-16 16H111c-9 0-16-7-16-16v-22Z"
        fill="#2563EB"
      />
      <path
        d="M95 250c0-18 10-30 25-36l24-38c8-13 22-21 37-21h118c15 0 29 8 37 21l24 38c15 6 25 18 25 36"
        stroke="#1D4ED8"
        strokeWidth="2"
      />

      {/* windows */}
      <path
        d="M170 176l18-27c5-7 13-11 21-11h62c8 0 16 4 21 11l18 27H170Z"
        fill="#EFF6FF"
      />
      <path d="M240 176v-38" stroke="#2563EB" strokeWidth="2" />

      {/* wheels */}
      <circle cx="160" cy="272" r="26" fill="#0F172A" />
      <circle cx="160" cy="272" r="11" fill="#E2E8F0" />
      <circle cx="320" cy="272" r="26" fill="#0F172A" />
      <circle cx="320" cy="272" r="11" fill="#E2E8F0" />

      {/* headlight & detail */}
      <rect x="380" y="230" width="16" height="10" rx="3" fill="#FDE68A" />
      <rect x="120" y="245" width="70" height="8" rx="4" fill="#60A5FA" />
      <rect x="230" y="245" width="90" height="8" rx="4" fill="#3B82F6" />

      {/* water/foam drips */}
      <path
        d="M150 300c4 6 4 12 0 18M240 305c4 6 4 12 0 18M330 300c4 6 4 12 0 18"
        stroke="#93C5FD"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* sparkle stars */}
      <path d="M400 150l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" fill="#93C5FD" />
      <path d="M60 190l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill="#60A5FA" />
    </svg>
  );
}
