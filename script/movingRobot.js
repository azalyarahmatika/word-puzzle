const movingRobot = (robot) => {
  robot.focus();

  robot.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      const robotPosition = Number(robot.parentElement.id);
      const rightRobotPosition = robotPosition + 1;
      const newRightPosition = document.getElementById(`${rightRobotPosition}`);

      if(newRightPosition) {
        newRightPosition.appendChild(robot);
        robot.focus();
      }
    }

    if (event.key === 'ArrowLeft') { 
      const robotPosition = Number(robot.parentElement.id);
      const leftRobotPosition = robotPosition - 1;
      const newLeftPosition = document.getElementById(`${leftRobotPosition}`);

      if(newLeftPosition) {
        newLeftPosition.appendChild(robot);
        robot.focus();
      }
    }

    if (event.key === 'ArrowUp') {
      const robotPosition = Number(robot.parentElement.id);
      const upRobotPosition = robotPosition - 11;
      const newUpPosition = document.getElementById(`${upRobotPosition}`);

      if(newUpPosition) {
        newUpPosition.appendChild(robot);
        robot.focus();
      }
    }
    
    if (event.key === 'ArrowDown') {
      const robotPosition = Number(robot.parentElement.id);
      const downRobotPosition = robotPosition + 11;
      const newDownPosition = document.getElementById(`${downRobotPosition}`);

      if(newDownPosition) {
        newDownPosition.appendChild(robot);
        robot.focus();
      }
    }
  });

  robot.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      const robotparentElement = robot.parentElement;

      if(robotparentElement.classList.contains('clean')) {
        robotparentElement.classList.remove('clean');
      } else {
        robotparentElement.classList.add('clean');
      }
    }
  })
}

export default movingRobot;