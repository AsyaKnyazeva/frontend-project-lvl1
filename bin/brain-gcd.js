#!/usr/bin/env node

import {rules, makeRound} from '../src/games/gcd.js';
import createGame from '../src/index.js';

createGame(makeRound, rules);