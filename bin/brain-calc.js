#!/usr/bin/env node

// import askName from '../src/cli.js';
// console.log('Welcome to the Brain Games!');

// const name = askName();
import { rules, makeRound } from '../src/games/calc.js';
import createGame from '../src/index.js';

createGame(makeRound, rules);
