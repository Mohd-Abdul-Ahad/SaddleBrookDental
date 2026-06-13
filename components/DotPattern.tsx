import React from 'react';

export const DotPattern: React.FC = () => (
  <div className="grid grid-cols-5 gap-1.5 opacity-40">
    {Array.from({ length: 25 }).map((_, i) => (
      <span key={i} className="w-[3px] h-[3px] rounded-full bg-[#D0D5DD]" />
    ))}
  </div>
);
