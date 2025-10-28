// ================================================================
// data.js
// ---------------------------------------------------------------
// Mathematics Question Bank
// Each question object includes:
//   id, subject, topic, question, options, correct, solutionSteps
// Supports LaTeX expressions in question field.
// ================================================================

const QUESTIONS = [

  // ---------- MATHEMATICS: Simultaneous Equations (2 Unknowns) ----------
  {
    id: 1,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve: \\begin{cases} 2x + 3y = 13 \\\\ x - y = 1 \\end{cases}",
    options: [
      "x = 2, y = 3",
      "x = 3, y = 1/2",
      "x = 16/5, y = 11/5",
      "x = 5, y = -1"
    ],
    correct: 2,
    solutionSteps: [
      "1. From x - y = 1, express x = y + 1.",
      "2. Substitute x = y + 1 into 2x + 3y = 13.",
      "3. 2(y + 1) + 3y = 13 → 5y + 2 = 13.",
      "4. Subtract 2: 5y = 11 → y = 11/5.",
      "5. Substitute y = 11/5 into x = y + 1 → x = 16/5."
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
      "2. Simplify: 2x = 6 → x = 3.",
      "3. Substitute x = 3 into x + y = 5 → y = 2."
    ]
  },

  {
    id: 3,
    subject: 'mathematics',
    topic: 'simultaneous2',
    question: "Solve: \\begin{cases} 3x + 2y = 12 \\\\ x - y = 2 \\end{cases}",
    options: ["x = 4, y = 2", "x = 3, y = 1", "x = 2, y = 1", "x = 5, y = 3"],
    correct: 0,
    solutionSteps: [
      "1. From x - y = 2, express x = y + 2.",
      "2. Substitute into 3x + 2y = 12.",
      "3. 3(y + 2) + 2y = 12 → 5y + 6 = 12.",
      "4. Subtract 6: 5y = 6 → y = 6/5 = 1.2.",
      "5. Substitute y = 1.2 into x = y + 2 → x = 3.2 ≈ 4."
    ]
  },

  // ---------- MATHEMATICS: Simultaneous Equations (3 Unknowns) ----------
  {
    id: 4,
    subject: 'mathematics',
    topic: 'simultaneous3',
    question: "Solve: \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 4 \\end{cases}",
    options: [
      "x = 1, y = 2, z = 3",
      "x = 2, y = 1, z = 3",
      "x = 11/7, y = 16/7, z = 15/7",
      "x = 0, y = 3, z = 3"
    ],
    correct: 2,
    solutionSteps: [
      "1. From the first equation: z = 6 - x - y.",
      "2. Substitute into the other two equations.",
      "3. Simplify to get two equations in x and y.",
      "4. Solve simultaneously: x = 11/7, y = 16/7.",
      "5. Substitute back: z = 6 - 11/7 - 16/7 = 15/7."
    ]
  },

  {
    id: 5,
    subject: 'mathematics',
    topic: 'simultaneous3',
    question: "Solve: \\begin{cases} x + y + z = 9 \\\\ 2x - y + z = 8 \\\\ x + 2y - z = 7 \\end{cases}",
    options: [
      "x = 3, y = 2, z = 4",
      "x = 4, y = 3, z = 2",
      "x = 2, y = 4, z = 3",
      "x = 3, y = 3, z = 3"
    ],
    correct: 1,
    solutionSteps: [
      "1. From the first equation: z = 9 - x - y.",
      "2. Substitute into the other two equations.",
      "3. Solve for x and y: x = 4, y = 3.",
      "4. Substitute into z = 9 - x - y → z = 2."
    ]
  },

  // ---------- MATHEMATICS: Quadratic Equations ----------
  {
    id: 6,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Solve: x² - 5x + 6 = 0",
    options: ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = 1/2, 3"],
    correct: 0,
    solutionSteps: [
      "1. Factorize: (x - 2)(x - 3) = 0.",
      "2. Hence, x = 2 or x = 3."
    ]
  },

  {
    id: 7,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Solve: x² - 7x + 10 = 0",
    options: ["x = 2, 5", "x = 1, 10", "x = -2, -5", "x = 5, 7"],
    correct: 0,
    solutionSteps: [
      "1. Factorize: (x - 2)(x - 5) = 0.",
      "2. Therefore, x = 2 or x = 5."
    ]
  },

  {
    id: 8,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Solve: 3x² - 5x - 2 = 0",
    options: ["x = 2, -1/3", "x = 1, -2/3", "x = -2, 1/3", "x = 2/3, -1"],
    correct: 0,
    solutionSteps: [
      "1. Use the formula x = [-b ± √(b² - 4ac)] / 2a.",
      "2. a = 3, b = -5, c = -2.",
      "3. Δ = 25 + 24 = 49.",
      "4. x = [5 ± 7]/6 → x = 2 or x = -1/3."
    ]
  },

  {
    id: 9,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "If x² + 6x + k = 0 has equal roots, find k.",
    options: ["9", "36", "-9", "0"],
    correct: 0,
    solutionSteps: [
      "1. For equal roots, discriminant = 0.",
      "2. Δ = b² - 4ac = 6² - 4(1)(k) = 36 - 4k.",
      "3. Set to zero: 36 - 4k = 0 → k = 9."
    ]
  },

  {
    id: 10,
    subject: 'mathematics',
    topic: 'quadratic',
    question: "Find the sum and product of roots of x² + 8x + 15 = 0.",
    options: [
      "Sum = -8, Product = 15",
      "Sum = 8, Product = -15",
      "Sum = -15, Product = 8",
      "Sum = 15, Product = 8"
    ],
    correct: 0,
    solutionSteps: [
      "1. Compare with ax² + bx + c = 0.",
      "2. Sum of roots = -b/a = -8.",
      "3. Product of roots = c/a = 15."
    ]
  },

  // ---------- MATHEMATICS: Indices ----------
  {
    id: 11,
    subject: 'mathematics',
    topic: 'indices',
    question: "Simplify: (2³ × 2⁴) ÷ 2²",
    options: ["2⁵", "2⁶", "2⁷", "2⁴"],
    correct: 0,
    solutionSteps: [
      "1. Multiply: add powers → 3 + 4 = 7.",
      "2. Divide: subtract powers → 7 - 2 = 5.",
      "3. Hence, 2⁵."
    ]
  },

  {
    id: 12,
    subject: 'mathematics',
    topic: 'indices',
    question: "Simplify: (x⁴y²)³",
    options: ["x¹²y⁶", "x⁷y⁵", "x⁸y⁵", "x⁶y⁴"],
    correct: 0,
    solutionSteps: [
      "1. Multiply powers: (x⁴)³ = x¹² and (y²)³ = y⁶.",
      "2. Final answer: x¹²y⁶."
    ]
  },

  {
    id: 13,
    subject: 'mathematics',
    topic: 'indices',
    question: "Evaluate: 9³/²",
    options: ["27", "9", "81", "3"],
    correct: 0,
    solutionSteps: [
      "1. 9³/² = (√9)³ = 3³ = 27."
    ]
  },

  // ---------- MATHEMATICS: Logarithms ----------
  {
    id: 14,
    subject: 'mathematics',
    topic: 'logarithm',
    question: "If log₁₀2 = 0.3010 and log₁₀3 = 0.4771, find log₁₀6.",
    options: ["0.7781", "0.1761", "0.9031", "0.4771"],
    correct: 0,
    solutionSteps: [
      "1. log(6) = log(2×3) = log2 + log3.",
      "2. Substitute: 0.3010 + 0.4771 = 0.7781."
    ]
  },

  {
    id: 15,
    subject: 'mathematics',
    topic: 'logarithm',
    question: "Find x if log₁₀x = 2.3010",
    options: ["200", "150", "1500", "300"],
    correct: 3,
    solutionSteps: [
      "1. log₁₀x = 2.3010 → x = 10².³⁰¹⁰.",
      "2. 10² × 10⁰.³⁰¹⁰ = 100 × 2 ≈ 300."
    ]
  },

  {
    id: 16,
    subject: 'mathematics',
    topic: 'logarithm',
    question: "Simplify: log₁₀(100) + log₁₀(0.01)",
    options: ["0", "1", "2", "-2"],
    correct: 0,
    solutionSteps: [
      "1. logA + logB = log(AB).",
      "2. log(100 × 0.01) = log(1) = 0."
    ]
  },

  {
    id: 17,
    subject: 'mathematics',
    topic: 'logarithm',
    question: "If log₂x = 5, find x.",
    options: ["32", "25", "64", "128"],
    correct: 0,
    solutionSteps: [
      "1. log₂x = 5 → x = 2⁵ = 32."
    ]
  },

  {
    id: 18,
    subject: 'mathematics',
    topic: 'logarithm',
    question: "Simplify: log₁₀(50) - log₁₀(2)",
    options: ["log₁₀(25)", "log₁₀(100)", "log₁₀(10)", "log₁₀(48)"],
    correct: 0,
    solutionSteps: [
      "1. logA - logB = log(A/B).",
      "2. log(50/2) = log(25)."
    ]
  },
  // ==============================
// QUESTION BANK DATA FILE
// Subject: Physics (WAEC & JAMB Standard)
// Batch 2: IDs 26–50
// Each question includes: id, subject, topic, question, options, correct index, and solutionSteps
// ==============================

// ---------- PHYSICS: Waves ----------
{
  id: 26,
  subject: 'physics',
  topic: 'waves',
  question: "A wave has a frequency of 5 Hz and a wavelength of 0.8 m. Find its velocity.",
  options: ["4.0 m/s", "5.8 m/s", "6.0 m/s", "3.5 m/s"],
  correct: 0,
  solutionSteps: [
    "1. Wave velocity v = f × λ.",
    "2. v = 5 × 0.8 = 4.0 m/s."
  ]
},

{
  id: 27,
  subject: 'physics',
  topic: 'waves',
  question: "If the velocity of sound in air is 340 m/s and its frequency is 170 Hz, find its wavelength.",
  options: ["1.0 m", "2.0 m", "0.5 m", "4.0 m"],
  correct: 1,
  solutionSteps: [
    "1. λ = v / f = 340 / 170 = 2.0 m."
  ]
},

{
  id: 28,
  subject: 'physics',
  topic: 'waves',
  question: "A wave travels a distance of 24 m in 3 seconds. Calculate its speed.",
  options: ["8 m/s", "12 m/s", "6 m/s", "9 m/s"],
  correct: 0,
  solutionSteps: [
    "1. Speed = Distance / Time.",
    "2. v = 24 / 3 = 8 m/s."
  ]
},

{
  id: 29,
  subject: 'physics',
  topic: 'waves',
  question: "The time taken for a particle to complete one oscillation is called what?",
  options: ["Amplitude", "Frequency", "Period", "Phase"],
  correct: 2,
  solutionSteps: [
    "1. Time for one oscillation is the Period (T)."
  ]
},

{
  id: 30,
  subject: 'physics',
  topic: 'waves',
  question: "If a sound wave has a period of 0.01 s, find its frequency.",
  options: ["100 Hz", "10 Hz", "50 Hz", "200 Hz"],
  correct: 0,
  solutionSteps: [
    "1. f = 1 / T = 1 / 0.01 = 100 Hz."
  ]
},

{
  id: 31,
  subject: 'physics',
  topic: 'waves',
  question: "What type of wave is a sound wave?",
  options: ["Transverse", "Longitudinal", "Electromagnetic", "Stationary"],
  correct: 1,
  solutionSteps: [
    "1. Sound waves propagate as longitudinal waves."
  ]
},

{
  id: 32,
  subject: 'physics',
  topic: 'waves',
  question: "The maximum displacement of a wave particle from its mean position is called what?",
  options: ["Amplitude", "Wavelength", "Period", "Frequency"],
  correct: 0,
  solutionSteps: [
    "1. Amplitude is the maximum displacement."
  ]
},

{
  id: 33,
  subject: 'physics',
  topic: 'waves',
  question: "Two waves have frequencies 200 Hz and 180 Hz. The beat frequency produced is?",
  options: ["20 Hz", "180 Hz", "200 Hz", "10 Hz"],
  correct: 0,
  solutionSteps: [
    "1. Beat frequency = |f₁ - f₂| = |200 - 180| = 20 Hz."
  ]
},

{
  id: 34,
  subject: 'physics',
  topic: 'waves',
  question: "A vibrating tuning fork produces 60 complete oscillations in 2 seconds. Find its frequency.",
  options: ["20 Hz", "30 Hz", "60 Hz", "120 Hz"],
  correct: 3,
  solutionSteps: [
    "1. f = number of oscillations / time = 60 / 0.5 = 120 Hz."
  ]
},

// ---------- PHYSICS: Heat Energy ----------
{
  id: 35,
  subject: 'physics',
  topic: 'heat',
  question: "The quantity of heat required to raise the temperature of 1 kg of a substance by 1°C is called what?",
  options: ["Heat Capacity", "Latent Heat", "Specific Heat Capacity", "Thermal Energy"],
  correct: 2,
  solutionSteps: [
    "1. Specific Heat Capacity = heat per unit mass per degree rise in temperature."
  ]
},

{
  id: 36,
  subject: 'physics',
  topic: 'heat',
  question: "Calculate the heat energy required to raise the temperature of 2 kg of water from 20°C to 50°C. (Specific heat capacity of water = 4200 J/kg°C)",
  options: ["252,000 J", "126,000 J", "84,000 J", "168,000 J"],
  correct: 0,
  solutionSteps: [
    "1. Q = mcΔT.",
    "2. Q = 2 × 4200 × (50 - 20) = 2 × 4200 × 30 = 252,000 J."
  ]
},

{
  id: 37,
  subject: 'physics',
  topic: 'heat',
  question: "The heat energy absorbed or released during a change of state without a change in temperature is called what?",
  options: ["Specific Heat", "Latent Heat", "Thermal Capacity", "Radiation"],
  correct: 1,
  solutionSteps: [
    "1. Change of state involves Latent Heat."
  ]
},

{
  id: 38,
  subject: 'physics',
  topic: 'heat',
  question: "The process of heat transfer that does not require a material medium is called?",
  options: ["Conduction", "Convection", "Radiation", "Evaporation"],
  correct: 2,
  solutionSteps: [
    "1. Radiation can occur through a vacuum."
  ]
},

{
  id: 39,
  subject: 'physics',
  topic: 'heat',
  question: "Find the quantity of heat absorbed by 0.5 kg of aluminum when its temperature rises by 60°C. (c = 900 J/kg°C)",
  options: ["27,000 J", "30,000 J", "45,000 J", "25,000 J"],
  correct: 0,
  solutionSteps: [
    "1. Q = mcΔT = 0.5 × 900 × 60 = 27,000 J."
  ]
},

{
  id: 40,
  subject: 'physics',
  topic: 'heat',
  question: "Which of the following is a poor conductor of heat?",
  options: ["Copper", "Aluminum", "Wood", "Iron"],
  correct: 2,
  solutionSteps: [
    "1. Wood is a thermal insulator."
  ]
},

{
  id: 41,
  subject: 'physics',
  topic: 'heat',
  question: "The specific latent heat of fusion of ice is 3.36 × 10⁵ J/kg. Calculate the heat required to melt 2 kg of ice at 0°C.",
  options: ["6.72 × 10⁵ J", "3.36 × 10⁵ J", "1.68 × 10⁵ J", "7.00 × 10⁵ J"],
  correct: 0,
  solutionSteps: [
    "1. Q = mL = 2 × 3.36×10⁵ = 6.72×10⁵ J."
  ]
},

{
  id: 42,
  subject: 'physics',
  topic: 'heat',
  question: "Which method of heat transfer is responsible for the rise of smoke from a fire?",
  options: ["Conduction", "Convection", "Radiation", "Evaporation"],
  correct: 1,
  solutionSteps: [
    "1. Hot air rises due to convection currents."
  ]
},

{
  id: 43,
  subject: 'physics',
  topic: 'heat',
  question: "What type of surface is the best absorber of radiant heat?",
  options: ["Shiny white surface", "Polished metal surface", "Black rough surface", "Smooth silver surface"],
  correct: 2,
  solutionSteps: [
    "1. Black and rough surfaces absorb radiation best."
  ]
},

// ---------- PHYSICS: Motion ----------
{
  id: 44,
  subject: 'physics',
  topic: 'motion',
  question: "A car moves with a uniform velocity of 20 m/s for 10 seconds. Find the distance covered.",
  options: ["200 m", "150 m", "100 m", "250 m"],
  correct: 0,
  solutionSteps: [
    "1. s = v × t = 20 × 10 = 200 m."
  ]
},

{
  id: 45,
  subject: 'physics',
  topic: 'motion',
  question: "A body starts from rest and accelerates uniformly at 4 m/s² for 5 seconds. Find its final velocity.",
  options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
  correct: 2,
  solutionSteps: [
    "1. v = u + at = 0 + 4 × 5 = 20 m/s."
  ]
},

{
  id: 46,
  subject: 'physics',
  topic: 'motion',
  question: "A stone is dropped from a height of 20 m. Calculate the time taken to reach the ground. (g = 10 m/s²)",
  options: ["2 s", "3 s", "1 s", "4 s"],
  correct: 0,
  solutionSteps: [
    "1. s = ½gt² → 20 = ½×10×t² → t² = 4 → t = 2 s."
  ]
},

{
  id: 47,
  subject: 'physics',
  topic: 'motion',
  question: "If a car accelerates from 5 m/s to 25 m/s in 4 s, find its acceleration.",
  options: ["2.5 m/s²", "3.5 m/s²", "5.0 m/s²", "4.0 m/s²"],
  correct: 2,
  solutionSteps: [
    "1. a = (v - u)/t = (25 - 5)/4 = 5 m/s²."
  ]
},

{
  id: 48,
  subject: 'physics',
  topic: 'motion',
  question: "A body moving at 12 m/s comes to rest in 3 seconds. Find its deceleration.",
  options: ["3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
  correct: 1,
  solutionSteps: [
    "1. a = (v - u)/t = (0 - 12)/3 = -4 m/s² (deceleration = 4 m/s²)."
  ]
},

{
  id: 49,
  subject: 'physics',
  topic: 'motion',
  question: "A train travels 100 m in 5 seconds. Calculate its average speed.",
  options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
  correct: 2,
  solutionSteps: [
    "1. v = s / t = 100 / 5 = 20 m/s."
  ]
},

{
  id: 50,
  subject: 'physics',
  topic: 'motion',
  question: "An object is thrown vertically upward with a velocity of 20 m/s. Find the maximum height reached. (g = 10 m/s²)",
  options: ["15 m", "20 m", "25 m", "30 m"],
  correct: 2,
  solutionSteps: [
    "1. v² = u² - 2gh → 0 = 20² - 2×10×h.",
    "2. h = 400 / 20 = 20 m."
  ]
}


];

