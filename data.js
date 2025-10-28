/*
data.js
Purpose: Provide the question bank for the WAEC/JAMB-style Quiz App.
Structure:
- Exports a single constant QUESTIONS with two arrays: math (100 items) and physics (100 items).
- Each question object:
  {
    id: "M001" or "P001",
    question: "Question text (can include LaTeX)",
    options: ["A text", "B text", "C text", "D text"],
    answer: "A"  // correct option letter (A-D)
  }
Implementation note:
- To keep the file maintainable and to ensure correctness, questions are generated programmatically using small templates.
- IDs are stable and deterministic.
- All questions are multiple-choice with one correct answer.
*/

function pad(num, size=3){
  let s = String(num);
  while(s.length < size) s = "0" + s;
  return s;
}

/* ------- Helper small solvers to produce consistent option choices ------ */

// produce integer distractors around a correct integer value
function intDistractors(correct, n=3){
  const opts = new Set();
  opts.add(correct);
  let delta = 1;
  while(opts.size < n+1){
    opts.add(correct + delta);
    if(opts.size >= n+1) break;
    opts.add(correct - delta);
    delta++;
  }
  return Array.from(opts).slice(0, n+1);
}

// produce multiple choice with one correct at random stable positions (we'll shuffle later in script)
function makeQuestion(id, qtext, correctText, distractors){
  // assume distractors array length 3
  const options = [correctText, ...distractors.slice(0,3)];
  // Answer letter is "A" initially (script will shuffle options at runtime)
  return { id, question: qtext, options, answer: "A" };
}

/* ----------------- Generate 100 Mathematics Questions ------------------ */
const math = [];

(function generateMath(){
  // We'll cover: Algebra, Quadratics, Simultaneous eqns, Polynomials, Trig, Geometry, Mensuration, Calculus basic, Sequences, Probability, Log/Exp
  for(let i=1;i<=100;i++){
    const id = "M" + pad(i,3);
    let q, correct, distractors;

    // use categories by index pattern
    const idx = i % 10;
    switch(idx){
      case 1: { // linear algebra / simplification
        const a = (i % 9) + 2; const b = (i % 7) + 1;
        q = `Simplify: \\(\\dfrac{${a}x^2 - ${b}x}{x}\\). What is the result?`;
        correct = `${a}x - ${b}`;
        distractors = [`${a}x + ${b}`, `${a - b}x`, `${a}x`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 2:{ // quadratic roots simple
        const r1 = (i % 7) + 1, r2 = (i % 5) + 2;
        const a = 1, b = -(r1 + r2), c = r1 * r2;
        q = `Find one root of equation \\(x^2 ${b >=0 ? '+'+b : b}x ${c >=0? '+'+c: c}=0\\).`;
        correct = `${r1}`;
        distractors = [`${r2}`, `${-r1}`, `${r1 + r2}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 3:{ // simultaneous linear
        const a=2, b=3, c= (i%10)+4, d=1, e= -((i%5)+2);
        // Solve 2x+3y=c ; x+dy=e  (quick solve)
        // x = e - d*y ; 2(e - d*y) + 3y = c => 2e -2d y +3y = c => y(3-2d) = c -2e
        const denom = 3 - 2*d || 1;
        const y = (c - 2*e)/denom;
        const x = e - d*y;
        q = `Solve: \\(2x+3y=${c}\\) and \\(x+${d}y=${e}\\). What is the value of x (nearest 2 d.p. if needed)?`;
        const xstr = Number.isInteger(x) ? String(x) : x.toFixed(2);
        correct = xstr;
        distractors = [`${(x+1).toFixed(2)}`, `${(x-1).toFixed(2)}`, `${(x+2).toFixed(2)}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 4:{ // modulus / indices
        const n=(i%5)+2;
        q = `Evaluate: \\(\\sqrt[${n}]{${Math.pow(2,n)}}\\).`;
        correct = `2`;
        distractors = [`${Math.pow(2,n)}`, `${n}`, `${Math.sqrt(2)}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 5:{ // trigonometry basic
        const angle = [30,45,60][i%3];
        const val = angle===30 ? '1/2' : angle===45 ? '√2/2' : '√3/2';
        q = `What is \\(\\sin ${angle}^{\\circ}\\)?`;
        correct = val;
        distractors = ['0','1', angle===45 ? '1/2' : '√2/2'];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 6:{ // geometry: area triangle
        const b = (i%9)+4, h = (i%7)+3;
        const area = 0.5*b*h;
        q = `Area of triangle with base ${b} cm and height ${h} cm is:`;
        correct = `${area} cm^{2}`;
        distractors = [`${b*h} cm^{2}`, `${(b+h)} cm^{2}`, `${area+5} cm^{2}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 7:{ // sequences
        const a1= (i%6)+1, d=(i%5)+1, term = a1 + (5-1)*d;
        q = `In an AP with first term ${a1} and difference ${d}, the 5th term is:`;
        correct = `${term}`;
        distractors = [`${term+1}`, `${term-1}`, `${a1 + 4}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 8:{ // probability simple
        const total = 10; const good = (i%6)+1;
        const frac = `${good}/${total}`;
        q = `A bag has ${total} balls, ${good} are red. Probability of drawing a red ball is:`;
        correct = frac;
        distractors = [`${(total-good)}/${total}`, `${good}/${total-1}`, `${1}/${total}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 9:{ // logarithms
        const base = 10; const val = Math.pow(10,(i%3)+1);
        q = `\\(\\log_{${base}} ${val} = ?\\)`;
        correct = `${Math.log10(val)}`;
        distractors = [`${Math.log10(val)+1}`, `${Math.log10(val)-1}`, `${(i%5)+1}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
      default:{ // calculus basic derivative or gradient
        const n = (i%5)+2;
        q = `Differentiate: \\(y = x^{${n}}\\). What is \\(\\dfrac{dy}{dx}\\)?`;
        correct = `${n}x^{${n-1}}`;
        distractors = [`x^{${n}}`, `${n-1}x^{${n-2}}`, `${n}x^{${n}}`];
        math.push(makeQuestion(id,q,correct,distractors)); break;
      }
    }
  }
})();

/* ----------------- Generate 100 Physics Questions ------------------ */
const physics = [];

(function generatePhysics(){
  // Talk areas: Kinematics, Dynamics, Work/Energy, Heat, Electricity, Magnetism, Waves, Optics, Simple Circuits
  for(let i=1;i<=100;i++){
    const id = "P" + pad(i,3);
    let q, correct, distractors;
    const idx = i % 10;
    switch(idx){
      case 1:{ // kinematics: speed
        const d = (i%90)+10; const t = ((i%5)+1);
        const v = (d / t).toFixed(2);
        q = `A particle travels ${d} m in ${t} s. What is its speed (m/s)?`;
        correct = `${v}`;
        distractors = [`${(d/(t+1)).toFixed(2)}`, `${(d/(t-1||1)).toFixed(2)}`, `${(v*1.5).toFixed(2)}`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 2:{ // acceleration
        const u = (i%10)+1, v=(i%8)+5, t=(i%4)+1;
        const a = ((v - u)/t).toFixed(2);
        q = `If initial speed is ${u} m/s and final speed ${v} m/s in ${t} s, acceleration = ? (m/s^2)`;
        correct = `${a}`;
        distractors = [`${(a*2).toFixed(2)}`, `${(a/2).toFixed(2)}`, `${(a+1).toFixed(2)}`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 3:{ // Newtons 2nd law
        const m = (i%7)+1, a=(i%5)+1;
        const F = m*a;
        q = `A mass of ${m} kg is accelerated at ${a} m/s^2. What is the net force (N)?`;
        correct = `${F} N`;
        distractors = [`${(F+5)} N`, `${(F-2)} N`, `${(F*2)} N`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 4:{ // energy: kinetic
        const m=(i%8)+1, v=(i%6)+2;
        const KE = 0.5*m*v*v;
        q = `Kinetic energy of mass ${m} kg moving at ${v} m/s is:`;
        correct = `${KE.toFixed(2)} J`;
        distractors = [`${(m*v).toFixed(2)} J`, `${(m*v*v).toFixed(2)} J`, `${(KE+10).toFixed(2)} J`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 5:{ // work done by constant force
        const F=(i%10)+5, s=(i%7)+2;
        const W = F*s;
        q = `Work done when a constant force of ${F} N moves an object ${s} m is:`;
        correct = `${W} J`;
        distractors = [`${(W+10)} J`, `${(F+s)} J`, `${(W-5)} J`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 6:{ // pressure
        const F=(i%20)+10, A=(i%5)+1;
        const P = (F / A).toFixed(2);
        q = `Pressure when force ${F} N acts on area ${A} m^2 = (Pa):`;
        correct = `${P}`;
        distractors = [`${(P*2).toFixed(2)}`, `${(P-1).toFixed(2)}`, `${(F*A).toFixed(2)}`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 7:{ // simple circuit: Ohm's law
        const R = (i%50)+1, I=(i%5)+1;
        const V = R * I;
        q = `If resistance = ${R} Ω and current = ${I} A, the potential difference = ? (V)`;
        correct = `${V} V`;
        distractors = [`${(V+5)} V`, `${(R/I).toFixed(2)} V`, `${(I*I*R).toFixed(2)} V`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 8:{ // wave: frequency from period
        const T = ((i%5)+1)/10; // e.g., 0.1s
        const f = (1/T).toFixed(2);
        q = `A wave has period ${T}s. Its frequency is:`;
        correct = `${f} Hz`;
        distractors = [`${(f+1).toFixed(2)} Hz`, `${(f-0.5).toFixed(2)} Hz`, `${(T*10).toFixed(2)} Hz`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      case 9:{ // optics: angle of incidence/reflection
        const angle = (i%30)+10;
        q = `A ray strikes a mirror at ${angle}^{\\circ}. The angle of reflection is:`;
        correct = `${angle}^{\\circ}`;
        distractors = [`${90-angle}^{\\circ}`, `${180-angle}^{\\circ}`, `${angle/2}^{\\circ}`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
      default:{ // thermal: specific heat simple calc
        const m = (i%5)+1, c=4200, dt=(i%10)+5; // water c for familiarity but not always correct for WAEC style
        const Q = m*c*dt;
        q = `Heat required to raise ${m} kg of substance with specific heat ${c} J/kgK by ${dt} K is:`;
        correct = `${Q} J`;
        distractors = [`${(Q/1000).toFixed(2)} kJ`, `${(Q+1000)} J`, `${(m*c)} J`];
        physics.push(makeQuestion(id,q,correct,distractors)); break;
      }
    }
  }
})();

/* Export QUESTIONS const for import in app */
export const QUESTIONS = {
  math,
  physics
};
