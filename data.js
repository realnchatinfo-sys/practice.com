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
  }

];
