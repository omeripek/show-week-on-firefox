const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentDay = (currentDate.getDay() + 6) % 7;
const startOfYear = new Date(currentYear, 0, 1);
const daysSinceStart = Math.floor((currentDate - startOfYear) / (24 * 60 * 60 * 1000));
let weekNumber = Math.floor((daysSinceStart + (7 - currentDay) + 1) / 7);

const firstDayOfYear = startOfYear.getDay();
if (firstDayOfYear === 4 || firstDayOfYear === 5 || firstDayOfYear === 6) {
    weekNumber++;
}

document.getElementById('currentDate').textContent = currentDate.toISOString().split('T')[0];
document.getElementById('week').textContent = weekNumber;
