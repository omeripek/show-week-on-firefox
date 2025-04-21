const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDay();  

const startOfYear = new Date(currentYear, 0, 1);

const firstDayOfYear = startOfYear.getDay();

const daysSinceStart = Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000));

let weekNumber = Math.floor((daysSinceStart + (firstDayOfYear === 0 ? 6 : firstDayOfYear - 1)) / 7) + 1;

document.getElementById('currentDate').textContent = currentDate.toISOString().split('T')[0];
document.getElementById('week').textContent = weekNumber;
