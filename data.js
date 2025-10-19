// data.js
// Clean version: Math & Physics questions with clear spacing
// Step-by-step numbered solutions (classic style)

const QUESTIONS = [
  // ---------- MATHEMATICS: Simultaneous (2 unknowns) ----------
  {
    id: 1,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve the system: \\begin{cases} 2x + 3y = 13 \\\\ x - y = 1 \\end{cases}",
    options: [
      "x = 2, y = 3",
      "x = 3, y = 1/2",
      "x = 16/5, y = 11/5",
      "x = 5, y = -1"
    ],
    correct: 2,
    solutionSteps: [
      "1. From the second equation, x - y = 1, we get x = y + 1.",
      "2. Substitute x = y + 1 into 2x + 3y = 13.",
      "3. That gives 2(y + 1) + 3y = 13.",
      "4. Simplify to get 5y + 2 = 13.",
      "5. Subtract 2 from both sides: 5y = 11.",
      "6. Divide by 5: y = 11/5.",
      "7. Substitute y = 11/5 into x = y + 1 to get x = 16/5."
    ]
  },

  {
    id: 2,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve: \\begin{cases} x + y = 5 \\\\ x - y = 1 \\end{cases}",
    options: [
      "x = 3, y = 2",
      "x = 2, y = 3",
      "x = 4, y = 1",
      "x = 5, y = 0"
    ],
    correct: 0,
    solutionSteps: [
      "1. Add both equations: (x + y) + (x - y) = 5 + 1.",
      "2. Simplify to get 2x = 6.",
      "3. Divide by 2: x = 3.",
      "4. Substitute x = 3 into x + y = 5.",
      "5. This gives y = 2."
    ]
  },

  // ---------- MATHEMATICS: Simultaneous (3 unknowns) ----------
  {
    id: 3,
    subject: 'mathematics',
    topic: 'simultaneous3',
    question: "Solve the system: \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 4 \\end{cases}",
    options: [
      "x = 1, y = 2, z = 3",
      "x = 2, y = 1, z = 3",
      "x = 11/7, y = 16/7, z = 15/7",
      "x = 0, y = 3, z = 3"
    ],
    correct: 2,
    solutionSteps: [
      "1. From the first equation, z = 6 - x - y.",
      "2. Substitute z = 6 - x - y into the other two equations.",
      "3. This gives two new equations with x and y only.",
      "4. Solve those simultaneously to get x = 11/7 and y = 16/7.",
      "5. Substitute x and y into z = 6 - x - y.",
      "6. Compute z = 6 - 11/7 - 16/7 = 15/7."
    ]
  },

  // ---------- MATHEMATICS: Quadratic ----------
  {
    id: 4,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Solve the quadratic equation: x² - 5x + 6 = 0",
    options: [
      "x = 2, 3",
      "x = -2, -3",
      "x = 1, 6",
      "x = 1/2, 3"
    ],
    correct: 0,
    solutionSteps: [
      "1. Write the equation: x² - 5x + 6 = 0.",
      "2. Factorize: (x - 2)(x - 3) = 0.",
      "3. Set each factor equal to zero.",
      "4. Therefore, x = 2 or x = 3."
    ]
  },

  {
    id: 5,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Find the roots of 2x² - 8x + 6 = 0",
    options: [
      "x = 1, 3",
      "x = 1, 3/2",
      "x = 2, 3/2",
      "x = 1, 2"
    ],
    correct: 0,
    solutionSteps: [
      "1. Divide the entire equation by 2: x² - 4x + 3 = 0.",
      "2. Factorize: (x - 1)(x - 3) = 0.",
      "3. Set each factor equal to zero.",
      "4. Therefore, x = 1 or x = 3."
    ]
  },

  {
    id: 6,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "If x² + 6x + k = 0 has equal roots, find k.",
    options: ["9", "36", "-9", "0"],
    correct: 0,
    solutionSteps: [
      "1. Recall that equal roots occur when the discriminant (b² - 4ac) = 0.",
      "2. Here, a = 1, b = 6, c = k.",
      "3. Substitute into the formula: 6² - 4(1)(k) = 0.",
      "4. Simplify: 36 - 4k = 0.",
      "5. Solve for k: k = 9."
    ]
  },

  // ---------- PHYSICS: Waves ----------
  {
    id: 7,
    subject: 'physics',
    topic: 'waves',
    question: "A wave has frequency f = 50 Hz and wavelength λ = 0.68 m. Find the wave speed v.",
    options: ["24 m/s", "34 m/s", "50 m/s", "0.0136 m/s"],
    correct: 1,
    solutionSteps: [
      "1. Use the formula v = f × λ.",
      "2. Substitute values: v = 50 × 0.68.",
      "3. Multiply to get v = 34 m/s."
    ]
  },

  {
    id: 8,
    subject: 'physics',
    topic: 'waves',
    question: "Define wavelength and frequency for a wave.",
    options: [
      "Wavelength: distance between two consecutive identical points; Frequency: number of oscillations per second.",
      "Wavelength: time between peaks; Frequency: energy per oscillation.",
      "Wavelength: amplitude of wave; Frequency: mass of source.",
      "Wavelength: speed of propagation; Frequency: distance between peaks."
    ],
    correct: 0,
    solutionSteps: [
      "1. Wavelength is the distance between two consecutive points in phase (e.g., crest to crest).",
      "2. Frequency is the number of complete oscillations or cycles per second (measured in hertz, Hz)."
    ]
  },

  {
    id: 9,
    subject: 'physics',
    topic: 'waves',
    question: "A string fixed at both ends has a fundamental frequency of 100 Hz. What is the frequency of the second harmonic?",
    options: ["50 Hz", "100 Hz", "200 Hz", "300 Hz"],
    correct: 2,
    solutionSteps: [
      "1. For harmonics, the frequency of the nth harmonic = n × fundamental frequency.",
      "2. Here, fundamental = 100 Hz, and n = 2.",
      "3. Therefore, second harmonic = 2 × 100 = 200 Hz."
    ]
  },

  // ---------- PHYSICS: Heat Energy ----------
  {
    id: 10,
    subject: 'physics',
    topic: 'heat',
    question: "Define specific heat capacity of a substance.",
    options: [
      "Energy required to raise the temperature of unit mass by 1 K.",
      "Energy required to raise the temperature of the whole body by 1 K.",
      "Energy required for phase change per kilogram.",
      "Mass multiplied by temperature."
    ],
    correct: 0,
    solutionSteps: [
      "1. Specific heat capacity is the heat energy required to raise the temperature of 1 kg of a substance by 1 K.",
      "2. It is given by c = Q / (m × ΔT), where Q is heat energy, m is mass, and ΔT is temperature change."
    ]
  },

  {
    id: 11,
    subject: 'physics',
    topic: 'heat',
    question: "How much heat energy is required to raise the temperature of 2 kg of water from 20°C to 80°C? (c = 4200 J/kg·K)",
    options: ["504000 J", "420000 J", "252000 J", "1008000 J"],
    correct: 0,
    solutionSteps: [
      "1. Use the formula Q = m × c × ΔT.",
      "2. Substitute: Q = 2 × 4200 × (80 - 20).",
      "3. Simplify: Q = 2 × 4200 × 60 = 504000 J."
    ]
  },

  {
    id: 12,
    subject: 'physics',
    topic: 'heat',
    question: "State what is meant by the latent heat of fusion.",
    options: [
      "Heat required to change a substance from solid to liquid without temperature change.",
      "Heat required to raise a solid’s temperature by 1 K.",
      "Heat required to change a gas to a liquid at constant pressure.",
      "Heat required to increase internal energy only."
    ],
    correct: 0,
    solutionSteps: [
      "1. The latent heat of fusion is the amount of heat energy required to change unit mass of a solid into liquid at constant temperature.",
      "2. During this process, the temperature remains constant."
    ]
  }
];
