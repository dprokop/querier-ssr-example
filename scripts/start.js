
var fs = require('fs');
var child_process = require('child_process');

console.log('\x1Bc');
console.log('\x1b[32m', 'Checking if node modules installed...\n');
try {
  fs.statSync(process.cwd() + '/node_modules');
} catch (e) {
  console.log('\x1b[31m', '✗ Node modules not installed, running npm install first...\n')
  child_process.execSync("yarn install", { stdio: [0, 1, 2] });
}

console.log('\x1b[32m', '✓ Node modules installed, you are almost ready to craft:)\n');
console.log('\x1b[32m', '✈ Building the app...', '\x1b[0m')
