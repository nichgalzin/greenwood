/* Hamburger menu */

const menu = document.getElementById('menu');
const openBtn = document.getElementById('openbtn');
const closeBtn = document.getElementById('closebtn');


function openNav() {
    menu.style.width = '28%';
    openBtn.setAttribute('aria-expanded', true);
  }
  
  function closeNav() {
    menu.style.width = '0';
    openBtn.setAttribute('aria-expanded', false);
  }

openBtn.addEventListener('click', openNav);

closeBtn.addEventListener('click', closeNav);


/* Date box */

// DOM access and variables

const dateBox = document.getElementById('date-box');
const date = new Date();
const formatDate = date.toLocaleDateString('en-GB');
const month = date.getMonth() + 1;
const dateParagraph = document.createElement('p');
const countParagraph = document.createElement('p');


//Month count down function 

function countDown () {
    let monthsUntil = 8 - month;
    if (monthsUntil > 0) {
        countParagraph.textContent = `Just ${monthsUntil} months until SpoonFest!`;
    } else if (monthsUntil === 0) {
        countParagraph.textContent = 'Spoonfest is this month. Yipeee!';

    } else {
        countParagraph.textContent = 'Spoonfest is over for the year!';
    }
    dateParagraph.textContent = `Today is ${formatDate}`;
    dateBox.insertBefore(dateParagraph, dateBox.children[0]);
    dateBox.insertBefore(countParagraph, dateBox.children[1]);

}
  
// Funciton call

countDown();
