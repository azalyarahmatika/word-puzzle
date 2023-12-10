const wordSelection = (words) => {
  words.map((word)=>{
    const wordInput = document.getElementById(`${word}`);
    const wordLabel = document.querySelector(`label[for='${word}']`);
    
    wordInput.addEventListener('change', () => {
      if (wordInput.checked) {
        wordLabel.classList.add('line_through');
      } else {
        wordLabel.classList.remove('line_through');
      }
    })
  })
}

export default wordSelection;