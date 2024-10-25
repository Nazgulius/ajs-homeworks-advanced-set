// TODO: write your code here
import Team from './Team.js';

console.log('Работает');

const team = new Team();

console.log(team.add('Вася'));
console.log(team.add('Петя'));
console.log(team.add('Оля'));
console.log(team.toArray());

