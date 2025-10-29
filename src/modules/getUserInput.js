const { createInterface } = require('readline/promises');
const { checkIsValidUserInput } = require('./checkIsValidUserInput');

async function getUserInput() {
  const terminal = createInterface(process.stdin, process.stdout);

  while (true) {
    const digits = await terminal.question(
      'Input just four different digits: ',
    );

    const ok = checkIsValidUserInput(digits);

    if (ok) {
      terminal.close();

      return digits.trim();
    }

    // eslint-disable-next-line no-console
    console.log('Try again! ');
  }
}

module.exports = {
  getUserInput,
};
