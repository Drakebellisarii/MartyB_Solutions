import React from 'react';

const NYCSkyline = ({ className = '', opacity = 1 }) => {
  // Full NYC skyline: low L-Manh left, One WTC spike, FiDi cluster,
  // Chrysler crown, Empire State setbacks + spire, 432 Park slender,
  // more midtown towers, gradual descent right.
  // ViewBox 0 0 1440 260 — y=260 is ground level.
  const skylinePath = `
    M0,260
    L0,242 L14,242 L14,235 L28,235 L28,240 L44,240 L44,232 L58,232 L58,237 L72,237
    L72,228 L84,228 L84,220 L95,220 L95,211 L106,211 L106,200 L116,200
    L116,190 L124,190 L124,180 L132,180 L132,168 L139,168 L139,158 L145,158
    L145,148 L151,148 L151,136 L157,136 L157,122 L161,122
    L161,105 L162,88 L163,70 L164,53 L165,38 L165.5,24 L166,13 L166.5,6 L167,2
    L167.5,0 L168,2 L168.5,6 L169,13 L169.5,24 L170,38
    L170.5,53 L171.5,70 L172.5,88 L173.5,105 L174.5,122
    L174.5,132 L180,132 L180,122 L190,122 L190,132 L202,132
    L202,142 L215,142 L215,152 L228,152 L228,142 L240,142
    L240,130 L253,130 L253,140 L267,140 L267,150 L282,150
    L282,158 L297,158 L297,167 L315,167 L315,175 L335,175
    L335,182 L356,182 L356,172 L373,172 L373,161 L389,161 L389,149 L404,149
    L404,138 L416,138 L416,125 L427,125 L427,112 L437,112
    L437,99 L445,99 L445,88 L452,88 L452,78 L458,78 L458,68 L463,68
    L463,60 L465,60 L465,51 L467,51 L467,42 L469,42 L469,35 L470.5,35
    L470.5,28 L471.5,22 L472,16 L472.5,10 L473,6 L473.5,2
    L474,6 L474.5,10 L475,16 L475.5,22 L476.5,28
    L476.5,35 L478,35 L478,42 L480,42 L480,51 L482,51 L482,60 L484,60
    L484,68 L488,68 L488,78 L493,78 L493,88 L499,88 L499,97 L506,97
    L506,88 L510,88 L510,78 L514,78 L514,68 L518,68 L518,60 L521,60
    L521,54 L522.5,49 L524,44 L525,40
    L525,36 L526.5,31 L528,27 L529.5,23
    L529.5,20 L531,16 L532,13
    L532,10 L532.5,7 L533,4 L533.5,1 L534,4 L534.5,7 L535,10
    L535,13 L536,16 L537.5,20
    L537.5,23 L539,27 L540.5,31 L542,36
    L542,40 L543,44 L544.5,49 L546,54
    L546,60 L549,60 L549,68 L553,68 L553,78 L557,78 L557,88 L561,88
    L561,78 L565,78 L565,67 L569,67 L569,57 L573,57
    L573,48 L576,48 L576,40 L579,40 L579,33 L581.5,33
    L581.5,26 L582.5,20 L583,15 L583.5,10 L584,6 L584.5,2
    L585,6 L585.5,10 L586,15 L586.5,20 L587.5,26
    L587.5,33 L590,33 L590,40 L593,40 L593,48 L596,48
    L596,38 L599,38 L599,29 L602,29 L602,22 L606,22
    L606,17 L609,17 L609,12 L612,12 L612,8 L614.5,8
    L614.5,4 L615.5,2 L616.5,0 L617,0 L617.5,2 L618.5,4
    L618.5,8 L621,8 L621,12 L624,12 L624,17 L627,17
    L627,22 L631,22 L631,29 L634,29 L634,38 L637,38
    L637,29 L639,29 L639,20 L640,20
    L640,12 L640.5,12 L640.5,5 L641,5 L641.5,2 L642,0
    L642.5,2 L643,5 L643.5,5 L643.5,12 L644,12
    L644,20 L645,20 L645,29 L647,29
    L647,20 L649,20 L649,11 L650.5,11 L650.5,5 L651,2
    L651.5,5 L652,11 L653.5,11 L653.5,20 L655,20 L655,29 L658,29
    L658,38 L662,38 L662,47 L667,47
    L667,38 L671,38 L671,28 L675,28 L675,20 L678,20
    L678,14 L680,14 L680,9 L681.5,9 L681.5,5 L682,2
    L682.5,5 L683,9 L684.5,9 L684.5,14 L686,14
    L686,20 L689,20 L689,28 L693,28 L693,38 L698,38 L698,47 L703,47 L703,56 L709,56
    L709,47 L713,47 L713,37 L717,37 L717,28 L720,28
    L720,21 L722,21 L722,15 L724,15 L724,10 L725.5,10
    L725.5,5 L726,2 L726.5,5 L727,10 L728.5,10
    L728.5,15 L730,15 L730,21 L732,21 L732,28 L735,28
    L735,37 L739,37 L739,47 L744,47 L744,56 L750,56 L750,65 L757,65
    L757,73 L765,73 L765,82 L774,82
    L774,72 L780,72 L780,62 L785,62 L785,52 L789,52
    L789,62 L794,62 L794,72 L800,72 L800,82 L808,82 L808,92 L818,92
    L818,103 L830,103 L830,114 L844,114 L844,126 L861,126
    L861,138 L880,138 L880,150 L902,150 L902,161 L928,161
    L928,172 L957,172 L957,182 L990,182 L990,192 L1027,192
    L1027,202 L1068,202 L1068,211 L1115,211 L1115,219 L1168,219
    L1168,226 L1229,226 L1229,232 L1300,232 L1300,238 L1385,238
    L1385,244 L1440,244
    L1440,260 Z
  `;

  const id = 'nyc';

  return (
    <svg
      viewBox="0 0 1440 260"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      style={{ opacity, display: 'block' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}Grad`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A3460" stopOpacity="0.65" />
          <stop offset="60%" stopColor="#0D1F3C" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#050D1A" stopOpacity="1" />
        </linearGradient>

        <pattern id={`${id}Win`} x="0" y="0" width="10" height="16" patternUnits="userSpaceOnUse">
          <rect x="1" y="2" width="3" height="5" fill="rgba(232,201,125,0.22)" />
          <rect x="6" y="2" width="3" height="5" fill="rgba(232,201,125,0.10)" />
          <rect x="1" y="10" width="3" height="5" fill="rgba(232,201,125,0.07)" />
          <rect x="6" y="10" width="3" height="5" fill="rgba(232,201,125,0.18)" />
        </pattern>

        <clipPath id={`${id}Clip`}>
          <path d={skylinePath} />
        </clipPath>

        <filter id={`${id}Glow`}>
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Distant shadow layer — depth effect */}
      <path
        d={skylinePath}
        fill="rgba(5,13,26,0.6)"
        transform="translate(6,10) scale(0.996,0.96)"
      />

      {/* Main silhouette */}
      <path d={skylinePath} fill={`url(#${id}Grad)`} />

      {/* Window lights */}
      <rect width="1440" height="260" fill={`url(#${id}Win)`} clipPath={`url(#${id}Clip)`} />

      {/* Gold roofline glow */}
      <path
        d={skylinePath}
        fill="none"
        stroke="rgba(201,168,76,0.35)"
        strokeWidth="1.2"
        filter={`url(#${id}Glow)`}
      />

      {/* Subtle city-light ambient at base */}
      <rect
        x="0" y="200" width="1440" height="60"
        fill="url(#baseGlow)"
        clipPath={`url(#${id}Clip)`}
      />
      <defs>
        <linearGradient id="baseGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(201,168,76,0)" />
          <stop offset="100%" stopColor="rgba(201,168,76,0.06)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NYCSkyline;
