import Box from './BoxConstructor.js';

const letters = ['R', 'O', 'R', 'A', 'N', 'G', 'E', 'C', 'H', 'R', 'B', 'G', 'W', 'A', 'D', 'I', 'B', 'A', 'N', 'A', 'N', 'A', 'A', 'W', 'A', 'T', 'E', 'R', 'M', 'E', 'L', 'O', 'N', 'V', 'M', 'A', 'G', 'O', 'M', 'A', 'P', 'P', 'O', 'B', 'O', 'Q', 'L', 'R', 'E', 'A', 'O', 'M', 'P', 'E', 'A', 'C', 'Y', 'E', 'A', 'T', 'P', 'E', 'A', 'E', 'P', 'A', 'A', 'B', 'M', 'P', 'I', 'P', 'G', 'R', 'A', 'M', 'M', 'D', 'P', 'O', 'E', 'P', 'L', 'R', 'K', 'R', 'A', 'A', 'O', 'R', 'N', 'S', 'A', 'E', 'N', 'A', 'R', 'E', 'N', 'V', 'P', 'I', 'N', 'E', 'A', 'P', 'P', 'L', 'E', 'G', 'C', 'H', 'E', 'R', 'R', 'Y', 'X', 'Z', 'A', 'E', 'O'];

const boxes = letters.map((letter, index) => {
  return new Box(index + 1, letter)
});

const words = ['Grape', 'Pear', 'Apple', 'Pineapple', 'Cherry', 'Lemon', 'Pea', 'Orange', 'Watermelon', 'Mango', 'Banana', 'Avocado'];

export { boxes, words};