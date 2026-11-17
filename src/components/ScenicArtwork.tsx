import React from 'react';
import { ArtworkVariant } from '../types/tourism';

interface ScenicArtworkProps {
  variant: ArtworkVariant;
  className?: string;
  title?: string;
}

export const ScenicArtwork: React.FC<ScenicArtworkProps> = ({
  variant,
  className = 'w-full h-full',
  title,
}) => {
  const uid = React.useId().replace(/:/g, '');

  switch (variant) {
    case 'hero-panorama':
      return (
        <svg
          viewBox="0 0 800 560"
          className={className}
          role="img"
          aria-label={title || 'Panorama pegunungan dan lembah pinus Desa Wisata Lereng Asri'}
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="42%" stopColor="#F8E7C9" />
              <stop offset="100%" stopColor="#CAEAD4" />
            </linearGradient>
            <linearGradient id={`sun-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id={`mist-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEF9F0" stopOpacity="0" />
              <stop offset="100%" stopColor="#FEF9F0" stopOpacity="0.88" />
            </linearGradient>
          </defs>

          <rect width="800" height="560" fill={`url(#sky-${uid})`} />

          {/* Rising mountain sun */}
          <circle cx="565" cy="175" r="74" fill={`url(#sun-${uid})`} />
          <circle cx="565" cy="175" r="46" fill="#FBBF24" opacity="0.85" />

          {/* Far volcanic peaks */}
          <path
            d="M0 320 L135 205 L245 270 L410 155 L560 250 L685 180 L800 245 L800 560 L0 560 Z"
            fill="#85A490"
            opacity="0.72"
          />

          {/* Mid highland ridges */}
          <path
            d="M0 365 Q160 280 320 335 T640 310 T800 345 L800 560 L0 560 Z"
            fill="#304D3D"
          />

          {/* Morning mist band */}
          <rect x="0" y="295" width="800" height="115" fill={`url(#mist-${uid})`} />

          {/* Terraced tea & rice slopes */}
          <path
            d="M0 415 Q220 365 440 410 T800 395 L800 560 L0 560 Z"
            fill="#1E3A2B"
          />
          <path
            d="M0 450 Q190 420 420 455 T800 435"
            fill="none"
            stroke="#388E3C"
            strokeWidth="3"
            opacity="0.7"
          />
          <path
            d="M0 482 Q240 455 490 488 T800 470"
            fill="none"
            stroke="#AECEB9"
            strokeWidth="2"
            opacity="0.45"
          />

          {/* Foreground deep forest canopy & pine silhouettes */}
          <path
            d="M0 480 L55 405 L105 468 L165 390 L220 470 L280 425 L340 495 L800 495 L800 560 L0 560 Z"
            fill="#072417"
          />
          {/* Pine spires */}
          <g fill="#072417">
            <polygon points="75,390 48,478 102,478" />
            <polygon points="138,370 106,472 170,472" />
            <polygon points="690,400 660,492 720,492" />
            <polygon points="745,382 710,492 780,492" />
          </g>

          {/* Subtle traditional wooden viewing deck & pavilion */}
          <g transform="translate(465, 398)">
            <path d="M12 46 L48 22 L84 46 Z" fill="#D97706" />
            <rect x="22" y="46" width="52" height="28" fill="#341800" />
            <rect x="34" y="54" width="28" height="20" fill="#FEF3C7" opacity="0.85" />
          </g>
        </svg>
      );

    case 'sunrise-peak':
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id={`sr-sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="55%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#AECEB9" />
            </linearGradient>
          </defs>
          <rect width="640" height="400" fill={`url(#sr-sky-${uid})`} />
          <circle cx="430" cy="145" r="56" fill="#D97706" opacity="0.85" />
          <circle cx="430" cy="145" r="36" fill="#FBBF24" />
          <path d="M0 250 L140 165 L270 230 L420 150 L560 225 L640 190 L640 400 L0 400 Z" fill="#486554" />
          <path d="M0 295 Q180 255 360 290 T640 280 L640 400 L0 400 Z" fill="#FEF9F0" opacity="0.6" />
          <path d="M0 320 L185 265 L355 315 L520 275 L640 315 L640 400 L0 400 Z" fill="#072417" />
          <rect x="115" y="292" width="110" height="8" rx="3" fill="#D97706" />
          <line x1="125" y1="300" x2="125" y2="338" stroke="#6E3900" strokeWidth="5" />
          <line x1="215" y1="300" x2="215" y2="338" stroke="#6E3900" strokeWidth="5" />
        </svg>
      );

    case 'waterfall':
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id={`wf-bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CAEAD4" />
              <stop offset="100%" stopColor="#1E3A2B" />
            </linearGradient>
            <linearGradient id={`wf-water-${uid}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FEF9F0" />
              <stop offset="100%" stopColor="#AECEB9" />
            </linearGradient>
          </defs>
          <rect width="640" height="400" fill={`url(#wf-bg-${uid})`} />
          <path d="M0 100 Q150 70 250 110 L250 320 L0 320 Z" fill="#1E3A2B" />
          <path d="M390 105 Q510 75 640 100 L640 320 L390 320 Z" fill="#072417" />
          {/* Cascading waterfall streams */}
          <rect x="265" y="75" width="46" height="235" rx="14" fill={`url(#wf-water-${uid})`} opacity="0.92" />
          <rect x="322" y="95" width="32" height="215" rx="12" fill={`url(#wf-water-${uid})`} opacity="0.82" />
          {/* Misty pool */}
          <ellipse cx="315" cy="322" rx="185" ry="38" fill="#CAEAD4" />
          <ellipse cx="315" cy="320" rx="120" ry="20" fill="#FEF9F0" opacity="0.65" />
          {/* Tropical fern leaves */}
          <path d="M0 340 Q95 275 180 355 L0 400 Z" fill="#106D20" />
          <path d="M460 365 Q545 280 640 335 L640 400 L460 400 Z" fill="#072417" />
        </svg>
      );

    case 'tea-coffee':
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="640" height="400" fill="#F8F3EA" />
          <circle cx="140" cy="95" r="42" fill="#FEF3C7" />
          <path d="M0 190 Q180 120 380 185 T640 165 L640 400 L0 400 Z" fill="#85A490" />
          <path d="M0 230 Q210 175 430 235 T640 215 L640 400 L0 400 Z" fill="#388E3C" />
          <path d="M0 280 Q240 230 460 285 T640 265 L640 400 L0 400 Z" fill="#1E3A2B" />
          <path d="M0 335 Q240 295 480 338 T640 320 L640 400 L0 400 Z" fill="#072417" />
          {/* Coffee cup accent */}
          <g transform="translate(455, 255)">
            <rect x="0" y="18" width="64" height="46" rx="12" fill="#FEF9F0" />
            <path d="M64 26 Q84 26 84 40 Q84 54 64 54" fill="none" stroke="#FEF9F0" strokeWidth="7" />
            <ellipse cx="32" cy="18" rx="28" ry="7" fill="#6E3900" />
            <path d="M22 4 Q26 -8 20 -18 M40 4 Q44 -8 38 -18" fill="none" stroke="#FEF3C7" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'pine-forest':
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="640" height="400" fill="#CAEAD4" />
          <rect x="0" y="255" width="640" height="145" fill="#1E3A2B" />
          {[95, 190, 295, 415, 525].map((x, idx) => (
            <g key={x} transform={`translate(${x}, ${idx % 2 === 0 ? 75 : 95})`}>
              <rect x="-7" y="135" width="14" height="80" fill="#532A00" />
              <polygon points="0,0 -48,75 48,75" fill={idx % 2 === 0 ? '#072417' : '#106D20'} />
              <polygon points="0,36 -58,122 58,122" fill={idx % 2 === 0 ? '#1E3A2B' : '#072417'} />
              <polygon points="0,78 -66,165 66,165" fill="#072417" />
            </g>
          ))}
          {/* Winding forest trail */}
          <path d="M250 400 Q310 330 355 290 Q390 265 440 255 L465 255 Q410 278 395 315 Q380 355 415 400 Z" fill="#F2EDE4" opacity="0.85" />
        </svg>
      );

    case 'batik-craft':
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="640" height="400" fill="#F2EDE4" />
          <rect x="48" y="48" width="544" height="304" rx="18" fill="#FEF9F0" stroke="#D97706" strokeWidth="2" />
          {/* Botanical leaf motifs */}
          <g fill="#1E3A2B" opacity="0.9">
            <path d="M180 280 Q150 170 250 110 Q275 210 180 280 Z" />
            <path d="M320 300 Q300 165 420 120 Q430 235 320 300 Z" fill="#388E3C" />
            <path d="M445 270 Q475 170 535 155 Q530 245 445 270 Z" fill="#D97706" opacity="0.85" />
          </g>
          <path d="M180 280 L250 110 M320 300 L420 120 M445 270 L535 155" stroke="#FEF9F0" strokeWidth="2.5" />
          {/* Joglo roof silhouette */}
          <path d="M90 120 L150 75 L210 120 Z" fill="#532A00" />
        </svg>
      );

    case 'strawberry-farm':
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="640" height="400" fill="#FEF9F0" />
          <path d="M0 230 Q220 185 440 225 T640 205 L640 400 L0 400 Z" fill="#CAEAD4" />
          <path d="M0 280 Q240 245 480 285 T640 270 L640 400 L0 400 Z" fill="#388E3C" />
          {/* Stylized berries & leaves */}
          {[165, 315, 465].map((cx) => (
            <g key={cx} transform={`translate(${cx}, 215)`}>
              <path d="M0 -18 C22 -18 28 8 0 38 C-28 8 -22 -18 0 -18 Z" fill="#BA1A1A" />
              <path d="M-18 -18 L0 -8 L18 -18 L6 -26 L-6 -26 Z" fill="#106D20" />
              <circle cx="-6" cy="2" r="2" fill="#FEF3C7" />
              <circle cx="7" cy="8" r="2" fill="#FEF3C7" />
              <circle cx="0" cy="20" r="2" fill="#FEF3C7" />
            </g>
          ))}
        </svg>
      );

    case 'river-tubing':
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="640" height="400" fill="#CAEAD4" />
          <path d="M0 120 Q160 80 320 130 T640 110 L640 400 L0 400 Z" fill="#1E3A2B" />
          {/* Winding mountain river */}
          <path
            d="M110 400 Q190 310 305 270 Q420 230 375 150 L455 150 Q510 245 380 300 Q265 345 235 400 Z"
            fill="#AECEB9"
          />
          <path
            d="M165 400 Q230 325 335 282 Q445 235 412 150"
            fill="none"
            stroke="#FEF9F0"
            strokeWidth="5"
            strokeDasharray="16 14"
            strokeLinecap="round"
          />
          {/* Tubing ring */}
          <circle cx="305" cy="285" r="28" fill="none" stroke="#D97706" strokeWidth="14" />
        </svg>
      );

    case 'homestay-joglo':
    default:
      return (
        <svg viewBox="0 0 640 400" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="640" height="400" fill="#F8E7C9" />
          <path d="M0 240 Q210 185 420 230 T640 210 L640 400 L0 400 Z" fill="#486554" />
          <path d="M0 295 L640 295 L640 400 L0 400 Z" fill="#1E3A2B" />
          {/* Warm wooden lumbung / joglo homestay */}
          <g transform="translate(215, 130)">
            <path d="M-20 80 L105 8 L230 80 Z" fill="#532A00" />
            <path d="M10 80 L105 28 L200 80 Z" fill="#D97706" opacity="0.85" />
            <rect x="24" y="80" width="162" height="98" rx="6" fill="#F2EDE4" />
            <rect x="52" y="106" width="38" height="42" rx="4" fill="#FBBF24" />
            <rect x="120" y="106" width="42" height="72" rx="4" fill="#6E3900" />
          </g>
        </svg>
      );
  }
};
