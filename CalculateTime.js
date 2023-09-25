
/**
 * ``
 */

var time = "24:50:65"


var hours = Number(time.slice(0,2)); // getting and converting the value of hours in @time sting
var minute = Number(time.slice(3,5));// getting and converting the value of minute in @time sting
var seconde = Number(time.slice(6,8));// getting and converting the value of seconde in @time sting
var day;


// this function handle calculationg of the time 
function calculeTime(calcule, modify){
  return modify += Math.floor(calcule/60);
  
}

// function that updates the modified part of the time
function updatesTheTime(target, value){
  if(target == "minute") minute = value
  if(target == "hours") hours = value
}

// function that will format time values twogather
function formatTime() {
  let $day;
  // if the length of the hours chaine of characters is biger lower than 2, add a 0 to it's beggin
  let $hours = String(hours).length < 2 ?`0${hours}` : hours
  // if the length of the minutes chaine of characters is biger lower than 2, add a 0 to it's beggin
  let $menutes = String(minute).length < 2 ?`0${minute}` : minute
  // if the length of the secondes chaine of characters is biger lower than 2, add a 0 to it's beggin
  let $secondes = String(seconde).length < 2 ?`0${seconde}` : seconde

  if (day) { // if day true (means have a value other then {null, 0, undefined})
    $day = String(String(day).length < 2 ?`0${day}` : day) // add 0 ahead of value of day if it lenght lower then 2
    return String(`${$day}:${$hours}:${$menutes}:${$secondes}`)
  }else return String(`${$day}:${$hours}:${$menutes}:${$secondes}`)

}

// once the hours value become equale or superure to 24 add a day to our time indicator
function updateDay() {
  day = hours/24;
  hours %= 25;
}


// finding wich part of the @time has passed it's normal limite
if(seconde > 60){
  updatesTheTime("minute", calculeTime(seconde, minute));
  seconde %= 60;
}

if(minute > 60) {
  updatesTheTime(hours, calculeTime(minute, hours));
  minute %= 60;
}

if(hours >= 24) {
  updateDay()
} 

console.log(formatTime());
