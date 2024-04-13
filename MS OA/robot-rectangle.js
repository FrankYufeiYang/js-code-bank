/*


A drawing robot is positioned at point (0, 0) of a coordinate plane, and the string moves describes the path the robot will take.
Each of the strings's characters describes a single move made by the robot. Moreover, the robot will make the moves in the exact same order as they appear in the string, starting from position (0,0).
Assuming the robot has already made some moves from the string, and is currently at point (x, y), if the next character of the string is:
"^": the robot will move to (x, y+1);

"v": the robot will move to (x,y-1);

"<": the robot will move to (x-1, y);

">": the robot will move to (x+1,y).

Each time the robot moves, it draws a line between its current position and the point to which it moves. It is guaranteed that the instructions provided in the string moves will never cause the robot to visit the same point more than once, with the exception of point (0,0), which might be visited by the robot exactly twice: at the beginning and at the end of the robot's path. The task is to determine whether, after the robot has made all moves provided in the string, all the lines it has drawn form a single rectangle.

That, given the string moves, returns true if the robot's path will form a rectangle or false otherwise.
Examples:

Given moves "^^^<<<<>>>>", the function should return true.
Given moves ">^<", the function should return true.
*/

function isRectangle(path) {
  let x = 0,
    y = 0;
  let turns = 0;

  for (let i = 0; i < path.length - 1; i++) {
    if (
      ('<>'.includes(path[i]) && '^v'.includes(path[i + 1])) ||
      ('^v'.includes(path[i]) && '<>'.includes(path[i + 1]))
    )
      turns++;
  }
  for (let c of path) {
    if (c === '>') y++;
    else if (c === '<') y--;
    else if (c === '^') x++;
    else if (c === 'v') x--;
  }
  return x === y && y === 0 && (turns === 3 || turns === 4);
}

console.log(isRectangle('>^<v'));
console.log(isRectangle('^^^<<<<>>>>'));
console.log(isRectangle('>^<'));
console.log(isRectangle('^^<<<<vvv>>>^'));
console.log(isRectangle('^^<<<<vvv>>>>^'));
