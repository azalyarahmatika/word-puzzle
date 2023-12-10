const makingGrid = (boxes) => {
  const puzzle_container = document.querySelector('.puzzle_container');
  boxes.map((box) => {
    const grid = document.createElement('div');
    grid.classList.add('box');
    grid.setAttribute('id', `${box.id}`);

    const letter = document.createElement('p');
    letter.classList.add('letter');
    letter.innerHTML = `${box.letter}`;
    grid.appendChild(letter);

    puzzle_container.appendChild(grid);
  })
}

export default makingGrid;