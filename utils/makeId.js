import React from 'react';

import seedrandom from 'seedrandom';

export const makeId = (length, seed) => {
  let result = '';

  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  const rng = seedrandom(seed); // Initialize the random number generator with a seed

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(rng() * charactersLength)); // Use the random number generator instead of Math.random()
  }
  return result;
};

// import { v4 as uuidv4 } from 'uuid';

// export const makeId = (length, seed) => {
//   const id = uuidv4({ random: Buffer.from(seed) }); // Use a deterministic UUIDv4 generator based on the provided seed
//   return id.substr(0, length); // Truncate the ID to the desired length
// };
