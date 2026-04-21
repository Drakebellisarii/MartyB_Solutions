import React from 'react';

const NYCSkyline = ({ className = '', opacity = 1 }) => {
  // Manhattan skyline silhouette — left to right, traced as a closed polygon
  // ViewBox: 0 0 1440 250 (y=250 is ground level, buildings grow upward)
  const skylinePath = `
    M 0,250
    L 0,225 L 50,225 L 50,215 L 90,215 L 90,205 L 130,205
    L 130,220 L 160,220
    L 160,180 L 190,180
    L 190,150 L 210,150
    L 210,120 L 225,120
    L 225,80 L 230,80
    L 230,55 L 233,55
    L 233,40 L 234,40
    L 234,55 L 237,55
    L 237,80 L 242,80
    L 242,110 L 260,110
    L 260,125 L 285,125
    L 285,135 L 320,135
    L 320,145 L 355,145
    L 355,160 L 390,160
    L 390,180 L 415,180
    L 415,200 L 430,200
    L 430,210 L 460,210
    L 460,215 L 495,215
    L 495,220 L 530,220
    L 530,210 L 560,210
    L 560,195 L 590,195
    L 590,185 L 620,185
    L 620,175 L 650,175
    L 650,162 L 680,162
    L 680,150 L 710,150
    L 710,138 L 730,138
    L 730,125 L 750,125
    L 750,115 L 760,115
    L 760,108 L 770,108
    L 770,92  L 777,92
    L 777,80  L 782,80
    L 782,70  L 785,70
    L 785,62  L 787,62
    L 787,52  L 788,52
    L 788,44  L 789,44
    L 789,52  L 790,52
    L 790,62  L 792,62
    L 792,70  L 794,70
    L 794,80  L 798,80
    L 798,92  L 804,92
    L 804,108 L 810,108
    L 810,115 L 820,115
    L 820,102 L 828,102
    L 828,92  L 832,92
    L 832,85  L 835,85
    L 835,78  L 837,78
    L 837,72  L 838,72
    L 838,64  L 839,64
    L 839,72  L 840,72
    L 840,78  L 842,78
    L 842,85  L 845,85
    L 845,92  L 849,92
    L 849,102 L 855,102
    L 855,115 L 865,115
    L 865,125 L 890,125
    L 890,132 L 920,132
    L 920,140 L 960,140
    L 960,145 L 1000,145
    L 1000,150 L 1050,150
    L 1050,158 L 1100,158
    L 1100,165 L 1150,165
    L 1150,172 L 1200,172
    L 1200,178 L 1260,178
    L 1260,185 L 1320,185
    L 1320,192 L 1380,192
    L 1380,200 L 1440,200
    L 1440,250 Z
  `;

  return (
    <svg
      viewBox="0 0 1440 250"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="windows" x="0" y="0" width="14" height="22" patternUnits="userSpaceOnUse">
          <rect x="2" y="4" width="4" height="6" fill="rgba(232,201,125,0.18)" />
          <rect x="8" y="4" width="4" height="6" fill="rgba(232,201,125,0.10)" />
          <rect x="2" y="14" width="4" height="6" fill="rgba(232,201,125,0.08)" />
          <rect x="8" y="14" width="4" height="6" fill="rgba(232,201,125,0.14)" />
        </pattern>
        <clipPath id="buildingMask">
          <path d={skylinePath} />
        </clipPath>
        <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A3460" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#112347" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* Background buildings — slightly lighter, further away */}
      <path d={skylinePath} fill="rgba(10,22,40,0.5)" transform="translate(8, 12) scale(0.995, 0.95)" />

      {/* Main building silhouette */}
      <path d={skylinePath} fill="url(#skylineGrad)" />

      {/* Window lights clipped to building shapes */}
      <rect width="1440" height="250" fill="url(#windows)" clipPath="url(#buildingMask)" />

      {/* Top edge glow line */}
      <path
        d={skylinePath}
        fill="none"
        stroke="rgba(201,168,76,0.2)"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default NYCSkyline;
