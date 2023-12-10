import movingRobot from "./movingRobot.js";

const makingRobot = () => {
  const boxWithId1 = document.getElementById('1');
  const robot = document.createElement('div');
  robot.classList.add('robot');
  robot.setAttribute('id', 'robot');
  robot.setAttribute('tabindex', '0');

  boxWithId1.appendChild(robot);

  const robotElement = document.querySelector('.robot');
  movingRobot(robotElement);

  return robotElement;
}

export default makingRobot;