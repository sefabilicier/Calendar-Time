// CALENDAR SECTION CODES

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const calendarDays = document.getElementById("calendarDays");
const monthInfo = document.querySelector(".monthInfo");
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
    calendarDays.innerHTML = "";
    monthInfo.innerText = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    let row = document.createElement("tr");

    for (let i = 0; i < firstDay - 1; i++) {
        const emptyCell = document.createElement("td");
        row.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if ( row.children.length === 7) {
            calendarDays.appendChild(row);
            row = document.createElement("tr");
        }
        
        const dayCell = document.createElement("td");
        dayCell.innerText = day;
        row.appendChild(dayCell);
    }
}

document.querySelector(".left-symbol").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

document.querySelector(".right-symbol").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);




// LIVE TIME SECTION CODES
function getTime() {
    //const timeElement = document.querySelector('.live-time');

    const hoursSpan = document.querySelector('.hours');
    const minutesSpan = document.querySelector('.minutes');
    const secondsSpan = document.querySelector('.seconds');

    function time() {
        const date = new Date();
        const seconds = ("0" +date.getSeconds()).slice(-2);
        const minutes = ("0" +date.getMinutes()).slice(-2);
        const hours = ("0" +date.getHours()).slice(-2);

        /*timeFormat = 
            ("0" + hours).slice(-2) + " " + 
            ("0" + minutes).slice(-2) + " " + 
            ("0" + seconds).slice(-2);
        */
        //timeElement.textContent = timeFormat;

        hoursSpan.textContent = hours;
        minutesSpan.textContent = minutes;
        secondsSpan.textContent = seconds;
    }

    time();
    setInterval(time, 1000)
}

function liveDay() {
    const dayElement = document.querySelector('.live-day');
    const date = new Date();
    const options = { weekday: 'long' };
    const formattedDay = date.toLocaleDateString('en-US', options); // Get the full day name
    dayElement.textContent = formattedDay;
}

window.onload = function () {
    getTime();
    liveDay();
}

document.addEventListener('keydown', function(pressing) {
    if (pressing.key === 'ArrowLeft') {
        document.querySelector('.left-symbol').click();
    } else if (pressing.key === 'ArrowRight') {
        document.querySelector('.right-symbol').click();
    }
});