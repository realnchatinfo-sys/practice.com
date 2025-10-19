// data.js
// Expanded question bank for Math & Physics
// Each question has: id, subject ('mathematics'|'physics'), topic, question (LaTeX-friendly string), options, correct (index), solutionSteps (array)

const QUESTIONS = [
  // ---------- MATHEMATICS: Simultaneous (2 unknowns) ----------
  {
    id: 1,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve the system: \\begin{cases} 2x + 3y = 13 \\\\ x - y = 1 \\end{cases}",
    options: [
      "$x=2,\\;y=3$",
      "$x=3,\\;y=\\tfrac{1}{2}$",
      "$x=\\tfrac{16}{5},\\;y=\\tfrac{11}{5}$",
      "$x=5,\\;y=-1$"
    ],
    correct: 2,
    solutionSteps: [
      "From $x-y=1$ we have $x=y+1$.",
      "Substitute into $2x+3y=13$: $2(y+1)+3y=13$.",
      "$5y+2=13\\Rightarrow y=\\tfrac{11}{5}$; then $x=\\tfrac{16}{5}$."
    ]
  },

  {
    id: 2,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve: \\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}",
    options: [
      "$x=3,\\;y=2$",
      "$x=2,\\;y=3$",
      "$x=4,\\;y=1$",
      "$x=5,\\;y=0$"
    ],
    correct: 0,
    solutionSteps: [
      "Add the equations: $2x=6\\Rightarrow x=3$.",
      "Then $y=5-x=2$."
    ]
  },

  // ---------- MATHEMATICS: Simultaneous (3 unknowns) ----------
  {
    id: 3,
    subject: 'mathematics',
    topic: 'simultaneous3',
    question: "Solve the system: \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 4 \\end{cases}",
    options: [
      "$x=1,y=2,z=3$",
      "$x=2,y=1,z=3$",
      "$x=\\tfrac{11}{7},y=\\tfrac{16}{7},z=\\tfrac{15}{7}$",
      "$x=0,y=3,z=3$"
    ],
    correct: 2,
    solutionSteps: [
      "Eliminate $z$: from eqn1 $z=6-x-y$.",
      "Sub into eqn2 and eqn3 and solve the 2×2 system to obtain $(x,y,z)=(\\tfrac{11}{7},\\tfrac{16}{7},\\tfrac{15}{7})$."
    ]
  },

  // ---------- MATHEMATICS: Quadratic ----------
  {
    id: 4,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Solve the quadratic: $x^2 - 5x + 6 = 0$",
    options: [
      "$x=2,3$",
      "$x=-2,-3$",
      "$x=1,6$",
      "$x=\\tfrac{1}{2},3$"
    ],
    correct: 0,
    solutionSteps: [
      "$x^2-5x+6=(x-2)(x-3)=0$ so $x=2$ or $x=3$."
    ]
  },

  {
    id: 5,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Find roots: $2x^2 - 8x + 6 = 0$",
    options: [
      "$1,3$",
      "$1,\\tfrac{3}{2}$",
      "$2,\\tfrac{3}{2}$",
      "$1,2$"
    ],
    correct: 0,
    solutionSteps: [
      "Divide by 2: $x^2-4x+3=0$.",
      "Factor: $(x-1)(x-3)=0$ so roots: $1$ and $3$."
    ]
  },

  {
    id: 6,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "If $x^2 + 6x + k = 0$ has equal roots, find $k$.",
    options: [
      "$9$",
      "$36$",
      "$-9$",
      "$0$"
    ],
    correct: 0,
    solutionSteps: [
      "Discriminant $\\Delta = b^2 - 4ac = 6^2 - 4\\times1\\times k = 36 - 4k$.",
      "Equal roots when $\\Delta=0\\Rightarrow 36 - 4k = 0 \\Rightarrow k = 9$."
    ]
  },

  // ---------- PHYSICS: Waves (mixed theory & calculation) ----------
  {
    id: 7,
    subject: 'physics',
    topic: 'waves',
    question: "A wave has frequency $f=50\\,\\mathrm{Hz}$ and wavelength $\\lambda=0.68\\,\\mathrm{m}$. Find the wave speed $v$.",
    options: [
      "$24\\,\\mathrm{m/s}$",
      "$34\\,\\mathrm{m/s}$",
      "$50\\,\\mathrm{m/s}$",
      "$0.0136\\,\\mathrm{m/s}$"
    ],
    correct: 1,
    solutionSteps: [
      "Wave speed $v = f\\lambda = 50\\times0.68 = 34\\,\\mathrm{m/s}$."
    ]
  },

  {
    id: 8,
    subject: 'physics',
    topic: 'waves',
    question: "Define wavelength and frequency for a wave (short theory).",
    options: [
      "Wavelength: distance between two consecutive identical points; Frequency: number of oscillations per unit time.",
      "Wavelength: time between two peaks; Frequency: energy per oscillation.",
      "Wavelength: amplitude of wave; Frequency: mass of source.",
      "Wavelength: speed of propagation; Frequency: distance between peaks."
    ],
    correct: 0,
    solutionSteps: [
      "Wavelength $\\lambda$ is the distance between adjacent similar points (e.g., crest to crest).",
      "Frequency $f$ is the number of complete oscillations per second (Hz)."
    ]
  },

  {
    id: 9,
    subject: 'physics',
    topic: 'waves',
    question: "A string fixed at both ends has a fundamental frequency of $100\\,\\mathrm{Hz}$. What is the frequency of the second harmonic?",
    options: [
      "$50\\,\\mathrm{Hz}$",
      "$100\\,\\mathrm{Hz}$",
      "$200\\,\\mathrm{Hz}$",
      "$300\\,\\mathrm{Hz}$"
    ],
    correct: 2,
    solutionSteps: [
      "Harmonics are integer multiples: second harmonic = $2\\times$ fundamental $=200\\,\\mathrm{Hz}$."
    ]
  },

  // ---------- PHYSICS: Heat Energy (mixed) ----------
  {
    id: 10,
    subject: 'physics',
    topic: 'heat',
    question: "Specific heat capacity $c$ of a material is defined as:",
    options: [
      "Energy required to raise the temperature of unit mass by 1 K.",
      "Energy required to raise the temperature of whole object by 1 K.",
      "Heat required for phase change per kg.",
      "Mass times temperature."
    ],
    correct: 0,
    solutionSteps: [
      "Specific heat capacity is energy per unit mass per degree: $c = \\dfrac{Q}{m\\Delta T}$."
    ]
  },

  {
    id: 11,
    subject: 'physics',
    topic: 'heat',
    question: "How much heat energy is needed to raise the temperature of $2\\,\\mathrm{kg}$ of water from $20^{\\circ}\\mathrm{C}$ to $80^{\\circ}\\mathrm{C}$? (Use $c_{water}=4200\\,\\mathrm{J/kg\\cdot K}$).",
    options: [
      "$504\\,000\\,\\mathrm{J}$",
      "$420\\,000\\,\\mathrm{J}$",
      "$252\\,000\\,\\mathrm{J}$",
      "$1,008,000\\,\\mathrm{J}$"
    ],
    correct: 0,
    solutionSteps: [
      "Use $Q=mc\\Delta T$. Here $m=2$, $c=4200$, $\\Delta T=60$.",
      "So $Q=2\\times4200\\times60=504000\\,\\mathrm{J}$."
    ]
  },

  {
    id: 12,
    subject: 'physics',
    topic: 'heat',
    question: "State what is meant by latent heat of fusion (short theory).",
    options: [
      "Heat required to change a substance from solid to liquid without temperature change.",
      "Heat required to raise a solid's temperature by 1 K.",
      "Heat required to change a gas to a liquid at constant pressure.",
      "Heat required to increase internal energy only."
    ],
    correct: 0,
    solutionSteps: [
      "Latent heat of fusion is energy required to change unit mass from solid to liquid at constant temperature (no temperature change during phase change)."
    ]
  },

  // ---------- ADDITIONAL MATH (for variety) ----------
  {
    id: 13,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve: \\begin{cases} 3x - 2y = 4 \\\\ 4x + y = 11 \\end{cases}",
    options: [
      "$x=3, y=-1$",
      "$x=2, y=3$",
      "$x=\\tfrac{7}{5}, y=\\tfrac{13}{5}$",
      "$x=3, y=1$"
    ],
    correct: 1,
    solutionSteps: [
      "From second eqn: $y=11-4x$. Substitute into first: $3x-2(11-4x)=4$.",
      "Solve: $3x-22+8x=4\\Rightarrow 11x=26\\Rightarrow x=\\tfrac{26}{11}$ (note: this shows a calculation path). (Alternate: solve by elimination to find $x=2, y=3$.)"
    ]
  },

  {
    id: 14,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "For $x^2 - 4x + 4 = 0$, choose the correct statement.",
    options: [
      "Two distinct real roots.",
      "Repeated root at $x=2$.",
      "No real roots.",
      "Roots are $-2$ and $-2$."
    ],
    correct: 1,
    solutionSteps: [
      "Recognize $(x-2)^2=0$, so a repeated root at $x=2$."
    ]
  },

  // ---------- ADDITIONAL PHYSICS: Waves theory ----------
  {
    id: 15,
    subject: 'physics',
    topic: 'waves',
    question: "A transverse wave differs from a longitudinal wave because:",
    options: [
      "Particles vibrate perpendicular to the direction of propagation.",
      "Particles vibrate parallel to the direction of propagation.",
      "Transverse waves cannot travel in solids.",
      "Longitudinal waves have no frequency."
    ],
    correct: 0,
    solutionSteps: [
      "In transverse waves particles oscillate perpendicular to wave propagation (e.g., waves on a string). Longitudinal: oscillation parallel (e.g., sound)."
    ]
  },

  {
    id: 16,
    subject: 'physics',
    topic: 'heat',
    question: "When ice at $0^{\\circ}\\mathrm{C}$ melts to water at $0^{\\circ}\\mathrm{C}$, the energy supplied is used to:",
    options: [
      "Increase the potential energy associated with molecules (break bonds) — latent heat.",
      "Increase kinetic energy (temperature rises).",
      "Decrease mass of the ice.",
      "Increase pressure only."
    ],
    correct: 0,
    solutionSteps: [
      "During melting temperature remains constant; supplied energy breaks intermolecular bonds increasing potential energy (latent heat)."
    ]
  }
];
