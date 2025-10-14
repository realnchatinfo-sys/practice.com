// data.js
// Contains all question objects for the Math Practice App

const QUESTIONS = [
  {
    id: 1,
    topic: 'simultaneous2',
    question: "Solve the system: \\begin{cases} 2x + 3y = 13 \\\\ x - y = 1 \\end{cases}",
    options: [
      "$x=2,\\;y=3$",
      "$x=3,\\;y=\\tfrac{1}{2}$",
      "$x=4,\\;y=1$",
      "$x=5,\\;y=-1$"
    ],
    correct: 0,
    solutionSteps: [
      "$x - y = 1 \\Rightarrow x = y + 1$",
      "Substitute into $2x + 3y = 13$: $2(y + 1) + 3y = 13$",
      "$5y + 2 = 13 \\Rightarrow y = \\tfrac{11}{5}$",
      "$x = y + 1 = \\tfrac{16}{5}$"
    ],
    notes: "Example with fractional solution"
  },
  {
    id: 2,
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
      "Add equations: $(x+y)+(x-y)=5+1 \\Rightarrow 2x=6 \\Rightarrow x=3$",
      "Then $y = 5 - x = 2$"
    ]
  },
  {
    id: 3,
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
      "$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$",
      "Hence $x = 2$ or $x = 3$"
    ]
  },
  {
    id: 4,
    topic: 'simultaneous3',
    question: "Solve the system: \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 4 \\end{cases}",
    options: [
      "$x=1,y=2,z=3$",
      "$x=2,y=1,z=3$",
      "$x=1,y=3,z=2$",
      "$x=0,y=3,z=3$"
    ],
    correct: 0,
    solutionSteps: [
      "From eqn1: $z=6-x-y$",
      "Substitute into eqn2 and eqn3 and solve simultaneously.",
      "Result: $(x,y,z)=(\\tfrac{11}{7},\\tfrac{16}{7},\\tfrac{15}{7})$"
    ]
  },
  {
    id: 5,
    topic: 'quadratic',
    question: "Find roots: $2x^2 - 8x + 6 = 0$",
    options: [
      "$1,3$",
      "$1,\\tfrac{3}{2}$",
      "$2,\\tfrac{3}{2}$",
      "$1,2$"
    ],
    correct: 1,
    solutionSteps: [
      "Divide by 2: $x^2 - 4x + 3 = 0$",
      "Factor: $(x-1)(x-3)=0$ so $x=1$ or $x=3$"
    ]
  }
];
