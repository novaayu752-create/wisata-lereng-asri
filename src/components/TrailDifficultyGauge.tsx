import React from 'react';
import { DifficultyLevel } from '../types/tourism';

interface TrailDifficultyGaugeProps {
  level: DifficultyLevel;
}

export const TrailDifficultyGauge: React.FC<TrailDifficultyGaugeProps> = ({ level }) => {
  const activeSegments =
    level === DifficultyLevel.MUDAH ? 1 : level === DifficultyLevel.SEDANG ? 2 : 3;

  return (
    <div className="flex items-center gap-2.5" aria-label={`Tingkat jalur: ${level}`}>
      <div className="flex items-center gap-1" aria-hidden="true">
        <span
          className={`h-2 w-5 rounded-sm transition-colors ${
            activeSegments >= 1 ? 'bg-[#388E3C]' : 'bg-[#E7E2D9]'
          }`}
        />
        <span
          className={`h-2 w-5 rounded-sm transition-colors ${
            activeSegments >= 2 ? 'bg-[#D97706]' : 'bg-[#E7E2D9]'
          }`}
        />
        <span
          className={`h-2 w-5 rounded-sm transition-colors ${
            activeSegments >= 3 ? 'bg-[#B45309]' : 'bg-[#E7E2D9]'
          }`}
        />
      </div>
      <span className="text-xs font-semibold text-[#424843]">Jalur {level}</span>
    </div>
  );
};
