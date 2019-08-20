const current = new Date();
const currentTimeString = JSON.stringify(current).split('"')[1].split('T');
const date = currentTimeString[0];
const time = currentTimeString[1].split('.')[0];

console.log([date, time].join(' '));
