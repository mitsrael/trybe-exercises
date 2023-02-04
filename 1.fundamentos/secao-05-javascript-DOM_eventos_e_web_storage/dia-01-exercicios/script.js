const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const div1 = document.getElementsByClassName('emergency-tasks');
div1[0].style.backgroundColor = 'pink';

const urgente1 = document.querySelectorAll('.emergency-tasks div h3')[0].style.backgroundColor = 'purple';
const urgente2 = document.querySelectorAll('.emergency-tasks div h3')[1].style.backgroundColor = 'purple';

const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

const naoUrgente1 = document.querySelectorAll('.no-emergency-tasks div h3')[0].style.backgroundColor = 'black';
const naoUrgente2 = document.querySelectorAll('.no-emergency-tasks div h3')[1].style.backgroundColor = 'black';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';