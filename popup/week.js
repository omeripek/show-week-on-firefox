currentDate = new Date();
startDate = new Date(currentDate.getFullYear(), 0, 1);
var days = Math.floor((currentDate - startDate) /
    (24 * 60 * 60 * 1000));
      
var weekNumber = Math.ceil(days / 7);

document.getElementById('currentDate').textContent = currentDate.toISOString().split('T')[0];
document.getElementById('week').textContent = weekNumber;