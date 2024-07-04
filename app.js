'use strict';
const quotes = [

    'My life is my message.',
    // 'Time means a lot to me because, you see, I, too, am also a learner and am often lost in the joy of forever developing and simplifying. If you love life, donâ€™t waste time, for time is what life is made up of.',
    'Life is what happens when you\'re busy making other plans.',
    'It is better to be hated for what you are than to be loved for what you are not.',
    // 'Dost thou love life? Then do not squander time, for that is the stuff life is made of.',
    'The only way to do great work is to love what you do.',
    'Believe you can and you\'re halfway there.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'Your limitation—it\'s only your imagination.',
    'Push yourself, because no one else is going to do it for you.',
    'Great things never come from comfort zones.',
    'Dream it. Wish it. Do it.',
    'Success doesn\'t just find you. You have to go out and get it.',
    'The harder you work for something, the greater you\'ll feel when you achieve it.',
    'Dream bigger. Do bigger.',
    'Don\'t stop when you\'re tired. Stop when you\'re done.',
    'Wake up with determination. Go to bed with satisfaction.',
    'Do something today that your future self will thank you for.',
    'Little things make big days.',
    'It\'s going to be hard, but hard does not mean impossible.',
    'Don\'t wait for opportunity. Create it.',
    'Sometimes we\'re tested not to show our weaknesses, but to discover our strengths.',
    'The key to success is to focus on goals, not obstacles.',
    'Dream it. Believe it. Build it.',
    'Stay positive, work hard, and make it happen.',
    'I am in charge of how I feel and today I am choosing happiness.',
    'You are capable of more than you know.',
    'The only limit to our realization of tomorrow will be our doubts of today.',
    'The only way to achieve the impossible is to believe it is possible.',

    'The only way to predict the future is to create it.',
    'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    'Success is not just about the destination, but the journey you take to get there.',
    'Believe you can and you\'re halfway there.',
    'Your attitude determines your direction.',
    'In the middle of every difficulty lies opportunity.',
    'The difference between ordinary and extraordinary is that little extra.',
    'The only person you should try to be better than is the person you were yesterday.',
    'Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
    'Success is not the absence of failure; it\'s the persistence through failure.',
    'The only place where success comes before work is in the dictionary.',
    'Don\'t let yesterday take up too much of today.',
    'Opportunities don\'t happen, you create them.',
    'Success is not in what you have, but who you are.',
    'The only limit to our realization of tomorrow is our doubts of today.',
    'Happiness is not by chance, but by choice.',
    'The harder you work, the luckier you get.',
    'The only way to do great work is to love what you do.',
    // 'Strength doesn\'t come from what you can do. It comes from overcoming the things you once thought you couldn\'t.',
    'The future belongs to those who believe in the beauty of their dreams.'


    // 'What you get by achieving your goals is not as important as what you become by achieving your goals.'
];

function newQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let allQuotes = quotes[randomNumber] ;
    document.getElementById('quoteDisplay').innerHTML = '<p data-aos="fade-up" data-aos-delay="50">' + allQuotes + '</p>';
}

function loadQuotes(){
    newQuote(); // Display the first quote immediately
    // setInterval(newQuote, 7000); // Refresh quote every 5 seconds

}

function GreetingDisplay(){
    
    const myDate = new Date();
    let hrs = myDate.getHours();
    let greet;
    
    if (hrs < 12)
    greet = 'Good Morning,';
    else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon,';
    else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening,';
    
    document.getElementById('Greetings').innerHTML =  greet + ' Isaac.';
}


var aTags = document.querySelectorAll('span[data-href]');
// console.log(aTags); // Log the selected elements to the console
aTags.forEach(function(aTag) {
    var link = aTag.getAttribute('data-href');
    console.log(link); // Log the data-href attribute value
    aTag.addEventListener('click', function(e) {
        window.location.replace(link);
        // window.open(link, '_blank'); // Open the link in a new tab
    });
});



function setTime() {
    const d = new Date();
    let n = d.getHours();
    let t = d.getMinutes();
    
    document.getElementById("hours").innerHTML = n;

    if (t < 10)
        document.getElementById("time").innerHTML = '0' + t;
    else if (t >= 10 && t <= 60)
        document.getElementById("time").innerHTML = t;
    // document.getElementById("time").innerHTML = t;
    // document.getElementById("time").style.marginTop = '50%';

    let k = d.getHours();
    let j;
    if (k >= 0 && k < 12)
    j = 'AM';
    else if (k >= 12 && k < 24)
    j = 'PM';

    document.getElementById('jjj').innerHTML =  ' ' + j;
}

function timeOfDay(){
    const myDate = new Date();
    
}


function blinkTimer(){
    document.getElementById("ticker").style.color = 'transparent';
}
function blinkTimerShow(){
    document.getElementById("ticker").style.color = '#fff';
}
function updateTime(){
    setInterval(()=>{ setTime(); blinkTimer() },1000);
    setInterval(()=>{ setTime(); blinkTimerShow() },2000);
}





function formatDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January.', 'February.', 'March.', 'April.', 'May.', 'June.', 'July.', 'August.', 'September.', 'October.', 'November.', 'December.'];
  
    const day = days[date.getDay()];
    const dayOfMonth = date.getDate();
    let suffix;
    switch (dayOfMonth) {
      case 1:
      case 21:
      case 31:
        suffix = 'st';
        break;
      case 2:
      case 22:
        suffix = 'nd';
        break;
      case 3:
      case 23:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
    const month = months[date.getMonth()];
  
    return `${day}, ${dayOfMonth}${suffix} ${month}`;
  }
  
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  console.log(formattedDate); // Outputs: Fri, 26th April
document.getElementById("date").innerHTML = formattedDate;
  


loadQuotes();
// GreetingDisplay();

setTime();
updateTime();
timeOfDay();




