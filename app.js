function q1() {
    var currentTime = new Date();
    alert(currentTime);
}

function q2() {
    var month = new Date();
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentMonth = monthArray[month.getMonth()];
    alert(currentMonth);
}

function q3() {
    var date = new Date();
    var dayArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var currentDay = dayArray[date.getDay()];
    alert("Today is : " + currentDay);
}

function q4() {
    var date = new Date();
    var dayArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    var currentDay = dayArray[date.getDay()];

    if (currentDay === "Sun" || currentDay === "Sat") {
        alert("It's Fun Day");
    } else {
        alert("It's not a Fun Day");
    }
}

function q5() {
    var date = new Date();
    var currentDate = date.getDate();

    if (currentDate <= 15) {
        alert("First fifteen days of the month");
    } else {
        alert("Last days of the month");
    }
}

function q6() {
    var date = new Date();
    var timeInMillisecond = date.getTime();
    var minute = Math.floor(timeInMillisecond / (1000 * 60));

    document.write("Current Date: " + date + "<br>");
    document.write("Elapsed milliseconds since January 1, 1970: " + timeInMillisecond + "<br>");
    document.write("Elapsed minutes since January 1, 1970: " + minute);
}

function q7() {
    var date = new Date();
    var currentTime = date.getHours();

    if (currentTime < 12) {
        alert("It's AM");
    } else {
        alert("It's PM");
    }
}

function q8() {
    var laterDate = new Date("31 December, 2026");
    alert(laterDate);
}

function q9() {
    var currentTime = new Date().getTime();
    var ramadanDate = new Date("March 30, 2025").getTime();
    var dayPassed = Math.floor((currentTime - ramadanDate) / (1000 * 60 * 60 * 24));

    alert(dayPassed + " days have passed since 1st Ramadan, 2025");
}

function q10() {
    var datePassed = new Date("1 Jan, 2015");
    var secondsPassed = Math.floor((new Date().getTime() - datePassed.getTime()) / 1000);

    document.write("On reference Date " + datePassed + ", <br>" +
        secondsPassed + " seconds had passed since beginning of 2015");
}

function q11() {
    var date = new Date();
    var afterTime = new Date(date);
    afterTime.setHours(date.getHours() + 1);

    document.write("Current Date : " + date + "<br>");
    document.write("1 hour later, it will be : " + afterTime);
}

function q12() {
    var currentDate = new Date();
    var pastDate = new Date(currentDate);
    pastDate.setFullYear(currentDate.getFullYear() - 100);

    document.write("Current Date : " + currentDate + "<br>");
    document.write("100 Years back, it was : " + pastDate);
}

function q13() {
    var age = +prompt("Enter your age?");
    var birthYear = new Date().getFullYear() - age;
    alert("Your birth year is : " + birthYear);
}

function q14() {
    var customerName = "ABC Customer";
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentMonth = monthArray[new Date().getMonth()];

    var noOfUnits = 410;
    var chargesPerUnit = 16;
    var netAmountPayable = noOfUnits * chargesPerUnit;
    var latePayment = 350;
    var grossAmount = netAmountPayable + latePayment;

    document.write("<h1>K-Electric Bill</h1>");
    document.write("Customer Name: <b>" + customerName + "</b><br>");
    document.write("Current Month: <b>" + currentMonth + "</b><br>");
    document.write("Number of Units: <b>" + noOfUnits + "</b><br>");
    document.write("Charges per Unit: <b>" + chargesPerUnit + "</b><br><br>");
    document.write("Net Amount Payable: <b>" + netAmountPayable + "</b><br>");
    document.write("Late Payment Surcharge: <b>" + latePayment + "</b><br>");
    document.write("Gross Amount Payable: <b>" + grossAmount + "</b>");
}
