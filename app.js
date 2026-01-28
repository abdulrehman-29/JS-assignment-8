// ========== Q-1 =========== //

// var currentTime = new Date();
// alert(currentTime);


// ========== Q-2 =========== //

// var month = new Date();
// var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// var currentMonth = monthArray[month.getMonth()]

// alert(currentMonth);

// ========== q-3 ========== //

// var date = new Date();
// var dayArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

// var currentDay = dayArray[date.getDay()];

// alert("Today is : " + currentDay)

// ========= Q-4 =========== //

// var date = new Date();
// var dayArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

// var currentDay = dayArray[date.getDay()];

// if (currentDay === "Sun" || currentDay === "Sat"){
//     alert("It's Fun Day")
// } else {
//     alert("It's not a Fun Day")
// }

// ========== Q-5 =========== //

// var date = new Date();
// var currentDate = date.getDate();

// if (currentDate <= 15) {
//     alert("First fifteen days of the month")
// } else {
//     alert("Last days of the month")
// };

// =========== Q-6 ========== //

// var date = new Date();
// var timeInMillisecond = date.getTime()
// var convertIntoMinute = timeInMillisecond / (1000 * 60)
// var minute = Math.floor(convertIntoMinute)

// document.write("Current Date: " + date + "<br>");
// document.write("Elapesd millisecond since January 1, 1970: " + timeInMillisecond + "<br>");
// document.write("Elapesd minutes since January 1, 1970: " + minute + "<br>");

// =========== Q-7 ========== //

// var date = new Date();
// var currentTime = date.getHours();

// if (currentTime <= 12){
//     alert("It's 'AM'")
// } else{
//     alert("It's 'PM'")
// };

// ========== Q-8 =========== //

// var date = new Date();
// var laterDate = new Date("31 December, 2026");
// alert(laterDate);

// ========== Q-9 =========== //

// var date = new Date();
// var currentTime = date.getTime();

// var ramadanDate = new Date("March 30, 2025");
// var ramadantime = ramadanDate.getTime();

// var timePassed = currentTime - ramadantime;

// var convertTime = timePassed / (1000 * 60 * 60 * 24);
// var dayPassed = Math.floor(convertTime);

// alert(dayPassed + " days have passed since 1st Ramadan, 2025");

// ========== Q-10 =========== //

// var date = new Date();
// var currentTime = date.getTime();

// var datePassed = new Date("1 Jan, 2015");
// var getTime = datePassed.getTime();

// var remainingTime = currentTime - getTime;
// var convertIntoSecond = remainingTime / (1000);

// var roundOff = Math.floor(convertIntoSecond);

// document.write("On reference Date " + datePassed + ", <br>" + roundOff + " seconds had passed since begining of 2015")

// ========== Q-11 =========== //

// var date = new Date();
// var currentHours = date.getHours()

// var afterTime = new Date(date);
// afterTime.setHours(currentHours + 1);

// document.write("Current Date : " + date + "<br>");
// document.write("1 hour ago, It was : " + afterTime);

// ========== Q-12 =========== //

// var currentDate = new Date();

// var pastDate = new Date(currentDate)
// pastDate.setFullYear(currentDate.getFullYear() - 100)

// document.write("Current Date : " + currentDate + "<br>")
// document.write("100 Years back, it was : " + pastDate)

// ========== Q-13 =========== //

// var birthYear = +prompt("Enter your age?")

// var currentTime = new Date();
// var getFullYear = currentTime.getFullYear();

// var birthYear = getFullYear - birthYear

// alert("your birth year is : " + birthYear)
  
// ========== Q-14 =========== //

// var customerName = "ABC Customer"
// var month = new Date();
// var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// var currentMonth = monthArray[month.getMonth()]

// var noOfUnits = 410;
// var chargesPerUnit = 16;
// var netAmountPayable = noOfUnits * chargesPerUnit;
// var latePayment = 350;
// var grossAmount = netAmountPayable + latePayment;

// document.write("<h1>K-Elelctric Bill</h1> <br>")
// document.write("Customer Name: <b>" + customerName + "</b><br>")
// document.write("Current Month: <b>" + currentMonth + "</b><br>")
// document.write("Number of units: <b>" + noOfUnits + "</b><br>")
// document.write("Charges per unit: <b>" + chargesPerUnit + "</b><br><br>")

// document.write("Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>")
// document.write("Late Payment Surcharge: <b>" + latePayment + "</b><br>")
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>")
