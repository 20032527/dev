#!/usr/bin/env node
// Runner for exc4's processInput
// Usage:
//   node exc5.js                 -> runs built-in test
//   node exc5.js "3 5 : 1 2 3 4 5 6 7 8 9"  -> runs with provided input

const { processInput } = require('./exc4');

function run(input) {
  try {
    const r = processInput(input);
    console.log('Input:', input);
    console.log('Sum:', r.sum);
    console.log('Matching:', r.matching.join(' '));
    return 0;
  } catch (e) {
    console.error('Error:', e.message);
    return 2;
  }
}

if (require.main === module) {
  const argvInput = process.argv.slice(2).join(' ');
  if (argvInput && argvInput.trim().length > 0) {
    process.exit(run(argvInput));
  }
  // default test
  const defaultInput = '3 5 : 1 2 3 4 5 6 7 8 9';
  process.exit(run(defaultInput));
}

module.exports = { run };
