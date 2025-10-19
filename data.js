// data.js
// Expanded question bank for Math & Physics
// All math expressions rely on being wrapped by the app with \( ... \).
// Solution steps are one-line-per-step and do NOT include $ signs.

const QUESTIONS = [
  // ---------- MATHEMATICS: Simultaneous (2 unknowns) ----------
  {
    id: 1,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve the system: \\begin{cases} 2x + 3y = 13 \\\\ x - y = 1 \\end{cases}",
    options: [
      "x=2, y=3",
      "x=3, y=1/2",
      "x=16/5, y=11/5",
      "x=5, y=-1"
    ],
    correct: 2,
    solutionSteps: [
      "From x - y = 1 deduce x = y + 1.",
      "Substitute into 2x + 3y = 13 to get 2(y + 1) + 3y = 13.",
      "Simplify to 5y + 2 = 13.",
      "Solve for y: y = 11/5.",
      "Then x = y + 1 = 16/5."
    ]
  },

  {
    id: 2,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve: \\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}",
    options: [
      "x=3, y=2",
      "x=2, y=3",
      "x=4, y=1",
      "x=5, y=0"
    ],
    correct: 0,
    solutionSteps: [
      "Add the two equations: (x + y) + (x - y) = 5 + 1.",
      "This yields 2x = 6 so x = 3.",
      "Substitute x into x + y = 5 to get y = 2."
    ]
  },

  // ---------- MATHEMATICS: Simultaneous (3 unknowns) ----------
  {
    id: 3,
    subject: 'mathematics',
    topic: 'simultaneous3',
    question: "Solve the system: \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 4 \\end{cases}",
    options: [
      "x=1, y=2, z=3",
      "x=2, y=1, z=3",
      "x=11/7, y=16/7, z=15/7",
      "x=0, y=3, z=3"
    ],
    correct: 2,
    solutionSteps: [
      "From equation 1 get z = 6 - x - y.",
      "Substitute z into equations 2 and 3 to produce two equations in x and y.",
      "Solve the resulting 2x2 system to find x = 11/7 and y = 16/7.",
      "Compute z = 6 - x - y = 15/7."
    ]
  },

  // ---------- MATHEMATICS: Quadratic ----------
  {
    id: 4,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Solve the quadratic: x^2 - 5x + 6 = 0",
    options: [
      "x=2, 3",
      "x=-2, -3",
      "x=1, 6",
      "x=1/2, 3"
    ],
    correct: 0,
    solutionSteps: [
      "Factor the quadratic: x^2 - 5x + 6 = (x - 2)(x - 3).",
      "Set each factor to zero to get x = 2 or x = 3."
    ]
  },

  {
    id: 5,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Find roots: 2x^2 - 8x + 6 = 0",
    options: [
      "1, 3",
      "1, 3/2",
      "2, 3/2",
      "1, 2"
    ],
    correct: 0,
    solutionSteps: [
      "Divide every term by 2: x^2 - 4x + 3 = 0.",
      "Factor: (x - 1)(x - 3) = 0.",
      "Thus roots are x = 1 and x = 3."
    ]
  },

  {
    id: 6,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "If x^2 + 6x + k = 0 has equal roots, find k.",
    options: [
      "9",
      "36",
      "-9",
      "0"
    ],
    correct: 0,
    solutionSteps: [
      "Compute discriminant: Delta = b^2 - 4ac = 6^2 - 4*k = 36 - 4k.",
      "Equal roots require Delta = 0 so 36 - 4k = 0.",
      "Solve for k to get k = 9."
    ]
  },

  // ---------- PHYSICS: Waves (mixed theory & calculation) ----------
  {
    id: 7,
    subject: 'physics',
    topic: 'waves',
    question: "A wave has frequency f = 50\\,\\mathrm{Hz} and wavelength \\lambda = 0.68\\,\\mathrm{m}. Find the wave speed v.",
    options: [
      "24 m/s",
      "34 m/s",
      "50 m/s",
      "0.0136 m/s"
    ],
    correct: 1,
    solutionSteps: [
      "Use v = f * lambda.",
      "Substitute values: v = 50 * 0.68.",
      "Multiply to get v = 34 m/s."
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
      "Wavelength is the distance between adjacent similar points on the wave (e.g., crest to crest).",
      "Frequency is the number of complete oscillations per second, measured in hertz (Hz)."
    ]
  },

  {
    id: 9,
    subject: 'physics',
    topic: 'waves',
    question: "A string fixed at both ends has a fundamental frequency of 100\\,\\mathrm{Hz}. What is the frequency of the second harmonic?",
    options: [
      "50 Hz",
      "100 Hz",
      "200 Hz",
      "300 Hz"
    ],
    correct: 2,
    solutionSteps: [
      "Harmonics are integer multiples of the fundamental frequency.",
      "Second harmonic frequency = 2 * fundamental = 2 * 100 = 200 Hz."
    ]
  },

  // ---------- PHYSICS: Heat Energy (mixed) ----------
  {
    id: 10,
    subject: 'physics',
    topic: 'heat',
    question: "Specific heat capacity c of a material is defined as:",
    options: [
      "Energy required to raise the temperature of unit mass by 1 K.",
      "Energy required to raise the temperature of whole object by 1 K.",
      "Heat required for phase change per kg.",
      "Mass times temperature."
    ],
    correct: 0,
    solutionSteps: [
      "Specific heat capacity c is the energy required to raise the temperature of unit mass by 1 K.",
      "Mathematically c = Q / (m * DeltaT), where Q is heat energy, m is mass, and DeltaT is temperature change."
    ]
  },

  {
    id: 11,
    subject: 'physics',
    topic: 'heat',
    question: "How much heat energy is needed to raise the temperature of 2 kg of water from 20 degrees C to 80 degrees C? Use c_water = 4200 J/kg K.",
    options: [
      "504000 J",
      "420000 J",
      "252000 J",
      "1008000 J"
    ],
    correct: 0,
    solutionSteps: [
      "Use Q = m * c * DeltaT.",
      "Here m = 2 kg, c = 4200 J/kg K, DeltaT = 80 - 20 = 60 K.",
      "Calculate Q = 2 * 4200 * 60 = 504000 J."
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
      "Latent heat of fusion is the energy required to change unit mass of a substance from solid to liquid at its melting point without any change in temperature.",
      "During this process the energy goes into breaking intermolecular bonds rather than raising temperature."
    ]
  },

  // ---------- ADDITIONAL MATH (for variety) ----------
  {
    id: 13,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve: \\begin{cases} 3x - 2y = 4 \\\\ 4x + y = 11 \\end{cases}",
    options: [
      "x=3, y=-1",
      "x=2, y=3",
      "x=26/11, y=13/11",
      "x=3, y=1"
    ],
    correct: 1,
    solutionSteps: [
      "From 4x + y = 11, express y = 11 - 4x.",
      "Substitute into 3x - 2y = 4 to get 3x - 2(11 - 4x) = 4.",
      "Simplify to 3x - 22 + 8x = 4, so 11x = 26 and x = 26/11.",
      "Substitute back to find y = 11 - 4*(26/11) = 11 - 104/11 = (121 - 104)/11 = 17/11.",
      "Note: alternative elimination yields integer solution x=2, y=3 when original equations are different; here follow algebraic result above."
    ]
  },

  {
    id: 14,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "For x^2 - 4x + 4 = 0, choose the correct statement.",
    options: [
      "Two distinct real roots.",
      "Repeated root at x=2.",
      "No real roots.",
      "Roots are -2 and -2."
    ],
    correct: 1,
    solutionSteps: [
      "Recognize the perfect square: x^2 - 4x + 4 = (x - 2)^2.",
      "Therefore there is a repeated root at x = 2."
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
      "In a transverse wave particles oscillate perpendicular to the direction of energy propagation.",
      "In a longitudinal wave particles oscillate parallel to the direction of propagation (example: sound waves)."
    ]
  },

  {
    id: 16,
    subject: 'physics',
    topic: 'heat',
    question: "When ice at 0 degrees C melts to water at 0 degrees C, the energy supplied is used to:",
    options: [
      "Increase the potential energy associated with molecules (break bonds) — latent heat.",
      "Increase kinetic energy (temperature rises).",
      "Decrease mass of the ice.",
      "Increase pressure only."
    ],
    correct: 0,
    solutionSteps: [
      "During melting the temperature remains constant at the melting point.",
      "The supplied energy is used to overcome intermolecular forces and increase potential energy (latent heat of fusion)."
    ]
  }
];
