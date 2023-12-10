import {boxes, words} from "./dataSource.js";
import makingRobot from "./makingRobot.js";
import makingGrid from "./makingGrid.js";
import makingWords from "./makingWords.js";
import wordSelection from "./wordSelection.js";

document.addEventListener('DOMContentLoaded', () => {
  makingGrid(boxes);
  const robot = makingRobot();

  makingWords(words);
  wordSelection(words);

  document.addEventListener('click', ()=>{
    robot.focus();
  })
});