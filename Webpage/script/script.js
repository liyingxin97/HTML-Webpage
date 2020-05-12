//Class 10-15 + 10-17
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var currentDay = new Date();
var day2Out = document.getElementById('timeOutput');
var clockRun;

function dayCheck(){
	document.getElementById("firstOutput").innerHTML = weekDays[currentDay.getDay()];
	document.getElementById("secondButton").style.display = "block";
}
function fullWeek(){
	var daysOffset = currentDay.getDay();
	for (i = 0; i < weekDays.length; i++){
		if(i + daysOffset > weekDays.length - 1){
			daysOffset -= 7;
		}
	document.getElementById("secondOutput").innerHTML += weekDays[i + daysOffset] + "<br>";
	}
}
function dateDisplay(){
	window.clearTimeout(clockRun);
	day2Out.innerHTML = weekDays[currentDay.getDay()];
	day2Out.innerHTML += ", " + months[currentDay.getMonth()] + " ";
	day2Out.innerHTML += currentDay.getDate() + ", " + currentDay.getFullYear();
}
function clock(){
	currentDay = new Date();
	var hours = currentDay.getHours();
	var mins = currentDay.getMinutes();
	var secs = currentDay.getSeconds();
	hours = afterNoon(hours);
	mins = needsZero(mins);
	secs = needsZero(secs);
	day2Out.innerHTML = hours + ":" + mins + ":" + secs;
	clockRun = window.setTimeout(clock, 500);
}
function afterNoon(hours){
	if(hours > 12){
		hours -= 12;
	}
	return hours;
}
function needsZero(num){
	if(num < 10){
		num = "0" + num;
	}
	return num;
}