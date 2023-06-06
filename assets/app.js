
const hoursDOM = document.querySelector("#hours")
const minutedDOM = document.querySelector("#minute");
const secondDOM = document.querySelector("#second");


function getTime() {
    let time = new Date()
    console.log(time);
    let hours = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()

        hoursDOM.innerHTML = hours < 10 ? "0" + hours : hours;
        minutedDOM.innerHTML = minute < 10 ? "0" + minute : minute;
        secondDOM.innerHTML = second < 10 ? "0" + second : second;
}

setInterval(getTime,1000)