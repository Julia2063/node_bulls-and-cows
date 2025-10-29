/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getUserInput } = require('./modules/getUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

(async function app() {
  const numberToGuess = generateRandomNumber();
  const input = await getUserInput();

  const res = getBullsAndCows(Number(input), numberToGuess);

  console.log(`Computer guesses ${numberToGuess}`);
  console.log(res);
})();
