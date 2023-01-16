const dayElement = document.getElementById("days");
const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");

const chineseNewyear = "22 Jan 2023";

function countdown(){
    const newYeardate = new Date(chineseNewyear);
    const currentDate = Date.now();
    
    const totalsSecond =(newYeardate-currentDate)/1000;
    const day = Math.floor(totalsSecond / 3600 / 24);
    const hour = Math.floor(totalsSecond / 3600) % 24;
    const minute = Math.floor(totalsSecond / 60) % 60;
    const second = Math.floor(totalsSecond) % 60;
    dayElement.innerHTML = day;
    hourElement.innerHTML = timeFormat(hour);
    minuteElement.innerHTML = timeFormat(minute);
    secondElement.innerHTML = timeFormat(second);
}

function timeFormat(time){
    return time < 10 ? "0"+(time): time
}

countdown();

setInterval( countdown, 1000);