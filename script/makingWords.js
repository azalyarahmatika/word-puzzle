const makingWords = (words) => {
  const wordContainer = document.querySelector('.words_container');

  words.map((word)=>{
    const wrapper = document.createElement('div');
    wrapper.classList.add('word_wrapper');
    
    const wordImg = document.createElement('img');
    const lowerCaseWord = word.charAt(0).toLowerCase() + word.slice(1);
    wordImg.setAttribute('src', `./assets/${lowerCaseWord}.png`);
    
    const wordLabel = document.createElement('label');
    wordLabel.setAttribute('for', `${word}`);
    wordLabel.innerHTML = `${word}`;

    const wordInput = document.createElement('input');
    wordInput.setAttribute('id', `${word}`);
    wordInput.setAttribute('type', 'checkbox');

    const imageTitle = document.createElement('div');
    imageTitle.append(wordInput, wordLabel);

    wrapper.append(wordImg, imageTitle);
    wordContainer.appendChild(wrapper);
  });
  return wordContainer;
}

export default makingWords;