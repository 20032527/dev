// Factors : Multiples Calculator
// Provides a small HTML UI (for browsers) and a Node-friendly self-test when run with `node exc4.js`.

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Factors and Multiples</title>
  <style>
    body { font-family: sans-serif; margin: 2em; }
    input, button { padding: 0.5em; margin: 0.5em 0; width: 100%; }
    .output { margin-top: 1em; font-weight: bold; }
  </style>
</head>
<body>
  <h1>Factors : Multiples Calculator</h1>
  <label for="input">Enter input (e.g. 3 5 : 1 2 3 4 5 6 7 8 9)</label>
  <input id="input" type="text" placeholder="factors : multiples">
  <button id="btn">Calculate</button>
  <div class="output" id="output"></div>

  <script>
    function processInput(str) {
      if (typeof str !== 'string') throw new Error('Input must be a string');
      const parts = str.split(':');
      if (parts.length !== 2) throw new Error("Input must be in the format 'factors : multiples'");
      const [factorsStr, multiplesStr] = parts.map(s => s.trim());

      const parseNumbers = s => s.length === 0 ? [] : s.split(/\s+/).map(x => {
        const n = Number(x);
        if (!Number.isFinite(n)) throw new Error('Invalid number: ' + x);
        return n;
      });

      const factors = parseNumbers(factorsStr);
      const multiples = parseNumbers(multiplesStr);

      if (factors.length === 0) throw new Error('At least one factor required');

      const isMultiple = num => factors.some(f => f !== 0 && num % f === 0);
      const matching = multiples.filter(isMultiple);
      const resultSum = matching.reduce((sum, n) => sum + n, 0);

      return { sum: resultSum, factors, multiples, matching };
    }

    document.getElementById('btn').addEventListener('click', () => {
      const input = document.getElementById('input').value;
      const out = document.getElementById('output');
      try {
  const r = processInput(input);
  out.textContent = 'Sum=' + r.sum + '   Matching=[' + r.matching.join(' ') + ']';
      } catch (e) {
        out.textContent = 'Error: ' + e.message;
      }
    });
  </script>
</body>
</html>`;

function processInput(str) {
  // Reuse the same logic as the browser script; keep this pure and testable.
  if (typeof str !== 'string') throw new Error('Input must be a string');
  const parts = str.split(':');
  if (parts.length !== 2) throw new Error("Input must be in the format 'factors : multiples'");
  const [factorsStr, multiplesStr] = parts.map(s => s.trim());

  const parseNumbers = s => s.length === 0 ? [] : s.split(/\s+/).map(x => {
    const n = Number(x);
    if (!Number.isFinite(n)) throw new Error('Invalid number: ' + x);
    return n;
  });

  const factors = parseNumbers(factorsStr);
  const multiples = parseNumbers(multiplesStr);
  if (factors.length === 0) throw new Error('At least one factor required');

  const isMultiple = num => factors.some(f => f !== 0 && num % f === 0);
  const matching = multiples.filter(isMultiple);
  const resultSum = matching.reduce((sum, n) => sum + n, 0);

  return { sum: resultSum, factors, multiples, matching };
}

// If run as a script with Node, perform a quick self-test.
if (typeof module !== 'undefined' && require.main === module) {
  const testInput = '3 5 : 1 2 3 4 5 6 7 8 9';
  try {
    const r = processInput(testInput);
    console.log('Test input:', testInput);
    console.log('Sum:', r.sum);
    console.log('Matching:', r.matching.join(' '));
    process.exit(0);
  } catch (e) {
    console.error('Self-test failed:', e.message);
    process.exit(2);
  }
}

module.exports = { html, processInput };